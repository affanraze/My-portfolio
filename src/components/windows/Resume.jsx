import React from 'react';

export default function Resume() {
  return (
    <div className="resume-content">
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, marginBottom: 4, color: '#003399' }}>Affan</h2>
        <p style={{ color: '#666', fontSize: 12 }}>
          MERN Stack Developer • UI/UX Designer • Digital Artist
        </p>
        <p style={{ color: '#0054E3', fontSize: 11, marginTop: 4 }}>
          Sahiwal, Pakistan • affanraze@gmail.com • linkedin.com/in/affandev
        </p>
      </div>

      <div className="resume-section">
        <h2>👤 Professional Summary</h2>
        <p style={{ fontSize: 12, lineHeight: 1.6 }}>
          A highly motivated and creative student and developer with a deep focus on the MERN stack.
          Expertise in building scalable, responsive web applications with a strong emphasis on user-centric design
          and aesthetic excellence. Combining technical proficiency in full-stack development with a passion
          for digital art and UI/UX optimization to deliver immersive digital experiences.
        </p>
      </div>

      <div className="resume-section">
        <h2>🎓 Education</h2>
        <div className="resume-entry">
          <div className="resume-entry-title">ICS (Intermediate in Computer Science)</div>
          <div className="resume-entry-meta">Concordia College • 2023 – 2025 </div>
          <p style={{ fontSize: 11 }}>Focused on Computer Science, Mathematics, and Physics. Developing a solid foundation in programming and logic.</p>
        </div>
        <div className="resume-entry" style={{ marginTop: 8 }}>
          <div className="resume-entry-title">Secondary School Certificate</div>
          <div className="resume-entry-meta">Allied School • 2021 – 2023</div>
          <p style={{ fontSize: 11 }}>Excelled in Science subjects with a strong interest in technology and creative arts.</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>🚀 Personal Projects</h2>
        <div className="resume-entry">
          <div className="resume-entry-title">Windows XP Portfolio — React & Framer Motion</div>
          <p style={{ fontSize: 11 }}>Developed an authentic OS-themed portfolio featuring a window management system, boot sequence, and interactive applications. Focused on retro-UI fidelity and performance.</p>
        </div>
        <div className="resume-entry" style={{ marginTop: 8 }}>
          <div className="resume-entry-title">E-Commerce Platform — MERN Stack</div>
          <p style={{ fontSize: 11 }}>Built a full-stack store with user authentication, product filtering, and dynamic cart management. Integrated MongoDB for persistent data storage.</p>
        </div>
        <div className="resume-entry" style={{ marginTop: 8 }}>
          <div className="resume-entry-title">Amy-AI Chatbot — React & Gemini API</div>
          <p style={{ fontSize: 11 }}>Created an AI assistant with a custom-designed interface, featuring smooth GSAP animations and real-time responses.</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>🛠️ Core Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: 13, color: '#003399', marginBottom: 8 }}>Technical</h3>
            <div className="skill-tags">
              {['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git', 'HTML5/CSS3'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 13, color: '#003399', marginBottom: 8 }}>Creative & Soft</h3>
            <div className="skill-tags">
              {['UI/UX Design', 'Figma', 'Digital Art', 'Problem Solving', 'Adaptability', 'Visual Storytelling'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2>🌐 Languages & Hobbies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: 12, lineHeight: 1.5 }}>
          <div>
            <p><strong>Languages:</strong></p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>• English (Fluent)</li>
              <li>• Urdu (Native)</li>
              <li>• German (Beginner)</li>
            </ul>
          </div>
          <div>
            <p><strong>Interests:</strong></p>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>• Generative AI & LLMs</li>
              <li>• Game Development & Game Design</li>
              <li>• Sketching Digital Art</li>
              <li>• Retro Computing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2>🌟 Core Values</h2>
        <p style={{ fontSize: 11, fontStyle: 'italic', color: '#444' }}>
          "I believe in continuous learning and the power of clean, accessible design. My goal is to bridge the gap between complex technical systems and intuitive user interfaces, ensuring that technology serves people in the most beautiful way possible."
        </p>
      </div>

      <div className="resume-section">
        <h2>📄 References</h2>
        <p style={{ fontSize: 11, color: '#666' }}>Excellent academic and professional references are available upon request.</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: 32, paddingBottom: 40 }}>
        <a
          href="/Affan_Resume.pdf"
          download="Affan_Resume.pdf"
          className="xp-button primary"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          📄 Download PDF Resume
        </a>
      </div>
    </div>
  );
}
