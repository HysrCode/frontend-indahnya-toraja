import React from "react";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle section">
      <div className="secContiner container">
        <div className="grid">
          <span className="flex">
            <h1>10+"</h1>
            <p>Informasi Wisata Budaya Unik Suku Toraja</p>
          </span>

          <span className="flex">
            <h1>20+</h1>
            <p>Informasi Tempat Wisata </p>
          </span>

          <span className="flex">
            <h1>10+</h1>
            <p>Rekomendasi Tempat Wisata Favorit</p>
          </span>

          <span className="flex">
            <h1>4.8</h1>
            <p>Rating Reviews</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
