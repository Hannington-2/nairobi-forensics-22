import { Link } from 'react-router-dom';
import '../SectionLanding.css';

const About = () => {
  return (
    <main className="section-landing">
      <section className="section-landing-hero">
        <p className="section-landing-eyebrow">ABOUT NAIROBI FORENSICS</p>
        <h1>Independent thinking for complex financial matters.</h1>
        <p>
          Nairobi Forensics LLP helps organisations understand evidence,
          manage risk, resolve disputes, and make defensible decisions.
        </p>
      </section>
      <section className="section-landing-grid" aria-label="About Nairobi Forensics">
        <Link className="landing-card" to="/about/our-team">
          <span>01</span>
          <h2>Our Team</h2>
          <p>Meet the professionals behind our analytical and investigative work.</p>
        </Link>
        <Link className="landing-card" to="/about/our-approach">
          <span>02</span>
          <h2>Our Approach</h2>
          <p>Learn how we turn complex evidence into clear, useful conclusions.</p>
        </Link>
        <Link className="landing-card" to="/about/why-choose-us">
          <span>03</span>
          <h2>Why Choose Us</h2>
          <p>See the principles that guide our independent advisory practice.</p>
        </Link>
      </section>
    </main>
  );
};

export default About;