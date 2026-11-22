import { WhatsAppLink } from '../components/ContactLinks.jsx';
import { ContactArtwork } from '../components/ParticleArtwork.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';

export function Contact() {
  return (
    <section id="contato" tabIndex={-1} aria-labelledby="contact-title" className="contact-section">
      <div className="site-container">
        <Reveal className="contact-panel">
          <ContactArtwork />
          <div className="contact-copy">
            <SectionHeading id="contact-title" label="Contato">
              Seu próximo cliente pode estar procurando por você agora.
            </SectionHeading>
            <p>Vamos transformar a presença digital do seu negócio? Solicite uma prévia e descubra como seu novo site pode ficar.</p>
            <WhatsAppLink className="button button-primary" icon>Quero minha prévia gratuita</WhatsAppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
