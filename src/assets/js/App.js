import { useEffect } from "react";
import LogoFavIcon from "@/assets/images/privicoin-icon-@2x.webp";

//components
import HomePage from "@/assets/js/components/pages/HomePage";

const App = () => {
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
      {/* Home Page */}
      <HomePage />
    </div>
  );
};

export default App;
