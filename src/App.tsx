import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect, useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close menu on nav link click (mobile)
  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = () => setMenuOpen(false);
    document.querySelectorAll('.nav a').forEach((el) => el.addEventListener('click', closeMenu));
    return () => {
      document.querySelectorAll('.nav a').forEach((el) => el.removeEventListener('click', closeMenu));
    };
  }, [menuOpen]);

  return (
    <>
      <header className="topbar">
        <a href="#home" className="brand">Pavan Kumar Ramesh</a>
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="menu-bar" />
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
        <nav
          id="main-nav"
          className={`nav${menuOpen ? ' open' : ''}`}
        >
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Pavan Kumar Ramesh</footer>
    </>
  )
}

export default App
