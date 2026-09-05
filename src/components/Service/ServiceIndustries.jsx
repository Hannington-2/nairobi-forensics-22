import "./ServiceIndustries.css";

const ServiceIndustries = ({ service }) => {
  if (!service?.industries || service.industries.length === 0) return null;
  
  return (
    <section className="service-industries">
      <div className="container">
        <h2>Industries We Support</h2>
        <div className="industry-tags">
          {service.industries.map((industry, index) => (
            <span key={index} className="industry-tag">{industry}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIndustries;
