// src/components/Service/ServiceHero.jsx

import { Link } from "react-router-dom";
import "./ServiceHero.css";

const ServiceHero = ({ service }) => {
  if (!service) return null;

  return (
    <section className="service-hero">
      <div className="container">
        <div className="service-hero-content">
          {service.eyebrow && <span className="eyebrow">{service.eyebrow}</span>}
          <h1>{service.hero?.heading || service.title}</h1>
          {service.hero?.subheading && <p className="subheading">{service.hero.subheading}</p>}
          <p className="description">{service.hero?.description || ""}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              {service.cta?.buttonText || "Speak to Our Experts"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
