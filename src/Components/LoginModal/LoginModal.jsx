// LoginModal.jsx
import React, { useEffect } from "react";
import { signInWithGoogle } from "../../Utils/firebase";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginModal.scss";
import { FcGoogle } from "react-icons/fc";

const LoginModal = ({ onClose }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Jika user sudah login, tutup modal & redirect
  useEffect(() => {
    if (user) {
      onClose();
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [user, onClose, navigate]);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Gagal login:", error);
      alert("Login gagal, silakan coba lagi.");
    }
  };

  // Fungsi untuk tutup modal dan kembali ke halaman utama
  const handleCloseAndGoHome = () => {
    onClose(); // tutup modal
    setTimeout(() => {
      navigate("/"); // redirect ke home
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll ke atas
    }, 100); // delay agar modal sempat tertutup
  };

  return (
    <div className="login-modal">
      {/* background overlay, klik di luar box juga tutup */}
      <div className="overlay" onClick={handleCloseAndGoHome} />

      <div className="login-box">
        <h2>Masuk untuk melanjutkan</h2>
        <div className="login-logo">
          <FcGoogle />
        </div>
        <button className="google-login-btn" onClick={handleLogin}>
          Masuk dengan Google
        </button>
        <button className="cancel-btn" onClick={handleCloseAndGoHome}>
          Batal
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
``;
