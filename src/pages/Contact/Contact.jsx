import { Link } from 'react-router-dom';
import '../SectionLanding.css';

const Contact = () => {
  return (
    <main className="section-landing contact-landing">
      <section className="section-landing-hero">
        <p className="section-landing-eyebrow">CONTACT NAIROBI FORENSICS</p>
        <h1>Let’s understand the matter together.</h1>
        <p>
          Tell us what you are dealing with, and we will help identify the
          right next step for your organisation.
        </p>
      </section>
      <section className="contact-actions" aria-label="Contact options">
        <div>
          <p className="section-landing-eyebrow">START A CONVERSATION</p>
          <h2>Speak with our advisory team.</h2>
          <p>Share the nature of your concern, the relevant timeline, and how we can reach you.</p>
        </div>
        <Link className="landing-action" to="/contact/consultation">
          Request a consultation <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
};

export default Contact;
