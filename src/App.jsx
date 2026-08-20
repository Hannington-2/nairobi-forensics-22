// import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/Navigation/NavbarMenu";
import PagePlaceholder from "./pages/PagePlaceholder";
const Home = lazy(() => import("./pages/Home/Home"));

// const ServicesPage = lazy(() =>
//   import("./pages/Services/ServicesPage")
// );

// const CategoryPage = lazy(() =>
//   import("./pages/Services/CategoryPage")
// );

// const ServiceDetailPage = lazy(() =>
//   import("./pages/Services/ServiceDetailPage")
// );

const NotFound = lazy(() =>
  import("./pages/NotFound")
);

const PageLoader = () => {
  return (
    <div className="page-loader">
      Loading...
    </div>
  );
};

function App() {
  return (
    <>
      {/* GLOBAL NAVIGATION */}
      <NavbarMenu />

      {/* PAGE ROUTES */}
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
            element={<PagePlaceholder section="About Us" />}
          />


          {/* ================================
              SERVICES
          ================================= */}

          {/* All Services Overview */}
          <Route
            path="/services"
            element={<PagePlaceholder section="Services" />}
          />


          {/* Service Category */}
          <Route
            path="/services/:categorySlug"
            element={<PagePlaceholder section="Services" />}
          />


          {/* Individual Service */}
          <Route
            path="/services/:categorySlug/:serviceSlug"
            element={<PagePlaceholder section="Services" />}
          />


          {/* ================================
              OTHER PAGES
          ================================= */}

          <Route
            path="/industries"
            element={<PagePlaceholder section="Industries" />}
          />

          <Route
            path="/insights"
            element={<PagePlaceholder section="Insights" />}
          />

          <Route
            path="/contact"
            element={<PagePlaceholder section="Contact" />}
          />

          {/* PLACEHOLDER PAGES FOR CONTENT STILL BEING BUILT */}
          <Route
            path="/about/:pageSlug"
            element={<PagePlaceholder section="About" />}
          />

          <Route
            path="/services/*"
            element={<PagePlaceholder section="Services" />}
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
    </>
  );
}

export default App;

