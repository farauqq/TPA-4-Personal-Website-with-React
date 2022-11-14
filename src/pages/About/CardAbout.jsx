import React from "react";
import "./CardAbout.css";
import profile from "../../assets/profile.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-img">
          <img src={profile} alt="Profile" width="500" />
        </div>
        <div className="about-text">
          <h1>
            About <span>me!</span>
          </h1>
          <p>
            Saya Farauq Rifky Dwi Arya Maulana, berasal dari Kota Kudus. Saya mahasiswa Universitas Dian Nuswantoro prodi Teknik Informatika. Saat ini saya mengikuti Kampus Merdeka program Studi Independen dengan mitra Skilvul. Saya suka
            mempelajari IT karena perkembangannya yang sangat pesat dan saya sangat menyukai hal-hal baru. Find me:
          </p>
          <div className="sosmed">
            <a href="https://www.instagram.com/farauqq/">
              <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
            </a>
            <a href="https://github.com/farauqq/">
              <img src="https://img.icons8.com/material-rounded/50/000000/github.png" />
            </a>
            <a href="https://www.linkedin.com/in/farauq-rifky-dwi-arya-maulana-507844190/">
              <img src="https://img.icons8.com/ios/50/000000/linkedin-2--v1.png" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
