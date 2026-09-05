// src/components/cards/ServiceCard/ServiceCard.jsx

import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ title, description, slug, categorySlug, href }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={href || `/services/${categorySlug}/${slug}`} className="service-card-link">
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;