import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource-variable/manrope/wght.css';
import '@fontsource-variable/outfit/wght.css';
import './styles/site.css';
import { App } from './App.jsx';

const root = document.getElementById('root');

if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
