import "./ServiceWhyUs.css";

const ServiceWhyUs = ({ service }) => {
  if (!service?.whyUs) return null;
  
  return (
    <section className="service-why-us">
      <div className="container">
        <h2>{service.whyUs.heading || "Why Nairobi Forensics LLP?"}</h2>
        {service.whyUs.paragraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default ServiceWhyUs;
