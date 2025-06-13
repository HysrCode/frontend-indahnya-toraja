import React, { useEffect, useState } from "react";
import "./SliderToraja.css"; // kita buat style di bawah
import torajaText from "./sejaraToraja";


const FadeTextSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % torajaText.length);
    }, 5000); // 5 detik per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-slider">
      <p key={index} className="fade-text">
        {torajaText[index]}
      </p>
    </div>
  );
};

export default FadeTextSlider;
