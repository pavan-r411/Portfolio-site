import { profile } from '../data/resume';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0072c6" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#25d366" d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.8 11.8 0 0 0 3.7.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.8 11.8 0 0 0 .6 3.7 1 1 0 0 1-.25 1Z"/></svg>
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>{profile.phone}</a>
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.2-1-1.2-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1 3 .8.1-.6.4-1 .7-1.2-2.2-.2-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.2-.4-1.2.1-2.5 0 0 .8-.2 2.6 1a9 9 0 0 1 4.6 0c1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.6 5 .4.3.8.9.8 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>
            <a href="https://github.com/pavan-r411" target="_blank" rel="noreferrer">github.com/pavan-r411</a>
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#0077b5" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const from = encodeURIComponent(String(data.get('from') || ''));
            const subject = encodeURIComponent(String(data.get('subject') || 'Message from portfolio'));
            const message = encodeURIComponent(String(data.get('message') || ''));
            const body = encodeURIComponent(`From: ${from}\n\n${decodeURIComponent(message)}`);
            window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
          }}
        >
          <div className="form-row">
            <label>
              Your email
              <input name="from" type="email" placeholder="you@example.com" required className="input" />
            </label>
            <label>
              Subject
              <input name="subject" type="text" placeholder="Hello" className="input" />
            </label>
          </div>
          <label className="block">
            Message
            <textarea name="message" rows={5} placeholder="Write your message..." required className="textarea" />
          </label>
          <button type="submit" className="btn" style={{marginTop: '.75rem'}}>Send Email</button>
        </form>
      </div>
    </section>
  );
}


