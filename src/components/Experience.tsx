import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} className="card">
            <header className="card-header">
              <h3>{exp.role}</h3>
              <div className="meta"><span className="company-pill">{exp.company}</span> · {exp.location} · {exp.dateRange}</div>
            </header>
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


