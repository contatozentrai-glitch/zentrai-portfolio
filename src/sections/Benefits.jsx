import { WhatsAppIcon } from '../components/ContactLinks.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { benefits } from '../data/site.js';

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="section benefits-section">
      <div className="site-container benefits-layout">
        <Reveal>
          <SectionHeading id="benefits-title" label="Diferenciais">O cuidado da Zentrai em cada detalhe.</SectionHeading>
        </Reveal>
        <Reveal>
          <ul className="benefits-list">
            {benefits.map(({ label, icon: Icon }) => (
              <li key={label}>
                <span>{Icon === 'whatsapp' ? <WhatsAppIcon size={21} /> : <Icon size={21} strokeWidth={1.65} aria-hidden="true" />}</span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
