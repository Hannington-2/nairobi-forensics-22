// src/App.jsx

import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarMenu from "./components/Navigation/NavbarMenu";

const Footer = lazy(() => import("./components/layout/Footer"));
const FAQsection = lazy(() => import("./components/layout/FAQsection"));
const PagePlaceholder = lazy(() => import("./pages/PagePlaceholder"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Industries = lazy(() => import("./pages/Industries/Industries"));
const Insights = lazy(() => import("./pages/Insights/Insights"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Services
const ServicesPage = lazy(() => import("./pages/Services/Services"));
const CategoryPage = lazy(() => import("./pages/Services/CategoryPage"));
const ServiceDetailPage = lazy(() => import("./pages/Services/ServiceDetailPage"));

// 404
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const PageLoader = () => {
  return (
    <div className="page-loader">
      Loading...
    </div>
  );
};

function App() {
  const { pathname } = useLocation();

  return (
    <div className="app-shell">
      {/* GLOBAL NAVIGATION */}
      <NavbarMenu />

      {/* PAGE ROUTES */}
      <main className="app-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* ABOUT */}
            <Route path="/about" element={<About />} />

            {/* ================================
                SERVICES
            ================================= */}

            {/* All Services Overview */}
            <Route path="/services" element={<ServicesPage />} />

            {/* Service Category */}
            <Route path="/services/:categorySlug" element={<CategoryPage />} />

            {/* Individual Service - with category in URL */}
            <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceDetailPage />} />

            {/* Individual Service - direct URL (for SEO) */}
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />

            {/* ================================
                OTHER PAGES
            ================================= */}

            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:pageSlug" element={<PagePlaceholder section="Contact" />} />

            {/* PLACEHOLDER PAGES FOR CONTENT STILL BEING BUILT */}
            <Route path="/about/:pageSlug" element={<PagePlaceholder section="About" />} />
            <Route path="/industries/:pageSlug" element={<PagePlaceholder section="Industries" />} />
            <Route path="/insights/:pageSlug" element={<PagePlaceholder section="Insights" />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* FAQ SECTION (not on homepage) */}
        <Suspense fallback={null}>
          {pathname !== "/" && !pathname.startsWith("/services/") && (
            <FAQsection pathname={pathname} />
          )}
        </Suspense>
      </main>

      {/* FOOTER */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;