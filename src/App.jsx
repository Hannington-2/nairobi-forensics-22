// import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ========================================
// LAYOUT
// ========================================
import NavbarMenu from "./components/Navigation/NavbarMenu";
// ========================================
// PAGES
// Lazy loading helps reduce the initial
// JavaScript bundle size
// ========================================

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));

// const ServicesPage = lazy(() =>
//   import("./pages/Services/ServicesPage")
// );

// const CategoryPage = lazy(() =>
//   import("./pages/Services/CategoryPage")
// );

// const ServiceDetailPage = lazy(() =>
//   import("./pages/Services/ServiceDetailPage")
// );

const Industries = lazy(() =>
  import("./pages/Industries/Industries")
);

const Insights = lazy(() =>
  import("./pages/Insights/Insights")
);

const Contact = lazy(() =>
  import("./pages/Contact/Contact")
);

const NotFound = lazy(() =>
  import("./pages/NotFound")
);


// ========================================
// LOADING COMPONENT
// ========================================

const PageLoader = () => {
  return (
    <div className="page-loader">
      Loading...
    </div>
  );
};


// ========================================
// APP
// ========================================

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
            element={<About />}
          />


          {/* ================================
              SERVICES
          ================================= */}

          {/* All Services Overview */}
          {/* <Route
            path="/services"
            element={<ServicesPage />}
          /> */}


          {/* Service Category

              Example:
              /services/forensic-accounting-financial-investigations
          */}
          {/* <Route
            path="/services/:categorySlug"
            element={<CategoryPage />}
          /> */}


          {/* Individual Service

              Example:
              /services/forensic-accounting-financial-investigations/fraud-investigations
          */}
          {/* <Route
            path="/services/:categorySlug/:serviceSlug"
            element={<ServiceDetailPage />}
          /> */}


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

// import About from "./pages/About/About";
// import Leadership from "./pages/About/Leadership";
// import OurApproach from "./pages/About/OurApproach";
// import Contact from "./pages/Contact/Contact";
// import Home from "./pages/Home/Home";
// import Industries from "./pages/Industries/Industries";
// import IndustryDetail from "./pages/Industries/IndustryDetail";
// import ArticleDetail from "./pages/Insights/ArticleDetail";
// import GlossaryDetail from "./pages/Insights/GlossaryDetail";
// import GuideDetail from "./pages/Insights/GuideDetail";
// import Insights from "./pages/Insights/Insights";
// import ResearchDetail from "./pages/Insights/ResearchDetail";

// function App() {
//   return (
//     <>
//     <Home />
//       <Navbar />

//       <h2>Website is working</h2>
//       <About />
//       <Leadership />
//       <OurApproach />
//       <Contact />
//       <Industries />
//       <IndustryDetail />
//       <ArticleDetail />
//       <GlossaryDetail />
//       <GuideDetail />
//       <Insights />
//       <ResearchDetail />
//     </>
//   );
// }

// export default App;