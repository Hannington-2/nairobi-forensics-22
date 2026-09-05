import "./ServiceProcess.css";

const ServiceProcess = ({ service }) => {
  if (!service?.process || service.process.length === 0) return null;
  
  return (
    <section className="service-process">
      <div className="container">
        <h2>Our Approach</h2>
        <div className="process-steps">
          {service.process.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
