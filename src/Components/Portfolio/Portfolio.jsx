import React from "react";
import "./Portfolio.scss";
import gambar1 from "../../Assets/portfolio_image/rumah_tongkongan.jpg";
import gambar2 from "../../Assets/portfolio_image/rambu_solo.jpg";
import gambar3 from "../../Assets/portfolio_image/makam_pohon.jpg";
import gambar4 from "../../Assets/portfolio_image/manene.jpg";
import banner from "../../Assets/portfolio_image/banner.png";
const Portfolio = () => {
  return (
    <div className="portfolio section container" id="about">
      <div className="secContainer">
        <div className="leftContent">
          <div className="secHeading">
            <h2>Tentang Toraja</h2>
          </div>

          <div className="grid">
            <div className="singlePortofolio flex">
              <div className="iconDiv">
                <img src={gambar1} alt="tongkonan" />
              </div>

              <div className="infor">
                <h4>Rumah Tongkonan Khas Toraja</h4>
                <p>
                  Tongkonan adalah rumah adat Suku Toraja yang memiliki makna
                  dan nilai tersendiri. Mulai dari status sosial hingga arti
                  hidup, semua terukir di Tongkonan. Bahan yang digunakan untuk
                  membuat rumah Tongkonan adalah kayu uru. Di bagian atas, atap
                  rumah ini sengaja dibentuk seperti perahu terbalik sebagai
                  pengingat bahwa para leluhur mereka dulunya menggunakan perahu
                  untuk mencapai Pulau Sulawesi.
                </p>
              </div>
            </div>
            <div className="singlePortofolio flex">
              <div className="iconDiv">
                <img src={gambar2} alt="rambusolo" />
              </div>

              <div className="infor">
                <h4>Menyaksikan Upacara Adat Rambu Solo</h4>
                <p>
                  O. Upacara ini merupakan sebuah acara pemakaman khas Toraja
                  yang biasanya membutuhkan persiapan selama berbulan-bulan dan
                  memerlukan biaya besar. Untuk menunggu upacara pemakaman,
                  jasad orang yang telah meninggal akan dibungkus dengan kain
                  dan disimpan di dalam Rumah Tongkonan. Puncak upacara Rambu
                  Solo biasanya berlangsung pada bulan Juli hingg Agustus. Pada
                  waktu tersebut, orang-orang Toraja yang merantau ke luar
                  daerah biasanya akan pulang dan turut mengikuti rangkaian
                  kegiatan upacara Rambu Solo. Karena keunikannya, upacara ini
                  pun selalu menyedot perhatian para wisatawan dari dalam negeri
                  serta luar negeri.
                </p>
              </div>
            </div>
            <div className="singlePortofolio flex">
              <div className="iconDiv">
                <img src={gambar3} alt="makampohon" />
              </div>

              <div className="infor">
                <h4>Makam Pohon Toraja</h4>
                <p>
                  Keunikan lain yang akan Anda temukan di Tana Toraja adalah
                  adanya makam bayi yang ditanam di dalam batang Pohon Tara.
                  Menurut tradisi Suku Toraja, hal ini sengaja dilakukan dengan
                  maksud agar bayi yang meninggal tersebut dapat meminum getah
                  Pohon Tara sebagai pengganti ASI. Untuk berkunjung ke makam
                  bayi ini, Anda cukup merogoh kocek sekitar Rp10.000 saja. Di
                  sana, Anda akan disuguhi rimbunan pohon bambu dan sebatang
                  Pohon Tara yang tidak begitu tinggi dengan kotak-kotak yang
                  tertutup ijuk pada bagian batangnya.
                </p>
              </div>
            </div>
            <div className="singlePortofolio flex">
              <div className="iconDiv">
                <img src={gambar4} alt="manene" />
              </div>

              <div className="infor">
                <h4>Melihat Upacara Ma'Nene</h4>
                <p>
                  Keunikan lain yang akan Anda temukan di Tana Toraja adalah
                  adanya makam bayi yang ditanam di dalam batang Pohon Tara.
                  Menurut tradisi Suku Toraja, hal ini sengaja dilakukan dengan
                  maksud agar bayi yang meninggal tersebut dapat meminum getah
                  Pohon Tara sebagai pengganti ASI. Untuk berkunjung ke makam
                  bayi ini, Anda cukup merogoh kocek sekitar Rp10.000 saja. Di
                  sana, Anda akan disuguhi rimbunan pohon bambu dan sebatang
                  Pohon Tara yang tidak begitu tinggi dengan kotak-kotak yang
                  tertutup ijuk pada bagian batangnya.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rightContent">
                    <img src={banner} alt="banner" />
                </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
