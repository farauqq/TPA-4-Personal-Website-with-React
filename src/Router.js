import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/CardHome";
import About from "./pages/About/CardAbout";
import Artikel from "./pages/Artikel/Artikel";
import Portofolio from "./pages/Portofolio/CardPortofolio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portofolio" element={<Portofolio />} />
      <Route path="artikel" element={<Artikel />} />
    </Routes>
  );
};

export default AppRoutes;
