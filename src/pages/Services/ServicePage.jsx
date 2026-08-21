import { useParams } from "react-router-dom";
import servicesData from "../../data/services/servicesData";

const ServicePage = () => {
  const { serviceSlug } = useParams();

  const service = servicesData[serviceSlug];

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <main>

      <section>
        <p>{service.eyebrow}</p>

        <h1>{service.title}</h1>

        <p>{service.description}</p>
      </section>

      <section>
        <h2>{service.overview.heading}</h2>

        <p>{service.overview.text}</p>
      </section>

    </main>
  );
};

export default ServicePage;