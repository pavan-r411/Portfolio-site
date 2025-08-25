import { profile } from '../data/resume';

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <div className="hero-row">
          {/* public/pavan.jpg */}
          <img src={asset('pavan.jpg')} alt="Pavan Kumar Ramesh" className="avatar" />

          <div className="hero-content">
            <h1>{profile.name}</h1>
            <p className="tagline">{profile.tagline} · {profile.location}</p>
            <p className="contact">
              <a href={`mailto:${profile.email}`}>{profile.email}</a> · {profile.phone} ·{' '}
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
            <nav className="cta-row">
              <a href="#projects" className="btn">Projects</a>
              {/* public/Pavan_kumar_Ramesh.pdf */}
              <a href={asset('Pavan_kumar_Ramesh.pdf')} download className="btn btn-outline">
                Download Résumé
              </a>
              <a href="#contact" className="btn btn-outline">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
