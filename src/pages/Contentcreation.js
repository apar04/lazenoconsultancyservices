import React from 'react';
import './Contentcreation.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FaSearch, FaMapMarkedAlt, FaKeyboard } from 'react-icons/fa';
import { CheckCircle } from 'react-feather'; // Icon packageimport './ContentValues.css'; // Optional for custom styles
import {
  FaBlog,
  FaFileAlt,
  FaFacebookF,
  FaEnvelopeOpenText,
  FaVideo,
  FaBookOpen
} from "react-icons/fa";
const ContentCreation = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact');
  };
  const contentItems = [
  { icon: <FaBlog />, title: 'Blog Articles', desc: 'Long-form blogs that boost traffic.' },
  { icon: <FaFileAlt />, title: 'Website Copy', desc: 'Conversion-optimized pages that convert.' },
  { icon: <FaFacebookF />, title: 'Social Media Captions', desc: 'Engaging short-form content.' },
  { icon: <FaEnvelopeOpenText />, title: 'Email Campaigns', desc: 'Boost open rates and loyalty.' },
  { icon: <FaVideo />, title: 'Script Writing', desc: 'Scripts for impactful videos and ads.' },
  { icon: <FaBookOpen />, title: 'E-books & Guides', desc: 'Lead magnets that educate and convert.' },
];


  return (
    <>
    <div className="content-creation-container">

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-text">
         <h1 className="fw-bold display-5 custom-heading-center">Content Creation</h1>
          <p>
            We craft powerful content tailored for your audience – from blogs and articles to social media posts and SEO-optimized copy. Our content strategy is built to engage, inform, and convert, ensuring your brand voice stays consistent across platforms. Whether it's captivating storytelling, persuasive product descriptions, or insightful industry pieces, we help you connect meaningfully with your audience and drive measurable results.
          </p>
          <button className="cta-button" onClick={handleBookCall}>Contact Us</button>
        </div>
        <div className="hero-image">
          <img src="/content.jpeg" alt="Content Creation Banner" />
        </div>
      </section>

      {/* Main Content */}
      <div className="content-inner-wrapper">

        <section className="strategy-carousel-section py-5">
  <h2 className="text-center mb-4">Strategy-Driven Storytelling</h2>
  <p className="text-center mb-5 text-muted">Great content starts with a solid strategy. Here's how we do it:</p>

  <Carousel indicators={false} interval={6000} pause="hover">
    <Carousel.Item>
      <div className="carousel-slide d-flex flex-column align-items-center text-center">
        <FaSearch className="strategy-icon mb-3" />
        <h3>Audience Research</h3>
        <p>Knowing who you're talking to is half the battle. We study your audience’s behavior, preferences, and pain points for laser-focused messaging.</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-slide d-flex flex-column align-items-center text-center">
        <FaMapMarkedAlt className="strategy-icon mb-3" />
        <h3>Content Mapping</h3>
        <p>Every buyer's journey needs a roadmap. We align each piece of content with your customer’s decision stage to drive real action.</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-slide d-flex flex-column align-items-center text-center">
        <FaKeyboard className="strategy-icon mb-3" />
        <h3>Keyword Optimization</h3>
        <p>We blend high-performing keywords naturally into content — no stuffing — so you rank higher and stay readable.</p>
      </div>
    </Carousel.Item>
  </Carousel>
</section>

       <section className="content-types py-5">
  <h2 className="section-title text-center mb-5">What We Create</h2>
  <div className="row justify-content-center">
    {contentItems.map((item, idx) => (
      <div className="col-lg-4 col-md-6 mb-4" key={idx}>
        <div className="content-card shadow-sm">
          <div className="icon-wrapper">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="content-values-section py-5">
      <div className="container">
        <div className="text-center mb-4">
         <h2 className="fw-bold" style={{ color: '#008080' }}>Why LCS Content Works</h2>
          <p className="text-muted" style={{ color: '#666666' }}>Delivering results through strategic, audience-focused content.</p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 d-flex">
            <CheckCircle className="text-success me-3 mt-1" size={24} />
            <div>
              <h6 className="mb-1 fw-semibold" style={{ color: '#1c1c1c' }}>Originality</h6>
              <p className="mb-0" style={{ color: '#555' }}>100% authentic and plagiarism-free content tailored for your brand.</p>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex">
            <CheckCircle className="text-success me-3 mt-1" size={24} />
            <div>
              <h6 className="mb-1 fw-semibold" style={{ color: '#1c1c1c' }}>Brand Alignment</h6>
              <p className="mb-0" style={{ color: '#555' }}>We mirror your tone, values, and voice in every sentence.</p>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex">
            <CheckCircle className="text-success me-3 mt-1" size={24} />
            <div>
              <h6 className="mb-1 fw-semibold" style={{ color: '#1c1c1c' }}>SEO Focused</h6>
              <p className="mb-0" style={{ color: '#555' }}>Drive traffic with content that’s optimized yet natural.</p>
            </div>
          </div>

          <div className="col-md-6 mb-4 d-flex">
            <CheckCircle className="text-success me-3 mt-1" size={24} />
            <div>
              <h6 className="mb-1 fw-semibold" style={{ color: '#1c1c1c' }}>Data-Backed Decisions</h6>
              <p className="mb-0" style={{ color: '#555' }}>We use insights and performance data to refine what works best.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section className="content-cta">
          <h2>📞 Ready to Tell Your Story?</h2>
          <p>Let’s create content that educates, entertains, and empowers.</p>
          <button className="cta-button" onClick={handleBookCall}>Get in Touch</button>
        </section>

      </div>
    
    </div>
     <Footer />
    </>
  );
};

export default ContentCreation;
