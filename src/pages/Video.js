// Video.js
import React from 'react';
import './Video.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FaFilm, FaMagic, FaClock, FaChartLine } from 'react-icons/fa';

const VideoEditing = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };

  return (
    <>
    <div className="video-editing-container">
      {/* Hero Section */}
      <section className="video-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional Video Editing</h1>
            <p>
              Transform raw footage into cinematic masterpieces that captivate and inspire. 
              Our expert video editing services bring your vision to life with seamless transitions, dynamic visuals, sound design, and compelling storytelling. 
              Whether it's a promotional video, event highlight, or brand documentary, we ensure every frame reflects quality, creativity, and emotion — leaving a lasting impression on your audience.
            </p>
            <button className="hero1" onClick={handleBookCall}>Contact Us</button>
          </div>
          <div className="hero-image">
            <img src="video.jpeg" alt="Video Editing Illustration" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="video-services">
        <h2>Our Video Editing Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Corporate Videos</h3>
            <p>Polished edits for business promos, testimonials, and presentations.</p>
          </div>
          <div className="service-card">
            <h3>Event Highlights</h3>
            <p>Capture the essence of weddings, parties, and ceremonies in style.</p>
          </div>
          <div className="service-card">
            <h3>Social Media Shorts</h3>
            <p>Engaging vertical videos tailored for Instagram Reels, TikTok & YouTube Shorts.</p>
          </div>
          <div className="service-card">
            <h3>Vlogs & Content</h3>
            <p>Seamless cuts, transitions, and color grading to boost your channel's quality.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-video container my-5">
        <h2 className="text-center mb-4">Why Choose Our Editing Studio?</h2>
        <div className="row justify-content-center gx-4 gy-4">
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
              <FaFilm size={32} color="#008080" className="mb-2 mb-lg-0 me-0 me-lg-3" />
              <p className="mb-0">Industry-standard tools like Adobe Premiere Pro & Final Cut Pro</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
              <FaMagic size={32} color="#008080" className="mb-2 mb-lg-0 me-0 me-lg-3" />
              <p className="mb-0">Stunning transitions, effects & animations</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
              <FaClock size={32} color="#008080" className="mb-2 mb-lg-0 me-0 me-lg-3" />
              <p className="mb-0">Fast turnaround with revision support</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
              <FaChartLine size={32} color="#008080" className="mb-2 mb-lg-0 me-0 me-lg-3" />
              <p className="mb-0">Optimized output for any platform or resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="video-portfolio">
        <h2>Our Portfolio</h2>
        <div className="video-grid">
          <video src="/videos/sample1.mp4" controls></video>
          <video src="/videos/sample2.mp4" controls></video>
          <video src="/videos/sample3.mp4" controls></video>
        </div>
      </section>

      {/* Process Section */}
      <section className="video-process container my-5">
        <h2 className="text-center mb-4">Our Editing Process</h2>
        <div className="process-steps">
          <div className="step">
            <h4>1. Consultation</h4>
            <p>Understand client needs and gather footage & brief.</p>
          </div>
          <div className="step">
            <h4>2. Editing</h4>
            <p>Apply cuts, transitions, sound design & effects.</p>
          </div>
          <div className="step">
            <h4>3. Review</h4>
            <p>Client feedback is reviewed and revisions made.</p>
          </div>
          <div className="step">
            <h4>4. Delivery</h4>
            <p>Final output delivered in high quality formats.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="video-testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial-cards">
          <div className="step">
            <p>"Absolutely stunning edits. Took our brand to the next level!"</p>
            <strong>- Riya M.</strong>
          </div>
          <div className="step">
            <p>"Quick, professional, and incredibly creative. Highly recommend."</p>
            <strong>- Aman T.</strong>
          </div>
          <div className="step">
            <p>"Made our wedding footage magical. Can't thank you enough!"</p>
            <strong>- Meera & Rahul</strong>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="video-cta">
        <h2>Ready to Bring Your Vision to Life?</h2>
        <button className="btn1" onClick={handleBookCall}>Let’s Get Started</button>
        <button className="btn2" onClick={() => navigate('/')}>Back to Home</button>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default VideoEditing;