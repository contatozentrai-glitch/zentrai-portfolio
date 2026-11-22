import { useEffect, useRef } from 'react';

const fullTurn = Math.PI * 2;
const frameInterval = 1000 / 32;
const palette = ['#4789ff69', '#5398ffb8', '#6eadffdc', '#9acafff5', '#d5edff'];
const tiltSin = Math.sin(-0.52);
const tiltCos = Math.cos(-0.52);

function seededRandom(seed) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

function createHeroParticles(compact) {
  const random = seededRandom(8317);
  const layers = palette.map(() => []);
  const orbitCount = compact ? 1200 : 3240;
  const coreCount = compact ? 400 : 1120;
  const dustCount = compact ? 85 : 240;

  for (let index = 0; index < orbitCount; index += 1) {
    const distance = Math.pow(random(), 0.78);
    const phase = random() * fullTurn;
    const spread = random() - 0.5;
    const color = Math.floor(Math.pow(random(), 1.55) * palette.length);

    layers[color].push({
      kind: 'orbit',
      angle: (index % 3) * fullTurn / 3 - distance * 4.3 + spread * (0.3 + distance * 0.92),
      distance,
      height: (random() - random()) * (0.07 + distance * 0.31),
      phase,
      size: 0.43 + Math.pow(random(), 2.1) * 1.46,
    });
  }

  for (let index = 0; index < coreCount; index += 1) {
    const height = 1 - 2 * ((index + 0.5) / coreCount);
    const color = 2 + Math.floor(random() * 3);
    layers[color].push({
      kind: 'core',
      angle: index * 2.399963,
      distance: Math.sqrt(1 - height * height),
      height,
      phase: random() * fullTurn,
      size: 0.37 + Math.pow(random(), 2) * 1.06,
    });
  }

  for (let index = 0; index < dustCount; index += 1) {
    const color = random() > 0.12 ? 0 : 1;
    layers[color].push({
      kind: 'dust',
      x: random(),
      y: random(),
      phase: random() * fullTurn,
      size: 0.38 + Math.pow(random(), 2) * 1.65,
    });
  }

  return layers;
}

function paintHero(context, scene, pointer, time, settled) {
  const { width, height, scale, originX, originY, layers } = scene;
  const assembly = settled ? 0 : Math.pow(1 - Math.min(time / 1.45, 1), 3);
  const pulse = 1 + 0.055 * Math.sin(time * 1.3);
  const pointerRadius = scale * 0.9;
  const pointerRadiusSquared = pointerRadius * pointerRadius;
  const strength = pointer.strength;
  const departure = settled ? 0 : scene.departure;
  const dispersion = assembly * 1.8 + departure * 1.15;

  context.clearRect(0, 0, width, height);
  context.globalAlpha = 1 - departure * 0.62;

  for (const [layerIndex, particles] of layers.entries()) {
    context.fillStyle = palette[layerIndex];
    context.beginPath();
    for (const particle of particles) {
      const { kind, phase } = particle;
      let size = particle.size;
      let x;
      let y;

      if (kind === 'dust') {
        x = particle.x * width + Math.sin(phase + time * 0.49) * 16;
        y = particle.y * height + Math.cos(phase + time * 0.37) * 14;
        size *= 0.84 + 0.23 * Math.sin(time * 1.8 + phase);
      } else if (kind === 'core') {
        const angle = particle.angle + time * 0.65;
        const depth = Math.sin(angle) * particle.distance;
        const radius = 0.51 * scale * pulse;
        x = originX + Math.cos(angle) * particle.distance * radius;
        y = originY + (particle.height + depth * 0.12) * radius;
        size *= 0.91 + depth * 0.18;
      } else {
        const orbit = 0.43 + particle.distance * 1.54;
        const angle = particle.angle + time * 0.33 + 0.13 * Math.sin(phase + time * 1.35);
        const orbitX = Math.cos(angle) * orbit;
        const orbitY = Math.sin(angle) * orbit * 0.53 + particle.height + Math.sin(phase + time * 1.8) * 0.04;
        x = originX + (orbitX * tiltCos - orbitY * tiltSin) * scale;
        y = originY + (orbitX * tiltSin + orbitY * tiltCos) * scale;
      }

      if (dispersion && kind !== 'dust') {
        x += Math.cos(phase) * dispersion * scale;
        y += (Math.sin(phase) * dispersion * 0.74 - departure * 0.22) * scale;
      }

      if (strength > 0.01) {
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < pointerRadiusSquared) {
          const falloff = 1 - distanceSquared / pointerRadiusSquared;
          const push = falloff * strength * 0.75;
          x += (dx - dy * 0.45) * push;
          y += (dy + dx * 0.45) * push;
        }
      }

      context.moveTo(x + size, y);
      context.arc(x, y, size, 0, fullTurn);
    }
    context.fill();
  }
}

function createContactParticles(compact) {
  const random = seededRandom(1459);
  const layers = palette.map(() => []);
  const count = compact ? 810 : 1680;
  const inclinations = [-0.93, -0.69, -0.45, -0.19, 0.15];

  for (let index = 0; index < count; index += 1) {
    const band = index % inclinations.length;
    const tilt = inclinations[band];
    const color = Math.floor(Math.pow(random(), 1.35) * palette.length);
    layers[color].push({
      angle: index % 4 ? random() * fullTurn : band * 0.78 + (random() + random() - 1) * 0.95,
      radius: 0.49 + band * 0.15 + (random() - random()) * 0.07,
      speed: (0.22 + band * 0.045) * (band % 2 ? -1 : 1),
      tiltCos: Math.cos(tilt),
      tiltSin: Math.sin(tilt),
      size: 0.48 + Math.pow(random(), 1.7) * 1.59,
    });
  }

  return layers;
}

function paintContact(context, scene, pointer, time) {
  const { width, height, scale, originX, originY, layers } = scene;
  const offsetX = Math.max(-24, Math.min(24, (pointer.x - originX) * 0.12)) * pointer.strength;
  const offsetY = Math.max(-20, Math.min(20, (pointer.y - originY) * 0.12)) * pointer.strength;

  context.clearRect(0, 0, width, height);

  for (const [index, particles] of layers.entries()) {
    context.fillStyle = palette[index];
    context.beginPath();

    for (const particle of particles) {
      const angle = particle.angle + time * particle.speed;
      const x = Math.cos(angle) * particle.radius * scale;
      const y = Math.sin(angle) * particle.radius * scale * 0.45;
      const px = originX + x * particle.tiltCos - y * particle.tiltSin + offsetX;
      const py = originY + x * particle.tiltSin + y * particle.tiltCos + offsetY;
      const size = particle.size * (0.77 + 0.24 * Math.sin(angle * 2 - time * 0.8));

      context.moveTo(px + size, py);
      context.arc(px, py, size, 0, fullTurn);
    }

    context.fill();
  }
}

const heroDesign = {
  createParticles: createHeroParticles,
  paint: paintHero,
  trackDeparture: true,
  geometry: (width, height, compact) => ({
    scale: Math.min(width / (compact ? 3.75 : 4.3), height / 3.1),
    originX: width * (compact ? 0.51 : 0.72),
    originY: height * 0.51,
  }),
};

const contactDesign = {
  createParticles: createContactParticles,
  paint: paintContact,
  geometry: (width, height, compact) => ({
    scale: Math.min(width * (compact ? 0.7 : 0.34), height * 0.65),
    originX: width * (compact ? 0.86 : 0.81),
    originY: height * (compact ? 0.62 : 0.54),
  }),
};

function useParticleArtwork(design) {
  const canvas = useRef(null);

  useEffect(() => {
    const { createParticles, paint, geometry, trackDeparture } = design;
    const element = canvas.current;
    const context = element?.getContext('2d');
    const section = element?.closest('section');
    if (!context || !section) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = { x: 0, y: 0, inside: false, strength: 0 };
    let scene;
    let compact;
    let visible = false;
    let frame = 0;
    let time = 0;
    let previousFrame;

    const updateDeparture = () => {
      if (!trackDeparture || !scene) return;
      const { top } = element.getBoundingClientRect();
      scene.departure = Math.min(1, Math.max(0, -top / scene.height));
    };

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = element;
      if (!width || !height) return;

      const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      element.width = Math.round(width * ratio);
      element.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const useCompactScene = width < 640;
      const layers = scene && useCompactScene === compact ? scene.layers : createParticles(useCompactScene);
      compact = useCompactScene;
      scene = {
        width,
        height,
        layers,
        ...geometry(width, height, compact),
        departure: 0,
      };
      updateDeparture();
      paint(context, scene, pointer, motion.matches ? 0 : time, motion.matches);
    };

    const tick = (now) => {
      if (scene && (previousFrame === undefined || now - previousFrame >= frameInterval)) {
        if (previousFrame !== undefined) time += Math.min((now - previousFrame) / 1000, 0.08);
        previousFrame = now;
        pointer.strength += ((pointer.inside ? 1 : 0) - pointer.strength) * 0.12;
        paint(context, scene, pointer, time, false);
      }
      frame = requestAnimationFrame(tick);
    };

    const syncAnimation = () => {
      if (visible && !document.hidden && !motion.matches) {
        updateDeparture();
        if (!frame) frame = requestAnimationFrame(tick);
        return;
      }

      cancelAnimationFrame(frame);
      frame = 0;
      previousFrame = undefined;
      if (scene && motion.matches) {
        pointer.strength = 0;
        paint(context, scene, pointer, 0, true);
      }
    };

    const onPointerMove = (event) => {
      if (event.pointerType === 'touch' || motion.matches) return;
      const bounds = element.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.inside = true;
    };
    const onPointerLeave = () => { pointer.inside = false; };
    const onScroll = () => {
      if (visible && !motion.matches) updateDeparture();
    };
    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });

    resize();
    resizeObserver.observe(element);
    visibilityObserver.observe(element);
    motion.addEventListener('change', syncAnimation);
    document.addEventListener('visibilitychange', syncAnimation);
    if (trackDeparture) window.addEventListener('scroll', onScroll, { passive: true });
    section.addEventListener('pointermove', onPointerMove, { passive: true });
    section.addEventListener('pointerleave', onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      motion.removeEventListener('change', syncAnimation);
      document.removeEventListener('visibilitychange', syncAnimation);
      if (trackDeparture) window.removeEventListener('scroll', onScroll);
      section.removeEventListener('pointermove', onPointerMove);
      section.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [design]);

  return canvas;
}

export function HeroArtwork() {
  const canvas = useParticleArtwork(heroDesign);
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-halo" />
      <canvas ref={canvas} className="hero-canvas" />
    </div>
  );
}

export function ContactArtwork() {
  const canvas = useParticleArtwork(contactDesign);
  return (
    <div className="contact-art" aria-hidden="true">
      <canvas ref={canvas} className="contact-canvas" />
    </div>
  );
}
