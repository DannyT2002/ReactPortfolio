import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import useReveal from '../hooks/useReveal';

const EMAIL = 'torres.daniel.0827@gmail.com';

const Contact = () => {
  const reveal = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name) next.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) next.email = 'Valid email is required';
    if (!form.message) next.message = 'Message is required';
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setStatus('');
    emailjs
      .sendForm('service_35o0zap', 'template_psn258q', e.target, 'S45tVE2sGbqBkBsQu')
      .then(() => {
        setStatus('Sent — thanks, I\'ll be in touch shortly.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('Something went wrong — please try again later.'))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section shell">
      <div ref={reveal}>
        <div className="chapter">
          <span className="idx">04</span>
          <span className="ttl">Contact</span>
        </div>

        <p className="kicker" style={{ marginBottom: '14px' }}>Have something in mind?</p>
        <h2 className="contact__big">Let's make<br />it real.</h2>
        <a className="contact__email" href={`mailto:${EMAIL}`}>{EMAIL}</a>

        <div className="contact__grid">
          <div className="contact__note">
            <p>
              Open to new projects, collaborations, and interesting problems.
              Use the form, or reach out directly — whichever's easier.
            </p>
            <p>
              <a href="https://github.com/DannyT2002" target="_blank" rel="noopener noreferrer"
                 style={{ borderBottom: '1px solid var(--line-strong)' }}>
                github.com/DannyT2002 ↗
              </a>
            </p>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              {errors.name && <span className="err">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <span className="err">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the project…" />
              {errors.message && <span className="err">{errors.message}</span>}
            </div>
            <button type="submit" className="btn-line" disabled={sending}>
              {sending ? 'Sending…' : 'Send message →'}
            </button>
            {status && <p className="form__status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
