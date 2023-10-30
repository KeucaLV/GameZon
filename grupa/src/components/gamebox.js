import React, { useState, useEffect } from "react";
import "./game.css";
import "./InfoBox.css";

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
        className={`box ${isOpen ? "open" : ""}`}
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
        <div className="infoBox">
          <div className="infoBoxHeader">
            <button
              className={`backBtnInfo ${isOpen ? "" : "open"}`}
              onClick={toggleDescription}
            >
              Back
            </button>
          </div>
          <div className="infoRow">
            <div className="infoColumnBox">
              <img className="InfoImageBox" src={imageUrl} alt={name} />
              <div className="infoRow">
                <div className="smallBoxCenter">
                  <h1>{name}</h1>
                  <h1 className="grey">Game</h1>
                </div>
                <div className="verticalLine"></div>
                <div className="smallBoxEnd">
                  <h1>13+</h1>
                  <h1 className="grey">Age rating</h1>
                </div>
              </div>
            </div>
            <div className="longVerticalLine"></div>
            <div className="infoColumnBox">
              <div className="titleBox">
                <h1>Description</h1>
                <div className="longHorizontalLine"></div>
              </div>
              <div className="descriptionBoxInfo">
                <h3>{description}</h3>
              </div>
              <div className="infoRow">
                <div className="smallBoxCenter">
                  <h1>free</h1>
                  <h1 className="grey">Price</h1>
                </div>
                <div className="verticalLine"></div>
                <div className="smallBoxCenter">
                  <h1>21/07/2017</h1>
                  <h1 className="grey">Release Date</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameBox;
