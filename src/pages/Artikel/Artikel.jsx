import React from "react";
import dataPortfolio from "../../data/dataArtikel";
import CardPortfolio from "../../components/Card Artikel/CardArtikel";
import "./Artikel.css";

const Artikel = () => {
  return (
    <>
      <section className="artikel">
        <article className="container">
          <h1>Artikel</h1>
          <div className="container-card">
            {dataPortfolio.map((item, index) => {
              return (
                <div key={item.id}>
                  <CardPortfolio img={item.img} link={item.link} desc={item.desc} name={item.name} />
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default Artikel;
