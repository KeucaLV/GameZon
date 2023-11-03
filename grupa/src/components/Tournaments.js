import React from 'react';
import {Link} from "react-router-dom";

const Tournaments = () => {
    return (
        <div className="main">
            <Link to='/AddTournament' className = "addTournamentButton">
            <button type="submit" className = "add-t-button">
                Add
            </button>
            </Link>
        </div>
    );
};

export default Tournaments;