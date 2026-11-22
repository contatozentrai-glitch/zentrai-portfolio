import { links } from '../data/site.js';

export function Brand() {
  return (
    <a className="brand" href={links.home} aria-label="Zentrai, início">
      <img src="/images/branding/zentrai-mark.png" alt="" width="33" height="33" />
      <span>zentrai<span className="brand-period">.</span></span>
    </a>
  );
}
