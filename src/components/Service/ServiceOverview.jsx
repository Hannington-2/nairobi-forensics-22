import "./ServiceOverview.css";

const ServiceOverview = ({ service }) => {
  if (!service?.overview) return null;
  
  return (
    <section className="service-overview">
      <div className="container">
        <div className="service-overview-content">
          <h2>{service.overview.heading}</h2>
          {service.overview.paragraphs?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
