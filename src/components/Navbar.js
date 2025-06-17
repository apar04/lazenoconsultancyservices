import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleNavLinkClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsNavOpen(false);
    setIsServicesOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  return (
    <header className="navbar navbar-expand-lg fixed-top custom-navbar px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand m-0" onClick={() => handleNavLinkClick("/")}>
          <img className="logo" src="logo.svg" alt="Logo" />
          <span className="brand-text">Lazeno Consultancy Services</span>
        </span>
        <button className="navbar-toggler border-0" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className={`collapse navbar-collapse px-3 ${isNavOpen ? "show" : ""}`}>
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          {[{ label: "Home", path: "/" }, { label: "About", path: "/about" }].map((item, index) => (
            <li className="nav-item" key={index}>
              <span
                className={`nav-link fw-semibold`}
                onClick={() => handleNavLinkClick(item.path)}
              >
                {item.label}
              </span>
            </li>
          ))}

          <li className="nav-item dropdown position-relative">
            <span
              className={`nav-link fw-semibold d-flex align-items-center ${
                isServicesOpen ? "services-active" : ""
              }`}
              onClick={toggleServices}
              style={{ cursor: "pointer" }}
            >
              Services <span className="ms-1">▾</span>
            </span>
            {isServicesOpen && (
              <ul className="dropdown-menu show custom-dropdown">
                {[
                  { label: "Content Creation", path: "/content-creation" },
                  { label: "Poster Designing", path: "/poster-designing" },
                  { label: "SEO Optimization", path: "/seo" },
                  { label: "Video Editing", path: "/video-editing" },
                  { label: "Social Media Management", path: "/social-media" },
                  { label: "Email Marketing", path: "/email-marketing" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <span className="dropdown-item" onClick={() => handleNavLinkClick(item.path)}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <span
              className="nav-link fw-semibold no-wrap"
              onClick={() => handleNavLinkClick("/contact")}
            >
              Contact Us
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
