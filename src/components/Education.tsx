import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        {education.map((ed) => (
          <div key={`${ed.school}-${ed.degree}`} className="card">
            <header className="card-header">
              <h3>{ed.school}</h3>
              <div className="meta">{ed.degree} · {ed.location} · {ed.dateRange}</div>
            </header>
            {ed.details && (
              <ul>
                {ed.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


