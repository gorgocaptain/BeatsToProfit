import React from 'react';
import Lgo from "./logo.png";
import George from "./george.jpg";
import Agasthya from "./agasthya.jpg";
import './App.css';

function Navbar() {
  return (
    <>
      <div className='center-container'>
        <h1 className='fancy'>Beats to Profit</h1>
      </div>
      <nav className="navbar">
        {/* Left side links */}
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#services" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      <section id="home" className="content-container">
        <div className="text-content">
          <h2 className='title'>Anyone can live off their passion.</h2>
          <p>At Beats to Profit, we believe in the power of music. Our journey started with a deep passion for music. We loved music SO much we decided to start making it! We learned how to produce tracks that could share emotions and create memorable experiences. However, we soon realized that great music alone isn’t enough to succeed in this competitive industry. Success in production requires mastering essential business skills like marketing, branding, and networking. That’s why at Beats to Profit, we focus on the vital intersection of creativity and business. Our program empowers students to turn their musical vision into professional, successful tracks that stand out artistically and commercially.</p>
        </div>
        <div className="image-container">
          <img src={Lgo} alt="Logo" className='logo'/>
        </div>
      </section>

      <section id="about" className="content-section">
        <h2 className='skibidi-toilet'>What we teach.</h2>
        <div className="about-columns">
          <div className="column">
            <h3><i className="fas fa-music"></i> Musical Production</h3>
            <p>At Beats to Profit, we provide top-tier training in music production. Our program is designed for both beginners and seasoned producers, covering everything from basic beat making to advanced sound design. Whether you're creating your first track or polishing your skills, we offer hands-on experience with industry-standard tools and techniques.</p>
          </div>

          {/* Divider line */}
          <div className="divider-line"></div>

          <div className="column">
            <h3><i className="fas fa-dollar-sign"></i> Business Skills</h3>
            <p>In today's competitive music industry, great tracks need solid business skills behind them. We help our students master essential business aspects, including marketing, branding, and networking. With our guidance, you'll learn how to build your brand, promote your music, and connect with the right people to take your career to the next level.</p>
          </div>
        </div>
      </section>

      <section id="services" className="content-section">
        <h2 className='skibidi-toilet'>Who we are.</h2>
        <div className='center-container' id='people'>
          <div className='desc-container'>
            <h3>George Florea</h3>
            <img src={George} alt="" className='us'/>
            <p className='desc-text'>Hi, I’m George, an AP Senior at Martingrove Collegiate Institute. I love music and I’ve been making beats for a year! I enjoy collaborating with like-minded students to create powerful experiences, and bring up my peers. I hope to inspire kids my age to achieve their full potential, and pursue something they enjoy!
            </p>
          </div>
          
          <div className='desc-container'>
          <h3>Agasthya Chidambaram</h3>
            <img src={Agasthya} alt="" className='us'/>
            <p className='desc-text'>Hey, I’m Agasthya, an AP Senior at MCI. I have a strong passion for business and helping others! Drawing on my professional experience as a retail operations and relations associate, I aim to empower students with strong insights and powerful strategies to succeed in the business world and help them realize their ambitions.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="content-section">
        <h2>Contact Us</h2>
        <p>Have questions? We'd love to hear from you!</p>
        <p>If you would like us to come to your school, email us!</p>
        <p>Email: <a href="mailto:gorgocaptain@gmail.com">gorgocaptain@gmail.com</a></p>
        <p>Phone: +1 (647) 561 3729</p>
      </section>
    </>
  );
}

export default Navbar;
