import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import DestinationDetails from "../../Components/DestinationDetails/DestinationDetails";
import TourismMap from "../../Components/TourismMap/TourismMap";

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const mapRef = useRef();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simpan ID destinasi terakhir yang dibuka
  useEffect(() => {
    if (id) {
      localStorage.setItem("lastDestinasiId", id);
    }
  }, [id]);

  // Scroll ke map jika ada query scrollTo=map
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scrollTo") === "map" && mapRef.current) {
      setTimeout(() => {
        mapRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  // Ambil data dari backend
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/destinasi/${id}`
        );
        setDestination(res.data);
        setError(null);
      } catch (err) {
        setError("Data tidak ditemukan");
        setDestination(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDestination();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="detailPage">
      <DestinationDetails destination={destination} />
      <div ref={mapRef}>
        <TourismMap location={destination.location} />
      </div>
    </section>
  );
};

export default Details;
