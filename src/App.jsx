// import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/Navigation/NavbarMenu";
import Footer from "./components/layout/Footer";
import PagePlaceholder from "./pages/PagePlaceholder";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Industries = lazy(() => import("./pages/Industries/Industries"));
const Insights = lazy(() => import("./pages/Insights/Insights"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const ServicesPage = lazy(() => import("./pages/Services/Services"));

const CategoryPage = lazy(() => import("./pages/Services/CategoryPage"));

const ServiceDetailPage = lazy(() => import("./pages/Services/ServiceDetailPage"));

const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const PageLoader = () => {
  return (
    <div className="page-loader">
      Loading...
    </div>
  );
};

function App() {
  return (
    <div className="app-shell">
      {/* GLOBAL NAVIGATION */}
      <NavbarMenu />

      {/* PAGE ROUTES */}
      <main className="app-content">
        <Suspense fallback={<PageLoader />}>
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />


          {/* ================================
              SERVICES
          ================================= */}

          {/* All Services Overview */}
          <Route
            path="/services"
            element={<ServicesPage />}
          />


          {/* Service Category */}
          <Route
            path="/services/:categorySlug"
            element={<CategoryPage />}
          />


          {/* Individual Service */}
          <Route
            path="/services/:categorySlug/:serviceSlug"
            element={<ServiceDetailPage />}
          />


          {/* ================================
              OTHER PAGES
          ================================= */}

          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/insights"
            element={<Insights />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/contact/:pageSlug"
            element={<PagePlaceholder section="Contact" />}
          />

          {/* PLACEHOLDER PAGES FOR CONTENT STILL BEING BUILT */}
          <Route
            path="/about/:pageSlug"
            element={<PagePlaceholder section="About" />}
          />

          <Route
            path="/services/*"
            element={<NotFound />}
          />

          <Route
            path="/industries/:pageSlug"
            element={<PagePlaceholder section="Industries" />}
          />

          <Route
            path="/insights/:pageSlug"
            element={<PagePlaceholder section="Insights" />}
          />


          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

