import React, { useEffect, useState } from "react";
import "./Destinations.css";

import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import axios from "axios";

import { MdLocationPin } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

import { useAuth } from "../../Context/AuthContext";
import LoginModal from "../LoginModal/LoginModal";

const Destinations = () => {
  const [destinasiList, setDestinasiList] = useState([]);
  const [error, setError] = useState(null);
  const [searchNama, setSearchNama] = useState("");
  const [kategoriList, setKategoriList] = useState(["Rekomendasi"]);
  const [kategori, setKategori] = useState("Rekomendasi");

  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/destinasi`
        );
        setDestinasiList(response.data);

        const kategoriUnik = [
          ...new Set(
            response.data.map((item) => item.category).filter(Boolean)
          ),
        ];
        setKategoriList(["Rekomendasi", ...kategoriUnik]);
      } catch (err) {
        setError("Gagal mengambil data");
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (destinasiList.length === 0) return <Loading />;

  const filterByCategory = (list) => {
    if (kategori === "Rekomendasi") return list;
    return list.filter(
      (item) => item.category?.toLowerCase() === kategori.toLowerCase()
    );
  };

  const filteredData = destinasiList.filter((item) =>
    item.name.toLowerCase().includes(searchNama.toLowerCase())
  );

  const kategoriFiltered = filterByCategory(filteredData);
  const dataToDisplay = kategoriFiltered.slice(0, 8);

  return (
    <div className="destination section container" id="search">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">JELAJAHI</span>
          <h3>Temukan Tujuan Wisatamu</h3>
          <p>
            Nikmati perjalanan wisata budaya yang membuat kamu bangga akan
            keindahan alam
          </p>
        </div>

        <div className="searchContainer">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input
              type="text"
              placeholder="Cari Tujuanmu"
              value={searchNama}
              onChange={(e) => setSearchNama(e.target.value)}
            />
          </div>
        </div>

        <div className="secMenu">
          <ul className="flex">
            {kategoriList.map((cat) => (
              <li
                key={cat}
                onClick={() => setKategori(cat)}
                className={kategori === cat ? "active" : ""}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="destinationContainer grid">
          {dataToDisplay.length === 0 ? (
            <p style={{ color: "#fff", textAlign: "center" }}>
              Data tidak ditemukan
            </p>
          ) : (
            dataToDisplay.map((destinations) => {
              const imageSrc = `./imagesDestination/${destinations.images[0]}`;
              return (
                <Link
                  to={`/details/${destinations.id}`}
                  className="singleDestination"
                  key={destinations.id}
                  onClick={(e) => {
                    if (!user) {
                      e.preventDefault();
                      setShowLogin(true);
                    }
                  }}
                >
                  <div className="imgDiv">
                    <img src={imageSrc} alt={destinations.name} />
                    <div className="descInfo flex">
                      <div className="text">
                        <span className="name">{destinations.name}</span>
                        <p className="flex">
                          <TiLocation className="icon" />
                          {destinations.city}
                        </p>
                      </div>
                      <span className="rating">{destinations.rating}</span>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>

      {/* Modal login */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Destinations;
