import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const location = useLocation(); // Mendapatkan state yang dikirim dari navigasi
  const data = location.state?.data; // Data terkait gambar

  if (!data) {
    return <div>Error: No data found for this item.</div>;
  }

  return (
    <div className="details-container">
      <h1>{data.alt || `Details for Image ${id}`}</h1>
      <img src={data.image} alt={data.alt} style={{ width: "100%", borderRadius: "16px" }} />
      <p>{data.children || "No additional details available."}</p>
    </div>
  );
};

export default Details;
