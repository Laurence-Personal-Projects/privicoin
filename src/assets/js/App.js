import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LogoFavIcon from "@/assets/images/privicoin-icon-@2x.webp";

// Components
import HomePage from "@/assets/js/pages/HomePage";

// Dashboard Components
import Dashboard from "@/assets/js/pages/dashboard/Dashboard";

const AppSetup = () => {
  const location = useLocation(); // Get the current URL path

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
      {/* Render HomePage only on "/" */}
      {location.pathname === "/" && <HomePage />}

      {/* Routes for Dashboard pages */}
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
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
