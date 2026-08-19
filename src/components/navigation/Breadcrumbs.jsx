import { Link, useLocation } from "react-router-dom";
import { getPageContent } from "../../data/pageContent";
import "./Breadcrumbs.css";

function formatLabel(segment) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getBreadcrumbs(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ label: "Home", path: "/" }];

  segments.forEach((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    const content = getPageContent(path);

    breadcrumbs.push({
      label: content.title === "Page Not Found" ? formatLabel(segment) : content.title,
      path
    });
  });

  return breadcrumbs;
}

function Breadcrumbs() {
  const { pathname } = useLocation();
  const breadcrumbs = getBreadcrumbs(pathname);

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        {breadcrumbs.map((breadcrumb, index) => {
          const isCurrent = index === breadcrumbs.length - 1;

          return (
            <li className="breadcrumbs-item" key={breadcrumb.path}>
              {index > 0 && (
                <span className="breadcrumbs-separator" aria-hidden="true">
                  /
                </span>
              )}
              {isCurrent ? (
                <span className="breadcrumbs-current" aria-current="page">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link className="breadcrumbs-link" to={breadcrumb.path}>
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
