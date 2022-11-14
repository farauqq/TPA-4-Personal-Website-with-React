import React from "react";
import "./CardHome.css";
import Profile from "../../assets/profile.png";
import About from "../About/CardAbout";
import Portofolio from "../Portofolio/CardPortofolio";
import Artikel from "../Artikel/Artikel";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-text">
          <h2>Hello!</h2>
          <h1>
            <strong>
              I'm <span>Farauq Rifky</span>
            </strong>
          </h1>
          <p>Saya tertarik dengan ilmu komputer dan suka mempelajari sesuatu yang baru terutama tentang IT</p>
        </div>

        <div className="home-img">
          <img src={Profile} alt="Profile" width="500" />
        </div>
      </section>
      <About />
      <Portofolio />
      <Artikel />
    </>
  );
};
export default Home;
