import Home from "../../Components/Home/Home";
import Middle from "../../Components/Middle/Middle";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Reviews from "../../Components/Reviews/Reviews";
import Questions from "../../Components/Questions/Questions";
import Subscribe from "../../Components/Subscribe/Subscirbe";
import Destinations from "../../Components/Destinations/Destinations";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Homes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // waktu kecil agar nunggu render
      }
    }
  }, [location]);
  return (
    <div>
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
    </div>
  );
};

export default Homes;
