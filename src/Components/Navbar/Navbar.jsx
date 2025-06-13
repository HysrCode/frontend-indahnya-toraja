import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Utils/firebase";
import LogoutModal from "../LogoutModal/LogoutModal"; // sesuaikan path jika perlu

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); //modal logout
  const { user, setShowLoginModal } = useAuth(); // <- pakai setShowLoginModal dari Context
  const navigate = useNavigate();
  const profileMenuRef = useRef();

  const showNavbar = () => setNavBar("menu showNavbar");
  const removeNavbar = () => setNavBar("menu");

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavScroll = (targetId) => {
    if (window.location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      scrollTo(targetId);
    }
  };

  const scrollToHome = () => handleNavScroll("home");
  const scrollToSearch = () => handleNavScroll("search");
  const scrollToAbout = () => handleNavScroll("about");

  // tombol Lokasi: tampilkan login modal jika belum login
  const goToLastMap = () => {
    if (!user) {
      setShowLoginModal(true); // ← Tampilkan modal login jika belum login
      return;
    }

    const lastId = localStorage.getItem("lastDestinasiId");
    if (lastId) {
      navigate(`/details/${lastId}?scrollTo=map`);
    } else {
      navigate("/details");
    }
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = async () => {
    try {
      setShowProfileMenu(false);
      setShowLogoutModal(false); // Tutup modal
      await signOut(auth);
      navigate("/#home");
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navBar">
      <div className="logoDiv" onClick={scrollToHome}>
        <Link to="/" className="customLink">
          <BiLogoMediumOld className="icon" />
          <span>Indahnya Toraja</span>
        </Link>
      </div>

      <div className={navBar}>
        <ul>
          <li className="navList" onClick={scrollToSearch}>
            Tujuan
          </li>
          <li className="navList" onClick={scrollToAbout}>
            Tentang Toraja
          </li>
          <li className="navList" onClick={goToLastMap}>
            Lokasi
          </li>
          <li className="navList" onClick={() => navigate("/galeri")}>
            Galeri
          </li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>

      {/* Tombol Login / Logout */}
      {user ? (
        <div className="profileWrapper" ref={profileMenuRef}>
          <img
            src={user.photoURL}
            alt="Profile"
            className="profileImage"
            onClick={toggleProfileMenu}
          />
          <div className={`profileMenu ${showProfileMenu ? "show" : ""}`}>
            <p>{user.displayName}</p>
            <button onClick={() => setShowLogoutModal(true)}>Logout</button>
          </div>
        </div>
      ) : (
        <button className="login btn" onClick={() => setShowLoginModal(true)}>
          Log in
        </button>
      )}

      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />

      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </div>
  );
};

export default Navbar;
