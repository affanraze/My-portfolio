const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('/home/affan/frontEndDev/portfolio/public/Affan_Resume.pdf'));

// Header
doc.fontSize(24).font('Helvetica-Bold').fillColor('#003399').text('Affan', { align: 'center' });
doc.fontSize(12).font('Helvetica').fillColor('#666666').text('MERN Stack Developer | UI/UX Designer | Digital Artist', { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor('#0054E3').text('Sahiwal, Pakistan | affanraze@gmail.com | linkedin.com/in/affandev', { align: 'center' });
doc.moveDown(2);

// Summary
doc.fontSize(14).font('Helvetica-Bold').fillColor('#003399').text('Professional Summary');
doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#003399').stroke();
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica').fillColor('#000000').text('A highly motivated and creative student and developer with a deep focus on the MERN stack. Expertise in building scalable, responsive web applications with a strong emphasis on user-centric design and aesthetic excellence. Combining technical proficiency in full-stack development with a passion for digital art and UI/UX optimization to deliver immersive digital experiences.', { lineGap: 2 });
doc.moveDown();

// Education
doc.fontSize(14).font('Helvetica-Bold').fillColor('#003399').text('Education');
doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#003399').stroke();
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor('#000000').text('ICS (Intermediate in Computer Science)');
doc.fontSize(10).font('Helvetica').fillColor('#666666').text('Concordia College | 2023 – 2025');
doc.fontSize(9).font('Helvetica').fillColor('#000000').text('Focused on Computer Science, Mathematics, and Physics. Developing a solid foundation in programming and logic.');
doc.moveDown();
doc.fontSize(11).font('Helvetica-Bold').fillColor('#000000').text('Secondary School Certificate');
doc.fontSize(10).font('Helvetica').fillColor('#666666').text('Allied School | 2021 – 2023');
doc.fontSize(9).font('Helvetica').fillColor('#000000').text('Excelled in Science subjects with a strong interest in technology and creative arts.');
doc.moveDown();

// Projects
doc.fontSize(14).font('Helvetica-Bold').fillColor('#003399').text('Personal Projects');
doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#003399').stroke();
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor('#000000').text('Windows XP Portfolio — React & Framer Motion');
doc.fontSize(9).font('Helvetica').text('Developed an authentic OS-themed portfolio featuring a window management system, boot sequence, and interactive applications. Focused on retro-UI fidelity and performance.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').text('E-Commerce Platform — MERN Stack');
doc.fontSize(9).font('Helvetica').text('Built a full-stack store with user authentication, product filtering, and dynamic cart management. Integrated MongoDB for persistent data storage.');
doc.moveDown(0.5);
doc.fontSize(11).font('Helvetica-Bold').text('Amy-AI Chatbot — React & Gemini API');
doc.fontSize(9).font('Helvetica').text('Created an AI assistant with a custom-designed interface, featuring smooth GSAP animations and real-time responses.');
doc.moveDown();

// Skills
doc.fontSize(14).font('Helvetica-Bold').fillColor('#003399').text('Core Skills');
doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#003399').stroke();
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('Technical: ', { continued: true }).font('Helvetica').text('JavaScript, React, Node.js, Express.js, MongoDB, Tailwind CSS, Git, HTML5/CSS3');
doc.fontSize(10).font('Helvetica-Bold').text('Creative: ', { continued: true }).font('Helvetica').text('UI/UX Design, Figma, Digital Art, Problem Solving, Adaptability, Visual Storytelling');
doc.moveDown();

// Languages & Hobbies
doc.fontSize(14).font('Helvetica-Bold').fillColor('#003399').text('Languages & Hobbies');
doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#003399').stroke();
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica-Bold').fillColor('#000000').text('Languages: ', { continued: true }).font('Helvetica').text('English (Fluent), Urdu (Native), German (Beginner)');
doc.fontSize(10).font('Helvetica-Bold').text('Interests: ', { continued: true }).font('Helvetica').text('Exploring AI advancements, Game Development & Game Design, Sketching digital characters, Retro-tech preservation.');
doc.moveDown();

// Core Values
doc.fontSize(14).font('Helvetica-Bold').fillColor('#003399').text('Core Values');
doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#003399').stroke();
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica-Oblique').fillColor('#444444').text('"I believe in continuous learning and the power of clean, accessible design. My goal is to bridge the gap between complex technical systems and intuitive user interfaces, ensuring that technology serves people in the most beautiful way possible."', { lineGap: 2 });
doc.moveDown();

// References
doc.fontSize(14).font('Helvetica-Bold').fillColor('#003399').text('References');
doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#003399').stroke();
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica').fillColor('#666666').text('Excellent academic and professional references are available upon request.', { lineGap: 2 });

doc.end();
console.log('Final Full-Page PDF generated successfully');
