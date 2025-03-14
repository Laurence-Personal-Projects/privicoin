import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import LogoFavIcon from "@/assets/images/privicoin-icon-@2x.webp";

// Components - pages
import HomePage from "@/assets/js/pages/HomePage";
import NotFound from "@/assets/js/pages/NotFound";

// Dashboard Components
import Dashboard from "@/assets/js/pages/dashboard/Dashboard";

const AppSetup = () => {
  useEffect(() => {
    document.title = "Privicoin";

    // Change favicon dynamically
    const favIcon = (iconURL) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = iconURL;
    };

    favIcon(LogoFavIcon);
  }, []);

  return (
    <div className="App">

      {/* Routes for Dashboard pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Explicit Home Route | Render HomePage only on "/" */}

        {/* Hide Dashboard Routes in production - only show this when all the integration is completed */}
        {process.env.NODE_ENV !== "production" && (
          <Route path="/dashboard/*" element={<Dashboard />} />
        )}

        {/* 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    
  );
};

const App = () => {
  return (
    <Router>
      <AppSetup />
    </Router>
  );
};

export default App;
