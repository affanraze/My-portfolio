import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="contact-content">
      <h2>📬 Contact Me</h2>
      <p>Feel free to reach out! You can find me on these platforms or send a message below.</p>

      <div style={{ display: 'flex', gap: 12, margin: '12px 0', flexWrap: 'wrap' }}>
        <a href="#" target="_blank" rel="noopener noreferrer" className="project-detail-link">🔗 GitHub</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="project-detail-link">🔗 LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="project-detail-link">🔗 Instagram</a>
        <a href="mailto:affan@example.com" className="project-detail-link">✉️ Email</a>
      </div>

      <div className="start-menu-separator" style={{ margin: '16px 0' }} />

      <h2>💬 Send a Message</h2>
      {sent ? (
        <div style={{ padding: 16, background: '#E8F5E9', border: '1px solid #66BB6A', borderRadius: 4, color: '#2E7D32', fontSize: 12 }}>
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />
          <label>Email</label>
          <input type="email" placeholder="your@email.com" required />
          <label>Message</label>
          <textarea placeholder="Write your message here..." required />
          <button type="submit" className="xp-button primary" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
