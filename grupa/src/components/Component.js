
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Component(){
    const GameSelectionPage = () => {
        const [games, setGames] = useState([]);
        const [selectedGame, setSelectedGame] = useState(null);
        const [events, setEvents] = useState([]);

        useEffect(() => {
            // Fetch games data from the API endpoint
            axios.get('http://localhost:8888/GitHub/GameZon/grupa/selects/index.php')
                .then(response => {
                    setGames(response.data);
                })
                .catch(error => {
                    console.error('Error fetching games:', error);
                });
        }, []);

        useEffect(() => {
            // Fetch events data for the selected game when selectedGame changes
            if (selectedGame) {
                axios.get(`/api/games/${selectedGame}/events`)
                    .then(response => {
                        setEvents(response.data);
                    })
                    .catch(error => {
                        console.error('Error fetching events:', error);
                    });
            }
        }, [selectedGame]);

        const handleGameSelect = gameId => {
            setSelectedGame(gameId);
        };

        return (
            <div>
                <h1>Game Selection</h1>
                <ul>
                    {games.map(game => (
                        <li key={game.id} onClick={() => handleGameSelect(game.id)}>
                            {game.name}
                        </li>
                    ))}
                </ul>
                {selectedGame && (
                    <div>
                        <h2>Events for Game {selectedGame}</h2>
                        <ul>
                            {events.map(event => (
                                <li key={event.id}>{event.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };


}

export default Component;