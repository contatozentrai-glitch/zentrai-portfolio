import { useEffect, useRef } from 'react';
import { useAnimate } from 'motion/react-mini';
import { useInView } from 'motion/react';

export function Reveal({ children, className, delay = 0 }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.15 });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    animated.current = true;
    animate(scope.current, { opacity: [0.56, 1], transform: ['translateY(16px)', 'translateY(0)'] }, {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 1],
      delay,
    });
  }, [animate, delay, isInView, scope]);

  return <div ref={scope} className={className}>{children}</div>;
}
