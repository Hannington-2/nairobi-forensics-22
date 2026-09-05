// src/components/Service/RelatedServices.jsx

import { Link } from "react-router-dom";
import { getServiceBySlug } from "../../data/Navigationdata/ServiceList";
import "./RelatedServices.css";

const RelatedServices = ({ service }) => {
  if (!service?.relatedServices || service.relatedServices.length === 0) return null;
  
  return (
    <section className="related-services">
      <div className="container">
        <h2>Related Services</h2>
        <p className="related-description">
          Explore other services that complement {service.shortTitle || service.title}.
        </p>
        <div className="related-services-grid">
          {service.relatedServices.map((related, index) => {
            const navService = getServiceBySlug(related.slug);
            const path = navService
              ? `/services/${navService.categorySlug}/${related.slug}`
              : `/services/${related.slug}`;
            
            return (
              <Link key={index} to={path} className="related-service-card">
                <span className="related-service-icon">→</span>
                <span className="related-service-name">{related.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
