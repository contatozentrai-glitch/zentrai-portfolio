import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { links, navigation } from '../data/site.js';
import { Brand } from './Brand.jsx';

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 761px)');
    const onResize = (event) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-header" href={links.contact}>Solicitar prévia</a>
        <button
          type="button"
          className="menu-toggle"
          ref={menuButton}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação principal" hidden={!open}>
        <div className="site-container">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => {
              setOpen(false);
              document.getElementById(href.slice(1))?.focus({ preventScroll: true });
            }}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
