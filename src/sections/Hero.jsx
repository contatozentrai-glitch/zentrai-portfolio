import { HeroArtwork } from '../components/ParticleArtwork.jsx';
import { WhatsAppLink } from '../components/ContactLinks.jsx';
import { links } from '../data/site.js';

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero">
      <div className="site-container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> Estúdio de desenvolvimento web</p>
          <h1 id="hero-title">Seu negócio merece uma presença digital <em>de verdade.</em></h1>
          <p className="hero-description">Na Zentrai, transformamos ideias em experiências digitais profissionais que valorizam sua marca e aproximam seu negócio de novos clientes.</p>
          <div className="hero-actions">
            <WhatsAppLink className="button button-primary" icon>Solicitar uma prévia gratuita</WhatsAppLink>
            <a className="button button-secondary" href={links.projects}>Conhecer nossos projetos</a>
          </div>
        </div>
        <HeroArtwork />
      </div>
    </section>
  );
}
