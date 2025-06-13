import React from "react";
import "./Subscribe.scss";
import image1 from "../../Assets/subscribe/iconToraja.png";

const Subscribe = () => {
  const scrollToSearch = () => {
    const section = document.getElementById("search");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={image1} alt="div Img" />
        <div className="textDiv">
          <h4>Mulai perjalanan wisatamu </h4>
          <p>
            Cari lokasi yang tersedia di Bumi Toraja indah. Mulai perjalananmu
            untuk menemukan hal baru
          </p>
            <button onClick={scrollToSearch} className="mulai">Mulai Cari</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
