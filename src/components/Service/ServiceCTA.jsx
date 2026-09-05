import { Link } from "react-router-dom";
import "./ServiceCTA.css";

const ServiceCTA = ({ service }) => {
  if (!service?.cta) return null;
  
  return (
    <section className="service-cta">
      <div className="container">
        <div className="cta-content">
          <h2>{service.cta.heading}</h2>
          <p>{service.cta.text}</p>
          <Link to={service.cta.buttonLink} className="btn-primary">
            {service.cta.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
