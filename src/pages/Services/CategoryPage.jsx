import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Navigation/Breadcrumbs";
import { getPageContent } from "../../data/pageContent";
import { ServicesNavList } from "../../data/Navigationdata/ServiceList";

function CategoryPage() {
  const { categorySlug } = useParams();
  const category = ServicesNavList.find((item) => item.slug === categorySlug);
  const content = getPageContent(`/services/${categorySlug}`);

  if (!category) {
    return <h1>Service Category Not Found</h1>;
  }

  return (
    <>
      <Breadcrumbs />
      <main className="service-page">
        <p>Services</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>

        <section aria-labelledby="service-list-title">
          <h2 id="service-list-title">Services in this category</h2>
          <ul>
            {category.children.map((service) => (
              <li key={service.path}>
                <Link to={service.path}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default CategoryPage;