import React from "react";
import "./Reviews.css";
import person6 from "/images/suku-toraja.png";
import FadeTextSlider from "../SliderToraja/SliderToraja";

const Reviews = () => {
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText"> SEJARAH SINGKAT TORAJA</span>
          <h3>Dari Manakah Suku Toraja ini?</h3>
          <FadeTextSlider/>
        </div>
        <div className="imageDiv">
          <img src={person6} alt="imagediv" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
