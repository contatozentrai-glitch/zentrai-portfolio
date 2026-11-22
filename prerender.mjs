import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/entry-server.js';

const index = new URL('../dist/index.html', import.meta.url);
const html = await readFile(index, 'utf8');
const root = '<div id="root"></div>';

if (!html.includes(root)) {
  throw new Error('O elemento raiz da página não foi encontrado.');
}

await writeFile(index, html.replace(root, () => `<div id="root">${render()}</div>`));
