import React, { useState, useEffect } from "react";
import "./Questions.scss";
import Accordion from "./Accordion.jsx";
import axios from "axios";

const SuccessModal = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <p>Pertanyaan berhasil dikirim! 🙏</p>
      </div>
    </div>
  );
};

const Questions = () => {
  const [active, setActive] = useState(
    "Apa yang membuat Toraja unik sebagai tujuan wisata?"
  );
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/questions`, {
        email,
        message,
      });

      setSent(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error:", err);
      alert("Gagal mengirim pesan.");
    }
  };

  return (
    <div className="questions section container">
      <SuccessModal visible={sent} />

      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContiner grid">
        <div className="accordion grid">
          <Accordion
            title={"Apa yang membuat Toraja unik sebagai tujuan wisata?"}
            desc={
              "Toraja terkenal dengan budaya dan tradisi uniknya yang masih dipertahankan hingga kini. Salah satu daya tarik utamanya adalah upacara pemakaman Rambu Solo' yang merupakan tradisi kematian yang megah dan kompleks. "
            }
            active={active}
            setActive={setActive}
          />

          <Accordion
            title={"Kapan waktu terbaik untuk mengunjungi Toraja?"}
            desc={
              "Waktu terbaik untuk mengunjungi Toraja adalah antara bulan Juni hingga September, di mana cuaca cenderung lebih kering dan nyaman untuk berwisata. "
            }
            active={active}
            setActive={setActive}
          />

          <Accordion
            title={"Apa saja kegiatan wisata yang bisa dilakukan di Toraja?"}
            desc={
              "Wisatawan dapat mengunjungi situs budaya dan sejarah seperti Londa, Kete Kesu, dan Lemo; menyaksikan upacara adat Rambu Solo' dan Ma'nene; menikmati wisata alam dengan mendaki Gunung Sesean, menjelajahi air terjun Sarambu Assing, dan menikmati pemandangan dari Batu Tumonga; berinteraksi dengan penduduk lokal dengan menginap di desa tradisional. "
            }
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4>Masih Penasaran, Ingin Tahu Lebih?</h4>
            <p>
              Hubungi Admin dengan mengirimkan pertanyaan dan nama email kamu
              dibawah
            </p>
          </div>
          <form className="formContent grid" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Enter question here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <input type="submit" className="btnSubmit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
