import React from "react";
import Personalweb from "../../assets/Personalweb.png";
import Bmi from "../../assets/Bmi.png";
import Film from "../../assets/film.png";
import todo from "../../assets/todo.png";
import "./CardPortofolio.css";

const Portofolio = () => {
  return (
    <>
      <div className="skill">
        <h1>Portofolio</h1>
      </div>
      <section className="project">
        <div className="card">
          <div className="card-img">
            <img src={Personalweb} alt="TPA1" width="580" height="220" />
            <div className="card-text" align="center">
              <a href="https://personal-website-farauq.netlify.app/">Personal Website</a>
            </div>
          </div>
          <div className="card-img">
            <img src={Bmi} alt="TPA2" width="580" height="220" />
            <div className="card-text" align="center">
              <a href="https://bmi-calculator-farauq.netlify.app/">BMI Calculator</a>
            </div>
          </div>
          <div className="card-img">
            <img src={Film} alt="TPA3" width="580" height="220" />
            <div className="card-text" align="center">
              <a href="https://movie-app-tmdb-farauq.netlify.app/">Movie App with TMDB API</a>
            </div>
          </div>
          <div className="card-img">
            <img src={todo} alt="" width="580" height="220" />
            <div className="card-text" align="center">
              <a href="https://tpa-5-todo-app.netlify.app/">ToDo List App</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portofolio;
