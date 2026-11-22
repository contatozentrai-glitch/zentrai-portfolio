import { useState } from 'react';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { projects } from '../data/projects.js';

const filters = ['Todos', ...new Set(projects.map(({ category }) => category))];
const projectLabels = { demo: 'Projeto de demonstração', client: 'Projeto para cliente' };

function ProjectCard({ project }) {
  const { name, category, description, image, imageAlt, url, type } = project;

  return (
    <article className="project-card">
      {image && (
        <div className="project-image">
          <img src={image} alt={imageAlt} width="1120" height="630" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="project-content">
        <div className="project-meta">
          <span>{category}</span>
          {type && <span className="project-status">{projectLabels[type]}</span>}
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a className="project-link" href={url} target="_blank" rel="noopener noreferrer">
          Visualizar projeto<span className="sr-only"> de {name} (nova aba)</span>
        </a>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const displayed = projects.filter(({ category }) => activeFilter === filters[0] || activeFilter === category);

  return (
    <section id="projetos" tabIndex={-1} aria-labelledby="projects-title" className="section portfolio-section">
      <div className="site-container">
        <Reveal>
          <SectionHeading id="projects-title" label="Portfólio">
            Projetos que transformam<br className="wide-break" /> ideias em realidade.
          </SectionHeading>
        </Reveal>
        <div className="portfolio-filters" role="group" aria-label="Filtrar projetos por categoria">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {displayed.length} {displayed.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
        </p>
        <div className="project-grid">
          {displayed.map((project) => (
            <Reveal key={project.id} className="project-reveal">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
