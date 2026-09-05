// src/pages/Services/CategoryPage.jsx

import { useParams, Link } from "react-router-dom";
import { ServicesNavList } from "../../data/Navigationdata/ServiceList";
import servicesData from "../../data/services/ServiceData";  
import "./Services.css";
import ServiceCard from "../../components/cards/ServiceCard/ServiceCard";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  
  const category = ServicesNavList.find(cat => cat.slug === categorySlug);
  
  if (!category) {
    return (
      <main className="category-not-found">
        <div className="container">
          <h1>Category Not Found</h1>
          <p>The category you are looking for could not be found.</p>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </main>
    );
  }

  const categoryServices = category.children.map(child => ({
    ...child,
    data: servicesData[child.slug]
  })).filter(service => service.data);

  return (
    <main className="category-page">
      <div className="container">
        <div className="category-header">
          <h1>{category.title}</h1>
          <p className="category-description">
            Explore our {category.title.toLowerCase()} services below.
          </p>
        </div>
        
        {categoryServices.length > 0 ? (
          <div className="services-grid">
            {categoryServices.map(service => (
              <ServiceCard
                key={service.slug}
                title={service.data.shortTitle || service.title}
                description={service.data.hero?.description?.slice(0, 150) + "..." || service.data.overview?.paragraphs?.[0]?.slice(0, 150) + "..." || ""}
                slug={service.slug}
                categorySlug={category.slug}
              />
            ))}
          </div>
        ) : (
          <p className="no-services">No services available in this category.</p>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
