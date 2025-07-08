import React from "react"
import "./Home.css"

//Imported Assets
import Video from "../../Assets/videoBg.mp4"
import { AiOutlineSwapRight } from "react-icons/ai"
import image1 from "../../Assets/images/image1.jfif"
import image2 from "../../Assets/images/image2.jfif"
import image3 from "../../Assets/images/image4.jfif"
import image4 from "../../Assets/images/image5.jfif"

const Home = () => {
    return (
        <div className="Home" id="home">
            <div className="videoBg">
                <video src={Video} autoPlay loop muted  ></video>
            </div>

            <div className="sectionText">
                <h1>Kunjungi Toraja Negeri di Atas Awan</h1>
                <p>Lihatlah tempat-tempat wisata yang ada di Toraja dan buat perjalananmu menyenangkan.
                </p>
                 {/* <button className="btn flex">Ayok Lihat  <AiOutlineSwapRight/></button>     */}
            </div>

            <div className="popularPlaces">
                <div className="content">
                    <h3>Tempat Populer</h3>
                    <div className="images flex">
                        <img src={image1} alt="Destinasi" />
                        <img src={image2} alt="Destinasi" />
                        <img src={image3} alt="Destinasi" />
                        <img src={image4} alt="Destinasi" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home