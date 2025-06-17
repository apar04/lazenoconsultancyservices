import React from "react";
import "./Posterdesign.css";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

const PosterDesigning = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <>
    <div>
    <div className="poster-designing-container">
      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-heading">Poster Designing</h1>
          <p className="hero-description">
            Transform your ideas into eye-catching posters with our professional design services.
            From event promotions to product launches and brand campaigns, we blend creativity with
            strategy to deliver visually stunning posters that capture attention and communicate your message effectively.
            Whether you need bold visuals, clean minimalism, or themed artwork, our designs are tailored to
            resonate with your target audience and elevate your brand presence.
          </p>
          <button className="cta-button" onClick={handleBookCall}>Contact Us</button>
        </div>
        <div className="hero-image">
          <img src="/poster.jpeg" alt="Creative Poster Design Banner" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Poster Design Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Event Promotion</h3>
            <p>Vibrant designs to promote events and attract attendees.</p>
          </div>
          <div className="card">
            <h3>Marketing Posters</h3>
            <p>Professional posters to advertise your business and offers.</p>
          </div>
          <div className="card">
            <h3>Custom Creations</h3>
            <p>Tailored poster designs for your unique needs and themes.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>Our Creative Design Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Consultation</h3>
            <p>We begin with a friendly discussion to understand your goals, brand identity, and target audience.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Concept & Brainstorming</h3>
            <p>We sketch and wireframe multiple poster concepts based on your ideas, trends, and inspirations.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Collaborative Feedback</h3>
            <p>You review the drafts, share feedback, and we refine the designs together to match your vision perfectly.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Final Touches & Delivery</h3>
            <p>We polish the selected design and deliver high-resolution files optimized for print and digital use.</p>
          </div>
        </div>
      </section>

     <section className="gallery py-5">
  <div className="container">
    <h2 className="text-center mb-4">Gallery</h2>
    <div className="d-flex justify-content-center">
      <div className="gallery-scroll d-flex overflow-auto gap-3 px-2 ps-3">
        <img src="/event.avif" alt="Event Promotion Poster" className="gallery-img" />
        <img src="/marketing2.avif" alt="Marketing Campaign Poster" className="gallery-img" />
        <img src="/custom.avif" alt="Custom Event Poster" className="gallery-img" />
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Ready to Make an Impact?</h2>
        <p>Contact us today to start your poster design project!</p>
        <button className="cta-button" onClick={handleBookCall}>Contact Us</button>
      </section>
      
    </div>
    <Footer/>
  </div>
  </>
  );
};

export default PosterDesigning;
