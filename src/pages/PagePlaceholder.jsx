import { Link, useLocation } from "react-router-dom";
import { getPageContent } from "../data/pageContent";
import Breadcrumbs from "../components/Navigation/Breadcrumbs";
import "./PagePlaceholder.css";

function PagePlaceholder({ section }) {
  const { pathname } = useLocation();
  const content = getPageContent(pathname);
  const pageSection = section || content.section;

  return (
    <>
      <Breadcrumbs />
      <main className="placeholder-page">
      <section className="placeholder-content" aria-labelledby="placeholder-title">
        <p className="placeholder-eyebrow">{pageSection}</p>
        <h1 id="placeholder-title">{content.title}</h1>
        <p className="placeholder-message">{content.intro}</p>
        <div className="placeholder-details">
          {content.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
        <Link className="placeholder-link" to={pageSection === "Services" ? "/services" : "/"}>
          Back to {pageSection === "Services" ? "Services" : "Home"}
        </Link>
      </section>
      </main>
    </>
  );
}

export default PagePlaceholder;
