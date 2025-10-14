import React from "react";
import "./CardLocation.css";

const CardLocation = ({ name, description, image }) => {
  return (
    <div className="location-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardLocation;
