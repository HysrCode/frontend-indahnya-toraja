import React from "react";
import "./DestinationDetails.scss";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsInfoSquare } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
const DestinationDetails = ({ destination }) => {
  if (!destination) return <div className="detail-loading">Loading...</div>;

  const {
    name = "Nama tidak tersedia",
    description = "Deskripsi tidak tersedia",
    city = "Kota tidak diketahui",
    rating = "N/A",
    images = [],
    location = {},
    category = "Kategori tidak diketahui",
    facility = [],
    contact = [],
  } = destination;

  return (
    <div className="destination section container">
      <div className="destinationDetail ">
        <h2 className="detail-title">{name}</h2>
        <div className="sub-title">
          <p className="detail-rating">⭐ Rating: {rating}</p>
          <p className="detail-city">
            📍 {city} - {category}
          </p>
        </div>

        <div className="detail-images">
          {images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="destination-swiper"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={`/imagesDestination/${img}`}
                    alt={`${name}-${idx}`}
                    // className="detail-image-slide"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Tidak ada gambar tersedia.</p>
          )}
        </div>
        <div class="garis"></div>
        <div className="detail-description">
          <h2>Seputar {name} </h2>
          <p className="">{description}</p>
        </div>
        <div className="detail-facility">
          <div class="title-facility">
            <h2>Fasilitas</h2>
            <BsInfoSquare />
          </div>
          <ul>
            {facility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="detail-contact">
          <div className="title-contact">
            <h2>Contact</h2>
            <RiContactsFill />
          </div>
          <ul>
            {contact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
