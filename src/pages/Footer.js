import React, { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faThreads } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }

    // Here you can integrate an email API like Mailchimp, SendGrid, etc.
    console.log("Newsletter email submitted:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="footer mt-auto py-5">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-title">Lazeno Consultancy Services</h5>
            <p className="footer-text">
              Empowering your digital presence with innovation and strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className="footer-subtitle">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="footer-subtitle">Contact Info</h6>
            <p><FaMapMarkerAlt className="footer-icon" /> 151 A, SIFA TOWER, Karupparayan Kovil, Kurichi, Podanur, Coimbatore.</p>
            <p><FaPhoneAlt className="footer-icon" /> +91 7604889478</p>
            <p>
              <a href="mailto:lazenocons01@gmail.com" style={{ color: "white" }}>
                <FaEnvelope className="footer-icon" /> lazenocons01@gmail.com
              </a>
            </p>
            <p><FaClock className="footer-icon" /> Mon - Fri: 6 AM - 10 PM</p>
          </div>

          
        {/* Services Links Section */}
<div className="col-md-2 mb-4 mb-md-0">
  <h6 className="footer-subtitle">Services</h6>
  <ul className="list-unstyled footer-links">
    <li><Link to="/content-creation">Content Creation</Link></li>
    <li><Link to="/poster-designing">Poster Designing</Link></li>
    <li><Link to="/social-media">Social Media Management</Link></li>
    <li><Link to="/seo">SEO Optimization</Link></li>
    <li><Link to="/video-editing">Video Editing</Link></li>
    <li><Link to="/email-marketing">Email Marketing</Link></li>
  </ul>
</div>


        </div>

        {/* Bottom Text */}
        <div className="text-center mt-4">
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} Lazeno Consultancy Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
