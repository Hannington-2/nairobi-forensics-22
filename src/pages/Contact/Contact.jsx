import '../SectionLanding.css';
import './Contact.css';
import ContactForm from '../../components/forms/ContactForm';

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
        <div className="contact-hero-meta" aria-label="Contact highlights">
          <span>Independent advice</span>
          <span>Confidential conversations</span>
          <span>Kenya and cross-border matters</span>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default Contact;
