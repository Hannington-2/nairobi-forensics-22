// src/components/Navigation/Breadcrumbs.jsx

import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="breadcrumb-item">
                {isLast ? (
                  <span className="breadcrumb-current">{item.label}</span>
                ) : (
                  <>
                    <Link to={item.path} className="breadcrumb-link">
                      {item.label}
                    </Link>
                    <span className="breadcrumb-separator">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
