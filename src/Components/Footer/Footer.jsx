import React from "react";
import "./Footer.css";
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { MdAllInbox } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>Indahnya toraja</span>
          </div>

          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks kiri ">
          <span className="linkTitle">Informasi</span>
          <li>Home</li>
          <li>Explore</li>
          <li>Travel</li>
          <li>Blog</li>
        </div>

        <div className="footerLinks ">
          <span className="linkTitle">Biodata</span>
          <li>
            <span className="span-name">Umran S</span>
          </li>
          <li>
            <span className="span-name">JTIK 2018</span>
          </li>
          <li>
            <span className="email">
              <FiMapPin /> Pulau Marabatuan, Kalimantan Selatan, Indonesia{" "}
            </span>
          </li>
        </div>

        <div className="footerLinks kiri">
          <span className="linkTitle">Contacs Details</span>
          <a
            href="https://wa.me/082154769322"
            target="_blank"
            className="phone"
          >
            {" "}
            082154769322 <BsWhatsapp />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=umranktb111213@gmail.com&su=Info%20Wisata&body=Halo%20saya%20tertarik%20dengan%20informasi%20wisata."
            target="_blank"
            rel="noopener noreferrer"
            className="email"
          >
            umranktb111213@gmail.com <MdAllInbox />
          </a>
          <a
            href="https://www.facebook.com/umran.dewi"
            target="_blank"
            className="email"
          >
            Umran S <ImFacebook className="icon-footer" />
          </a>
          <a href="https://www.instagram.com/rannn.s12/" target="_blank">
            rann.s12 <AiFillInstagram className="icon-footer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
