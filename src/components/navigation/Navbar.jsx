// import { useState } from "react";
// import { Link } from "react-router-dom";

// import { navigation } from "../../../data/navigation/Navigation";
// import { services } from "../../../data/navigation/Services";

// import "./Navbar.css";

// const Navbar = () => {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleServicesEnter = () => {
//     setServicesOpen(true);
//   };

//   const handleServicesLeave = () => {
//     setServicesOpen(false);
//     setActiveCategory(null);
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">

//         {/* LOGO */}
//         <Link to="/" className="navbar-logo">
//           Nairobi Forensics
//         </Link>

//         {/* MAIN NAVIGATION */}
//         <nav className="navbar-nav">

//           <Link to="/">Home</Link>

//           <Link to="/about">About Us</Link>

//           {/* SERVICES DROPDOWN */}
//           <div
//             className="services-menu"
//             onMouseEnter={handleServicesEnter}
//             onMouseLeave={handleServicesLeave}
//           >
//             <Link
//               to="/services"
//               className="services-menu-trigger"
//             >
//               Services
//               <span className="arrow">
//                 ▾
//               </span>
//             </Link>

//             {servicesOpen && (
//               <div className="services-dropdown">

//                 {/* LEFT SIDE - SERVICE CATEGORIES */}
//                 <div className="services-categories">

//                   {services.map((category) => (
//                     <div
//                       key={category.id}
//                       className={`service-category-item ${
//                         activeCategory?.id === category.id
//                           ? "active"
//                           : ""
//                       }`}
//                       onMouseEnter={() =>
//                         setActiveCategory(category)
//                       }
//                     >
//                       <Link to={category.path}>
//                         <span>{category.title}</span>

//                         {category.children?.length > 0 && (
//                           <span className="category-arrow">
//                             →
//                           </span>
//                         )}
//                       </Link>
//                     </div>
//                   ))}

//                 </div>

//                 {/* RIGHT SIDE - INDIVIDUAL SERVICES */}
//                 {activeCategory && (
//                   <div className="service-submenu">

//                     <Link
//                       to={activeCategory.path}
//                       className="submenu-title"
//                     >
//                       {activeCategory.title}
//                     </Link>

//                     <div className="submenu-links">
//                       {activeCategory.children.map((services) => (
//                         <Link
//                           key={services.slug}
//                           to={services.path}
//                           className="submenu-link"
//                         >
//                           {services.title}
//                         </Link>
//                       ))}
//                     </div>

//                   </div>
//                 )}

//               </div>
//             )}
//           </div>

//           <Link to="/industries">Industries</Link>

//           <Link to="/insights">Insights</Link>

//           <Link to="/contact">Contact Us</Link>

//         </nav>

//         {/* CTA */}
//         <Link
//           to="/contact"
//           className="navbar-cta"
//         >
//           Talk to an Expert
//         </Link>

//       </div>
//     </header>
//   );
// };
// export default Navbar;
// // const Navbar = () => {
// //   return (
// //     <header>
// //       <h1>Nairobi Forensics</h1>
// //     </header>
// //   );
// // };

// // 
import { useState } from "react";
import { Link } from "react-router-dom";

import { navigation } from "../../data/Navigationdata/Navigation";
import { servicesNav } from "../../data/Navigationdata/Services";

import "./Navbar.css";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleServicesEnter = () => {
    setServicesOpen(true);
    setActiveDropdown(null);
  };

  const handleServicesLeave = () => {
    setServicesOpen(false);
    setActiveCategory(null);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          Nairobi Forensics
        </Link>

        {/* MAIN NAVIGATION */}
        <nav className="navbar-nav">

          {navigation.map((item) => {

            /* ================================
               NORMAL LINK
            ================================= */
            if (item.type === "link") {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              );
            }


            /* ================================
               SERVICES MEGA MENU
            ================================= */
            if (item.type === "mega-menu") {
              return (
                <div
                  key={item.id}
                  className="services-menu"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link
                    to={item.path}
                    className="services-menu-trigger"
                  >
                    {item.label}
                    <span className="arrow">▾</span>
                  </Link>


                  {servicesOpen && (
                    <div className="services-dropdown">

                      {/* LEFT SIDE - CATEGORIES */}
                      <div className="services-categories">

                        {servicesNav.map((category) => (
                          <div
                            key={category.id}
                            className={`service-category-item ${
                              activeCategory?.id === category.id
                                ? "active"
                                : ""
                            }`}
                            onMouseEnter={() =>
                              setActiveCategory(category)
                            }
                          >
                            <Link to={category.path}>
                              <span>{category.title}</span>

                              {category.children?.length > 0 && (
                                <span className="category-arrow">
                                  →
                                </span>
                              )}
                            </Link>
                          </div>
                        ))}

                      </div>


                      {/* RIGHT SIDE - INDIVIDUAL SERVICES */}
                      {activeCategory && (
                        <div className="service-submenu">

                          <Link
                            to={activeCategory.path}
                            className="submenu-title"
                          >
                            {activeCategory.title}
                          </Link>

                          <div className="submenu-links">

                            {activeCategory.children.map((service) => (
                              <Link
                                key={service.slug}
                                to={service.path}
                                className="submenu-link"
                              >
                                {service.title}
                              </Link>
                            ))}

                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            }


            /* ================================
               NORMAL DROPDOWN
               ABOUT / INDUSTRIES / INSIGHTS
            ================================= */
            if (item.type === "dropdown") {
              return (
                <div
                  key={item.id}
                  className="nav-dropdown"
                  onMouseEnter={() => {
                    setActiveDropdown(item.id);
                    setServicesOpen(false);
                  }}
                  onMouseLeave={() =>
                    setActiveDropdown(null)
                  }
                >
                  <Link
                    to={item.path}
                    className="nav-dropdown-trigger"
                  >
                    {item.label}
                    <span className="arrow">▾</span>
                  </Link>


                  {activeDropdown === item.id && (
                    <div className="nav-dropdown-menu">

                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          to={child.path}
                          className="nav-dropdown-link"
                        >
                          {child.label}
                        </Link>
                      ))}

                    </div>
                  )}

                </div>
              );
            }


            return null;
          })}

        </nav>


        {/* CTA */}
        <Link
          to="/contact"
          className="navbar-cta"
        >
          Talk to an Expert
        </Link>

      </div>
    </header>
  );
};

export default Navbar;