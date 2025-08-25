import { projects } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="pill-row">
                {p.tech.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
              {p.links && (
                <div className="link-row">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-small btn-outline">{l.label}</a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


