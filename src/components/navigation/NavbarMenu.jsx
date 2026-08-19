import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {ServicesNavList} from "../../data/Navigationdata/ServiceList";
import { navigation } from "../../data/Navigationdata/NavigationList";
import './Navbar.css';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = (closeMenu) => {
    cancelClose();
    closeTimer.current = setTimeout(closeMenu, 350);
  };

  const handleServicesEnter = () => {
    cancelClose();
    setServicesOpen(true);
    setActiveCategory(null);
    setActiveDropdown(null);
  };

  const handleServicesLeave = () => {
    scheduleClose(() => {
      setServicesOpen(false);
      setActiveCategory(null);
    });
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" aria-label="Nairobi Forensics home">
          <img src="/logo.png" alt="Nairobi Forensics" />
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
                    <div
                      className={`services-dropdown ${
                        activeCategory ? "has-submenu" : ""
                      }`}
                    >

                      {/* LEFT SIDE - CATEGORIES */}
                      <div className="services-categories">

                        {ServicesNavList.map((category) => (
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
                    cancelClose();
                    setActiveDropdown(item.id);
                    setServicesOpen(false);
                  }}
                  onMouseLeave={() => scheduleClose(() => setActiveDropdown(null))}
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
// const Navbar = () => {
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [activeCategory, setActiveCategory] = useState(null);
//     const [activeDropdown, setActiveDropdown] = useState(null);
  
//     const handleServicesEnter = () => {
//       setServicesOpen(true);
//       setActiveDropdown(null);
//     };
  
//     const handleServicesLeave = () => {
//       setServicesOpen(false);
//       setActiveCategory(null);
//     };

//     return (
//         <header className="navbar">

//             <div className="navbar container">
//                 {/* LOGO */}
//                 <Link to="/" className="navbar-logo">
//                 Nairobi Forensics</Link>

//                 {/* MAIN NAVIGATION */}
//                 {/* Normal link */}
//                 <nav className="navbar-nav">
//                     if(item.type === "link") {
//                         return (
//                             <Link 
//                             key={item.id}
//                             to={item.path}
//                             className="nav-link">
//                                 {item.label}
//                             </Link>
//                         );
//                     }

//                     {/* SERVICE MEGAMENU */}

//                     if(item.type === "mega-menu") {
//                         return (
//                             <div 
//                             key={item.id}
//                             className="service-menu"
//                             onMouseEnter={handleServiceEnter}
//                             onMouseLeave={handleServiceLeave}>
//                                 <Link to={item.path}
//                                 className="service-menu-triger">
//                                     {item.label}
//                                     <span  className="arrow">▾</span>
//                                 </Link>
//                                 {
//                                     servicesOpen && (
//                                         <div 
//                                         className="service-dropdown">
//                                             {/* LEFT SIDE- CATEGORY */}
//                                             <div 
//                                             className="service-category">
//                                                 {
//                                                     ServicesNavList.map((category) => (
//                                                         <div 
//                                                         key={category.id}
//                                                         className={`service-category-item 
//                                                             ${activeCategory?.id === category.id 
//                                                                 ? "active"
//                                                                  : ""
//                                                         }`}
//                                                         onMouseEnter={() =>setActiveCategory(category)
//                                                         }
//                                                         >
//                                                             <Link 
//                                                             to={category.path}>
//                                                                 <span>{category.title}</span>

//                                                                 {
//                                                                     category.children?.length > 0 && (
//                                                                         <span className="category-arrow">
//                                                                         →    
//                                                                         </span>
//                                                                     )}
//                                                             </Link>
//                                                             </div>
//                                                     ))}
//                                             </div>   
//                                                                          {/* RIGHT SIDE-INDIVIDUAL SERVICE */}
//                                                                          {
//                                                                             activeCategory &&(
//                                                                                 <div 
//                                                                                 className="service-submenu">
//                                                                                     <Link
//                                                                                     to={activeCategory.path}
//                                                                                     className="submenu-title">
//                                                                                         {activeCategory.title}
//                                                                                     </Link>
//                                                                                     <div className="submenu-links">
//                                                                                     {activeCategory.children.map((service) => (
//                               <Link
//                                 key={service.slug}
//                                 to={service.path}
//                                 className="submenu-link"
//                               >
//                                 {service.title}
//                               </Link>
//                                                                                     ))}
//                                                                                     </div>
//                             </div>
//                         )}
//             </div>
//                                     )}
//                                     </div>
                        

//                         // NORMAL DROPDOWN ABOUT/INDUSTRIES/INSIGHT</nav>
//                         if(item.type === "dropdown") {
//                             return (
//                                 <>
//                                 <div 
//                                 key={item.id}
//                                 className="nav-dropdown"
//                                 onMouseEnter={() => {
//                                     setActiveDropdown(item.id)
//                                     setServicesOpen(false);
//                                 }}
//                                 onMouseLeave={() =>
//                                     setActiveDropdown(null)
//                                 }>
//                                 <Link
//                                 to={item.path}
//                                 className="nav-dropdown-triger">
//                                 {item.label}
//                                 <span className="arrow">▾</span>
//                                 </Link>

                                
//                                     {activeDropdown === item.id && (
//                                         <div className="nav-dropdown-menu">
                                        
//                                             {item.children.map((child) => 
//                                                 <Link 
//                                                     key={child.id}
//                                                     to={child.path}
//                                                     className="nav-dropdown-link"
//                                                 >
//                                                     {child.label}
//                                                 </Link>
//                                         ))}
                                
//                                 </div>
                               
//                             )
//                         }
//                         </>
//         </header>
//     )
// }