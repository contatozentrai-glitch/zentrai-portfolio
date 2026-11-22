import { Reveal } from '../components/Reveal.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { services } from '../data/site.js';

export function Services() {
  return (
    <section id="servicos" tabIndex={-1} aria-labelledby="services-title" className="section services-section">
      <div className="site-container">
        <Reveal>
          <SectionHeading id="services-title" label="Serviços">
            Soluções digitais para<br className="wide-break" /> negócios que querem evoluir.
          </SectionHeading>
        </Reveal>
        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} className="service-reveal" delay={index * 0.06}>
              <article className="service-card">
                <span className="service-icon"><Icon size={27} strokeWidth={1.55} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
