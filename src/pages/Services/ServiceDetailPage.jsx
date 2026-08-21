import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Navigation/Breadcrumbs";
import { getPageContent } from "../../data/pageContent";
import { ServicesNavList } from "../../data/Navigationdata/ServiceList";
import forensicAccounting from "../../data/ServiceData/ServiceData";

function ServiceDetailPage() {
  const { categorySlug, serviceSlug } = useParams();
  const category = ServicesNavList.find((item) => item.slug === categorySlug);
  const service = category?.children.find((item) => item.slug === serviceSlug);
  const content = getPageContent(`/services/${categorySlug}/${serviceSlug}`);
  const detailedContent = serviceSlug === forensicAccounting.slug ? forensicAccounting : null;

  if (!category || !service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      <Breadcrumbs />
      <main className="service-page">
        <p>Services</p>
        <h1>{detailedContent?.title || service.title}</h1>
        <p>{detailedContent?.description || (content.title !== "Page Not Found" ? content.intro : service.description)}</p>

        <section aria-labelledby="service-overview-title">
          <h2 id="service-overview-title">
            {detailedContent?.overview.heading || "Service Overview"}
          </h2>
          <p>{detailedContent?.overview.text || (content.title !== "Page Not Found" ? content.details[0] : `Explore our ${service.title.toLowerCase()} services.`)}</p>
        </section>

        {detailedContent?.services && (
          <section aria-labelledby="service-support-title">
            <h2 id="service-support-title">How we can help</h2>
            <ul>
              {detailedContent.services.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        )}

        <Link to="/contact">Discuss this service</Link>
      </main>
    </>
  );
}

export default ServiceDetailPage;