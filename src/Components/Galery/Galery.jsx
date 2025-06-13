import "./Galery.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Pin from "./Pin"; // Pastikan komponen Pin telah diimplementasikan
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Galery = () => {
  const [galleryList, setGalleryList] = useState([]); // Data galeri
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/destinasi`
        );
        const shuffledData = shuffleArray(response.data); // Mengacak data
        setGalleryList(shuffledData);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk mengacak data
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sortKey: Math.random() })) // Tambahkan kunci random untuk pengurutan
      .sort((a, b) => a.sortKey - b.sortKey) // Urutkan berdasarkan kunci random
      .map(({ sortKey, ...rest }) => rest); // Hapus kunci random setelah pengurutan
  };

  //Buat random index untuk gambar
  const getRandomIndex = (imagesArray) => {
    if (!imagesArray || imagesArray.length === 0) {
      return 0; // Jika array kosong atau undefined, kembalikan indeks 0
    }
    return Math.floor(Math.random() * (imagesArray.length - 1)); // Menghasilkan indeks maksimal array.length - 1
  };

  // Tampilkan error jika ada
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Tampilkan "Loading" jika data belum ada
  if (galleryList.length === 0) {
    return <Loading />;
  }

  return (
    <div className="galeryContainer section container">
      <div className="secContainer">
        <div className="pinContainer">
          {galleryList.map((item, index) => (
            <Pin
              key={item.id} // Gunakan index sebagai key (pastikan ID unik lebih baik jika tersedia)id
              id={item.id} // Properti id diteruskan ke Pin
              size={getRandomSize()} // Random ukuran (small, medium, large)
              image={
                item.images && item.images.length > 0
                  ? `/imagesDestination/${
                      item.images[getRandomIndex(item.images)]
                    }`
                  : "/imagesDestination/default.jpg"
              }
              alt={item.id || `Image ${index}`} // Alt text berdasarkan nama atau fallback
            >
              <p>{item.name || "Unnamed Destination"}</p> {/* Nama destinasi */}
            </Pin>
          ))}
        </div>
      </div>
    </div>
  );
};

// Fungsi untuk mendapatkan ukuran random (small, medium, large)
const getRandomSize = () => {
  const sizes = ["small", "medium", "large"];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

export default Galery;
