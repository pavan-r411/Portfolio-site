import { skills } from '../data/resume';

function Pills({ items }: { items: string[] }) {
  return (
    <div className="pill-row">
      {items.map((i) => (
        <span key={i} className="pill">{i}</span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <h3>Programming</h3>
        <Pills items={skills.programming} />
        <h3>Databases</h3>
        <Pills items={skills.databases} />
        <h3>AI/ML</h3>
        <Pills items={skills.ai} />
        <h3>Technologies</h3>
        <Pills items={skills.technologies} />
      </div>
    </section>
  );
}


