import React, { useState, useEffect } from 'react';
import './game.css';

function GameBox({ name, description, imageUrl }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDescription = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`box ${isOpen ? 'open' : ''}`} onClick={toggleDescription}>
        <div className="boxHeader">
          <div className="line"></div>
        </div>
        <div className="imageBox">
          <img className="gameImage" src={imageUrl} alt={name} />
        </div>
        <h1 className="gameName">{name}</h1>
        {isOpen && (
          <div className="description">
            <h4>{description}</h4>
          </div>
        )}
      </div>
    );
  }

  export default GameBox;