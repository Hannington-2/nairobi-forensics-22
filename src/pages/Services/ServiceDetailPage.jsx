// src/pages/Services/ServiceDetailPage.jsx

import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../../components/Navigation/Breadcrumbs";
import servicesData from "../../data/services/ServiceData";
import { getServiceBySlug } from "../../data/Navigationdata/ServiceList";
import "./Services.css";

// Import service components
import ServiceHero from "../../components/Service/ServiceHero";
import ServiceOverview from "../../components/Service/ServiceOverview";
import ServiceAreas from "../../components/Service/ServiceAreas";
import ServiceProcess from "../../components/Service/ServiceProcess";
import ServiceIndustries from "../../components/Service/ServiceIndustries";
import ServiceWhyUs from "../../components/Service/ServiceWhyUs";
import ServiceFAQ from "../../components/Service/ServiceFAQ";
import RelatedServices from "../../components/Service/RelatedServices";
import ServiceCTA from "../../components/Service/ServiceCTA";

const ServiceDetailPage = () => {
  const { categorySlug, serviceSlug } = useParams();
  
  // Get the service data from our data file
  const serviceData = servicesData[serviceSlug];
  
  // Get navigation data for this service
  const navService = getServiceBySlug(serviceSlug);
  
  // If service not found, show 404
  if (!serviceData || !navService) {
    return (
      <main className="service-not-found">
        <div className="container">
          <h1>Service Not Found</h1>
          <p>The service you are looking for could not be found.</p>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </main>
    );
  }

  // Build breadcrumb items
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: navService.categoryTitle, path: categorySlug ? `/services/${categorySlug}` : `/services/${navService.categorySlug}` },
    { label: serviceData.shortTitle || serviceData.title }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <main className="service-detail-page">
        {/* HERO SECTION */}
        <ServiceHero service={serviceData} />
        
        {/* OVERVIEW SECTION */}
        {serviceData.overview && (
          <ServiceOverview service={serviceData} />
        )}
        
        {/* SERVICES / CAPABILITIES SECTION */}
        {serviceData.services && serviceData.services.length > 0 && (
          <ServiceAreas service={serviceData} variant="services" />
        )}
        
        {/* SITUATIONS / WHEN NEEDED SECTION */}
        {serviceData.situations && serviceData.situations.length > 0 && (
          <ServiceAreas service={serviceData} variant="situations" />
        )}
        
        {/* PROCESS SECTION */}
        {serviceData.process && serviceData.process.length > 0 && (
          <ServiceProcess service={serviceData} />
        )}
        
        {/* INDUSTRIES SECTION */}
        {serviceData.industries && serviceData.industries.length > 0 && (
          <ServiceIndustries service={serviceData} />
        )}
        
        {/* WHY US SECTION */}
        {serviceData.whyUs && (
          <ServiceWhyUs service={serviceData} />
        )}
        
        {/* FAQ SECTION */}
        {serviceData.faqs && serviceData.faqs.length > 0 && (
          <ServiceFAQ service={serviceData} />
        )}
        
        {/* RELATED SERVICES SECTION */}
        {serviceData.relatedServices && serviceData.relatedServices.length > 0 && (
          <RelatedServices service={serviceData} />
        )}
        
        {/* CTA SECTION */}
        <ServiceCTA service={serviceData} />
      </main>
    </>
  );
};

export default ServiceDetailPage;
