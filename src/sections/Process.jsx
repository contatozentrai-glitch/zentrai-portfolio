import { Reveal } from '../components/Reveal.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { steps } from '../data/site.js';

export function Process() {
  return (
    <section id="processo" tabIndex={-1} aria-labelledby="process-title" className="section process-section">
      <div className="site-container">
        <Reveal>
          <SectionHeading id="process-title" label="Como funciona">Seu site, da prévia<br className="wide-break" /> à publicação.</SectionHeading>
        </Reveal>
        <ol className="process-list">
          {steps.map(({ title, description }, index) => (
            <li key={title}>
              <Reveal delay={index * 0.07}>
                <span className="process-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div className="process-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
