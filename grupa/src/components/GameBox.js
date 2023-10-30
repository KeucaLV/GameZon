import React, { useState, useEffect } from "react";
import "./game.css";
import "./InfoBox.css";

function GameBox({ name, description, imageUrl }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isInVisible, setIsInVisible] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost/datubazes/selects/index.php")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

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

                {isOpen && (
                    <div className="description">
                        <h3>{description}</h3>
                    </div>
                )}
            </div>
        </>
    );
}

export default GameBox;