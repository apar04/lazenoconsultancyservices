import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; 
import Contentcreation from './pages/Contentcreation';
import Posterdesign from './pages/Posterdesign';
import Seo from './pages/Seo';
import Socialmediamanagement from './pages/Socialmediamanagement';
import Video from './pages/Video';
import Email from './pages/Email';
import Contact from './pages/Contact';
import Scroll from './pages/Scroll';
import Loader from './Loader'; // ⬅️ Import your loader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate delay (e.g., loading assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Scroll />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content-creation" element={<Contentcreation />} />
        <Route path="/poster-designing" element={<Posterdesign />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/social-media" element={<Socialmediamanagement />} />
        <Route path="/video-editing" element={<Video />} />
        <Route path="/email-marketing" element={<Email />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
