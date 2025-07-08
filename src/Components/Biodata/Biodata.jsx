// components/Biodata.jsx
import React from "react";
import "./Biodata.scss";
import LogoUnm from "../../../public/images/logo-unm.jpg";

const Biodata = () => {
  return (
    <div className="container">
      <h1 className="title"> Biodata Peneliti</h1>
      <div className=" author-layout">
        {/* Panel Kiri - Logo & Nama Penulis */}
        <div className="author-panel">
          <div className="author-identity">
            <div className="logo-placeholder">
              <img
                className="logo-circle"
                src={LogoUnm}
                alt="Logo Campus"
              ></img>
            </div>
            <h1 className="author-name">Umran S</h1>
          </div>
        </div>

        {/* Panel Kanan - Biodata Penguji & Pembimbing */}
        <div className="bio-panel">
          {/* Bagian Pembimbing */}
          <div className="supervisor-section">
            <h2>Pembimbing</h2>
            <div className="bio-grid">
              <div className="bio-card">
                <h3>Prof. Dr. Ir. Jamaluddin, M.P., IPM</h3>
                <p>Universitas Negeri Makassar</p>
                <p>Dosen Pembimbing 1</p>
              </div>
              <div className="bio-card">
                <h3>Ninik Rahayu Ashadi, S.Pd., M.Pd</h3>
                <p>Universitas Negeri Makassar</p>
                <p>Dosen Pembimbing 2</p>
              </div>
            </div>
          </div>
          {/* Bagian Penguji */}
          <div className="examiner-section">
            <h2>Penguji</h2>
            <div className="bio-grid">
              <div className="bio-card">
                <h3>Dr. Drs. Ir. H. Alimuddin Sa'ban Miru, M.Pd</h3>
                <p>Universitas Negeri Makassar</p>
                <p>Dosen Penguji 1</p>
              </div>
              <div className="bio-card">
                <h3>Andi Baso Kaswar, S.Pd., M.Kom</h3>
                <p>Universitas Negeri Makassar</p>
                <p>Dosen Penguji 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
