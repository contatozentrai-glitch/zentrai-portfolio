import { Instagram } from 'lucide-react';
import { links } from '../data/site.js';

export function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M20.8 11.7a8.8 8.8 0 0 1-13 7.7L3 20.8l1.4-4.7a8.8 8.8 0 1 1 16.4-4.4Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
      <path d="M9.1 7.9c-.2-.4-.4-.5-.6-.5h-.4c-.2 0-.5.1-.7.4s-.9.9-.9 2.1 1 2.5 1.1 2.7c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3-1.7-.8c-.2-.1-.4-.2-.6.1l-.8.9c-.1.2-.3.2-.5.1a7.4 7.4 0 0 1-2-1.2 6.6 6.6 0 0 1-1.3-1.7c-.2-.2 0-.4.1-.5l.4-.4.2-.4c.1-.2.1-.3 0-.4l-.7-1.7Z" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppLink({ children, className, icon = false, ...props }) {
  return (
    <a className={className} href={links.whatsapp} target="_blank" rel="noopener noreferrer" {...props}>
      {icon && <WhatsAppIcon />}
      {children}
    </a>
  );
}

export function FloatingContacts() {
  return (
    <aside className="floating-contacts" aria-label="Canais de contato">
      <a className="floating-link floating-instagram" href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${links.instagramHandle} (nova aba)`}>
        <Instagram size={22} aria-hidden="true" />
      </a>
      <WhatsAppLink className="floating-link floating-whatsapp" icon aria-label="Falar com a Zentrai pelo WhatsApp (nova aba)" />
    </aside>
  );
}
