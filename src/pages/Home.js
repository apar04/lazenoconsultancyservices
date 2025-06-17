import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { GiGrowth } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate(); // initialize the hook

  const handleBookCall = () => {
    navigate('/contact'); // navigate to contact page
  };
  return (
    <>
    <div className="home-container">
      {/* Left content */}
      <div className="home-wrapper container-fluid pt-navbar">
      <div className="row align-items-center">
        <div className="col-md-6 p-4 home-left">
          <h1 className="home-title">Empowering Brands. Elevating Growth.</h1>
          <p className="home-description">
            At Lazeno Consultancy Services, we help ambitious businesses thrive with expert consulting, innovative strategies, and impactful digital solutions. From content creation to SEO, we craft your success story.
          </p>
          <h2 className="tagline">“Your vision our digital strategy.”</h2>
          <button className="home-button" onClick={handleBookCall}>Book a Discovery Call</button>
        </div>

        <div className="col-md-6 p-4 home-right">
          <Carousel interval={3000} controls indicators={true} fade>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="carousel1.avif" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="carousel2.avif" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded shadow" src="carousel3.avif" alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>

    <div className="manager-details-section">
  <div className="manager-grid">
    <div className="manager-image-wrapper">
      <img src="manager.jpg" alt="Manager Profile" className="manager-profile-img" />
    </div>
    <div className="manager-content">
      <h2 className="manager-name">Mr. Rakesh Verma</h2>
      <p className="manager-bio">
        With over 15 years in the digital transformation space, Mr. Rakesh Verma has been the driving force behind Lazeno’s success. His unwavering focus on innovation and client-centric strategies has helped countless businesses scale efficiently in a fast-changing digital world.
      </p>
      <p className="manager-history">
        Starting his journey as a freelance marketer, he quickly gained reputation for delivering measurable results. In 2014, he founded Lazeno Consultancy Services with a mission to empower brands with meaningful digital presence.
      </p>
      <p className="manager-vision">
        “Leadership is about building a legacy, not just profits. At Lazeno, we lead with empathy, evolve with strategy, and deliver with excellence.”
      </p>
    </div>
  </div>
</div>

<div className="innovation-highlights">
  <h2 className="section-heading">From Vision to Innovation</h2>
  <p className="section-subtext">
    At Lazeno, we transform traditional strategies into cutting-edge digital experiences through relentless innovation and a deep understanding of evolving market needs.
  </p>
  <div className="innovation-cards">
    <div className="innovation-card">
      <FaLightbulb className="icon-img" style={{ color: "teal", fontSize: "40px" }} />

      <h4>Innovative Strategy</h4>
      <p>
        We redefine digital growth with tailor-made strategies powered by AI, data analytics, and creativity to stay ahead of the curve.
      </p>
    </div>

    <div className="innovation-card"> 
      <FaUsers className="icon-img" style={{ color: "teal", fontSize: "40px" }} />

      <h4>Client-Centric Approach</h4>
      <p>
        Every decision we make is rooted in understanding our clients’ business goals and crafting solutions that deliver real impact.
      </p>
    </div>

   <div className="innovation-card">
  <GiGrowth className="icon-img" style={{ color: "teal", fontSize: "40px" }} />

  <h4>Future-Ready Growth</h4>
  <p>
    From smart automation to scalable infrastructure, we future-proof your digital ecosystem for sustained growth and resilience.
  </p>
</div>

  </div>
</div>



    <div className="consultancy-section">
      {/* Left side: Carousel */}
      <div className="carousel-left">
        <Carousel fade interval={2500}>
          <Carousel.Item>
            <img src="consult1.avif" className="carousel-img" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="consult2.avif" className="carousel-img" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="consult3.avif" className="carousel-img" alt="Slide 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="consult4.avif" className="carousel-img" alt="Slide 4" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="consult5.avif" className="carousel-img" alt="Slide 5" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Right side: Text Content */}
      <div className="content-right">
        <h2>Empowering Clients with Excellence</h2>
        <p>
          Our consultancy is a beacon of excellence, built on a strong foundation of expertise, integrity, and a client-centric approach. 
          We take immense pride in delivering tailored solutions that drive tangible, impactful results, meticulously addressing the unique needs 
          and challenges of each client.
        </p>
        <p>
          Through collaborative partnerships and open, transparent communication, we foster long-term relationships that transcend mere transactions, 
          becoming trusted advisors and allies in our clients' journeys.
        </p>
        <p>
          With an unwavering commitment to quality, innovation, and trust, we empower businesses to navigate the complexities of an ever-evolving 
          landscape, capitalize on emerging opportunities, and achieve sustainable, lasting success.
        </p>
        <p>
          Our team's extensive experience, deep industry knowledge, and passion for delivering exceptional results enable us to provide insightful 
          guidance, creative solutions, and effective strategies, ensuring our clients not only meet but exceed their goals and stay ahead of the 
          curve in their respective industries.
        </p>
      </div>
    </div>
    
    </div>
    <Footer />
    </>
  );
};

export default Home;
