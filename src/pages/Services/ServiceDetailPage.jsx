import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Navigation/Breadcrumbs";

import servicesData from "../../data/services/servicesData";

import ServiceHero from "../../components/Service/ServiceHero";
import ServiceOverview from "../../components/Service/ServiceOverview";
import ServiceFeatures from "../../components/Service/ServiceFeatures";
import ServiceProcess from "../../components/Service/ServiceProcess";
import ServiceIndustries from "../../components/Service/ServiceIndustries";
import ServiceFAQ from "../../components/Service/ServiceFAQ";
import ServiceRelated from "../../components/Service/ServiceRelated";
import ServiceCTA from "../../components/Service/ServiceCTA";

import SEO from "../../components/SEO/SEO";
import ServiceSchema from "../../components/SEO/ServiceSchema";

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();

  const service = servicesData[serviceSlug];

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      <SEO
        title={service.seo.title}
        description={service.seo.description}
        canonical={service.seo.canonical}
      />

      <ServiceSchema service={service} />

      <Breadcrumbs />

      <main className="service-detail-page">

        <ServiceHero service={service} />

        <ServiceOverview service={service} />

        <ServiceFeatures service={service} />

        <ServiceProcess service={service} />

        <ServiceIndustries service={service} />

        <ServiceFAQ service={service} />

        <ServiceRelated service={service} />

        <ServiceCTA service={service} />

      </main>
    </>
  );
};

export default ServiceDetailPage;