import { Brand } from './Brand.jsx';
import { WhatsAppLink } from './ContactLinks.jsx';
import { links, navigation } from '../data/site.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div>
            <Brand />
            <p>Sites e soluções digitais para empresas.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="footer-social">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">{links.instagramHandle}</a>
            <WhatsAppLink>WhatsApp</WhatsAppLink>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© Zentrai. Todos os direitos reservados.</small>
          <a href={links.home}>Voltar ao topo</a>
        </div>
      </div>
    </footer>
  );
}
