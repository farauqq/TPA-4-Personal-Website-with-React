import React from "react";
import PropTypes from "prop-types";
import "./CardArtikel.css";

const CardArtikel = ({ img, link, name, desc }) => {
  return (
    <>
      <div className="cardArtikel">
        <img src={img} alt={name} width={320} height={170} />
        <h5>{name}</h5>
        <p>{desc}</p>
        <a href={link} target="_blank">
          Yuk baca artikelnya...
        </a>
      </div>
    </>
  );
};

CardArtikel.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardArtikel;
