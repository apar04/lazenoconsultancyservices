import { useState } from 'react';
import React  from 'react';
import './Contact.css';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
const Contact = () => {
   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all the fields.");
      return;
    }



    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    // const serviceId = process.env.REACT_APP_SERVICE_ID;
    // const templateId = process.env.REACT_APP_TEMPLATE_ID;
    // const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const templateParams = {
      name: name,
      form_email: email,
      form_subject: subject,
      form_message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey )
      .then((response) => {
        console.log("Email sent successfully", response);
        alert("Your message has been sent successfully!");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <>
    <div className="contact-container">
      <h1 className="contact-heading animate-fadeInDown"> Get in Touch With Us</h1>
      <p className="contact-subtext animate-fadeInUp">
        Ready to elevate your brand's social presence? Whether you're a startup or a well-established business, we’re here to craft a strategy that fits your goals.
      </p>

      <div className="contact-content">
        {/* Left - Contact Form */}
        <div className="contact-form animate-fadeInLeft">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <textarea rows="5" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>

        {/* Right - Timeline with arrow and contact info */}
        <div className="contact-timeline animate-fadeInRight">
          <div className="line"></div>
          <div className="timeline-item">
            <div className="dot">1</div>
            <h4>Reach Out</h4>
            <p>Send us a message through the contact form or email.</p>
          </div>
          <div className="timeline-item">
            <div className="dot">2</div>
            <h4>Strategy Call</h4>
            <p>We’ll schedule a consultation to understand your needs.</p>
          </div>
          <div className="timeline-item">
            <div className="dot">3</div>
            <h4>Kickstart</h4>
            <p>Our team gets to work creating impactful social campaigns.</p>
          </div>
          <div className="timeline-arrow">➤</div>

          <div className="contact-info">
            <h4>Contact Info</h4>
            <p>📍 151 A, SIFA TOWER, Karupparayan Kovil, Kurichi, Podanur, Coimbatore</p>
            <p>📧 lazenocons01@gmail.com</p>
            <p>📞 +91 7604889478</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
