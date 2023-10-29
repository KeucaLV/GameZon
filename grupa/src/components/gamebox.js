import React, { useState, useEffect } from "react";
import InfoBox from "./InfoBox.js";
import "./game.css";

function GameBox({ name, description, imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isInVisible, setIsInVisible] = useState(true);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
    setIsInVisible(!setIsInVisible);
  };

  return (
    <>
      <div
        className={`box ${isOpen ? "" : "open"}`}
        onClick={toggleDescription}
      >
        <div className="boxHeader">
          <div className="line"></div>
        </div>
        <div className="imageBox">
          <img className="gameImage" src={imageUrl} alt={name} />
        </div>
        <h1 className="gameName">{name}</h1>
      </div>
      {isOpen && (
        <InfoBox name={name} imageUrl={imageUrl} description={description} />
        // <div className="description">
        //   <h4>{description}</h4>
        // </div>
      )}
    </>
  );
}

export default GameBox;
