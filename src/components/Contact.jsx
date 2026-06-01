import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import useReveal from '../hooks/useReveal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'ok'|'bad', text }
  const [sending, setSending] = useState(false);
  const reveal = useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    setStatus(null);
    emailjs
      .sendForm('service_35o0zap', 'template_psn258q', e.target, 'S45tVE2sGbqBkBsQu')
      .then(() => {
        setStatus({ type: 'ok', text: '✓ Message sent — thanks, I\'ll be in touch!' });
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ type: 'bad', text: 'Something went wrong. Please try again later.' });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section">
      <div className="container" ref={reveal}>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let's <span className="grad">build something</span></h2>
        <p className="section-lead">
          Have a project in mind or just want to say hi? Drop me a message and
          I'll get back to you.
        </p>

        <div className="contact-grid">
          <div className="contact-intro">
            <p>
              I'm always open to discussing new opportunities, collaborations, or
              interesting problems to solve.
            </p>
            <div className="contact-channels">
              <a href="mailto:torres.daniel.0827@gmail.com">
                <span className="ico">✉️</span> torres.daniel.0827@gmail.com
              </a>
              <a href="https://github.com/DannyT2002" target="_blank" rel="noopener noreferrer">
                <span className="ico">🐙</span> github.com/DannyT2002
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              {errors.name && <span className="err">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <span className="err">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." />
              {errors.message && <span className="err">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending…' : 'Send message →'}
            </button>
            {status && <div className={`form-status ${status.type}`}>{status.text}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
