import React from "react";

import "./Socialmediamanagement.css";
import Footer from './Footer';
import {
  FaBullhorn,
  FaSeedling,
  FaAward,
  FaLayerGroup,
  FaRobot,
  FaUserTie,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialMediaManagement = () => {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate("/contact");
  };

  const features = [
    {
      icon: <FaBullhorn className="icon text-primary" />,
      title: "Customized Content",
      desc: "Your brand voice, amplified with creativity and precision.",
    },
    {
      icon: <FaSeedling className="icon text-success" />,
      title: "Consistent Growth",
      desc: "Sustainable organic engagement through authentic community building.",
    },
    {
      icon: <FaAward className="icon text-warning" />,
      title: "Creative Excellence",
      desc: "Award-winning design and storytelling that converts followers into customers.",
    },
    {
      icon: <FaLayerGroup className="icon text-info" />,
      title: "Omni-Channel Mastery",
      desc: "We unify your presence across all key platforms seamlessly.",
    },
    {
      icon: <FaRobot className="icon text-danger" />,
      title: "Cutting-Edge Tech",
      desc: "AI-driven targeting, sentiment analysis, and optimization.",
    },
    {
      icon: <FaUserTie className="icon text-secondary" />,
      title: "Dedicated Managers",
      desc: "Your personal team, focused on success and consistent communication.",
    },
  ];

  return (
    <>
    <div className="smm-container">
      <div className="smm-hero-section">
        <div className="smm-hero-text">
          <h1 className="smm-heading animate-fadeInDown">
            Social Media Management
          </h1>
          <p className="smm-description animate-fadeInUp">
            In today’s digital age, your customers live on social media — and so
            should your brand. Whether it's Instagram, Facebook, LinkedIn, or X
            (formerly Twitter), our social media strategies build engagement,
            community, and trust that translate into real business results. We
            ensure your brand maintains a consistent voice and visual identity
            across platforms, creating a memorable presence that drives loyalty
            and conversions.
          </p>
          <button className="smm-button" onClick={handleBookCall}>
            Contact Us
          </button>
        </div>
        <div className="smm-hero-image animate-fadeInRight">
          <img src="/management.jpeg" alt="Social Media Management" />
        </div>
      </div>

      <h2 className="smm-subheading animate-fadeInLeft"> What We Offer</h2>
      <div className="smm-cards">
        <div className="smm-card animate-scaleUp">
          <h3>Content Creation</h3>
          <p>
            Visually stunning graphics, short-form videos, and interactive posts
            tailored to your audience's preferences.
          </p>
        </div>
        <div className="smm-card animate-scaleUp delay-1">
          <h3>Social Strategy & Trendspotting</h3>
          <p>
            Data-driven strategies combined with real-time trend analysis to
            keep your brand relevant and ahead of the curve.
          </p>
        </div>
        <div className="smm-card animate-scaleUp delay-2">
          <h3>Automated Posting & Smart Scheduling</h3>
          <p>
            Optimized timing through AI-powered scheduling tools ensuring
            maximum reach and engagement.
          </p>
        </div>
        <div className="smm-card animate-scaleUp delay-3">
          <h3>Community Management & Crisis Handling</h3>
          <p>
            Proactive engagement, sentiment analysis, and rapid response to
            protect and grow your brand reputation.
          </p>
        </div>
        <div className="smm-card animate-scaleUp delay-4">
          <h3>Performance & Sentiment Analytics</h3>
          <p>
            In-depth monthly reports with actionable insights, influencer
            impact, and customer sentiment metrics.
          </p>
        </div>
        <div className="smm-card animate-scaleUp delay-5">
          <h3>Influencer & Micro-Influencer Collaborations</h3>
          <p>
            Strategic partnerships with niche influencers to build authentic
            connections and expand your reach.
          </p>
        </div>
        <div className="smm-card animate-scaleUp delay-6">
          <h3>Social Commerce Integration</h3>
          <p>
            Seamlessly connect your social media with e-commerce for direct
            sales and lead generation.
          </p>
        </div>
        <div className="smm-card animate-scaleUp delay-7">
          <h3>Innovative AR & Filter Campaigns</h3>
          <p>
            Engage your audience with branded AR filters and immersive social
            experiences to boost shareability.
          </p>
        </div>
      </div>

      <section className="why-us-section container py-5">
        <h2 className="smm-subheading text-center mb-5 animate-fadeInLeft">
          Why Choose Us?
        </h2>
        <div className="row g-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`col-md-6 d-flex align-items-start animate-fadeInUp delay-${index}`}
            >
              {item.icon}
              <div className="ms-3">
                <h5 className="fw-bold mb-1">{item.title}</h5>
                <p className="mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="smm-innovative-ideas-wrapper d-flex justify-content-center px-3">
        <div className="smm-innovative-ideas-container text-start position-relative">
          <div className="vertical-line-arrow" />
          <ul className="innovative-ideas-list list-unstyled m-0">
            <li
              className="idea-item animate-slideInRight"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="idea-point">🔍</span> Advanced Audience Targeting
              with AI
            </li>
            <li
              className="idea-item animate-slideInRight"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="idea-point">🎯</span> Hyper-Personalized Content
              Delivery
            </li>
            <li
              className="idea-item animate-slideInRight"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="idea-point">📈</span> Real-time Performance
              Optimization
            </li>
            <li
              className="idea-item animate-slideInRight"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="idea-point">🤝</span> Authentic Influencer
              Partnerships
            </li>
            <li
              className="idea-item animate-slideInRight"
              style={{ animationDelay: "1s" }}
            >
              <span className="idea-point">🚀</span> AR-powered Interactive
              Campaigns
            </li>
          </ul>
        </div>
      </div>

      <div className="smm-button-container">
        <button
          className="socio-btn"
          onClick={() => (window.location.href = "/contact")}
        >
          📅 Let’s Build Your Social Presence
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SocialMediaManagement;
