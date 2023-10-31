import React, { useState, useEffect } from "react";
import "./game.css";
import {findAllByDisplayValue} from "@testing-library/react";

function GameBox() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/GitHub/GameZon/grupa/selects/index.php")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div>
        <div className="container">
            {data.map((item) => (
                <div key={item.id} className="box">
                    <div className="boxHeader">
                        <div className="line"></div>
                    </div>
                    <div className="imageBox">
                        <img className="gameImage" src={item.img} alt={item.name} />
                    </div>
                    <h1 className="gameName">{item.name}</h1>
                </div>
            ))}
        </div>
        <div>
            <button className="addTournament">Add Tournament</button>
        </div>
        </div>
    );
}

export default GameBox;
