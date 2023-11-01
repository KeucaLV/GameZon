import React, { useEffect, useState } from 'react';
import './AddTournament.css';
import { useNavigate } from 'react-router-dom';

function AddTournament() {
    const [description, setDescription] = useState('');
    const [player_count, setPlayer_count] = useState('');
    const [prize_pool, setPrize_pool] = useState('');
    const [entry_fee, setEntry_fee] = useState('');
    const [from_date, setFrom_date] = useState('');
    const [to_date, setTo_date] = useState('');
    const navigate = useNavigate();

    const [error, setError] = useState({
        desc_err: '',
        pc_err: '',
        pp_err: '',
        ef_err: '',
        fd_err: '',
        td_err: '',
    });

    const sendDataToPHP = async () => {
        try {
            let data = {
                description,
                player_count,
                prize_pool,
                entry_fee,
                from_date,
                to_date,
            };

            let response = await fetch(
                'http://localhost/gamezon/GameZon/grupa/selects/tournamentHandler.php',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            response = await response.json();

            if (response.status === 403) {
                setError(response);
            }

            if (response.status === 200) {
                navigate('/Tournaments');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="main font32">
            <label htmlFor="box">Add Tournament</label>
            <div className="tournament-box">
                <div className="input-fields">
                    <p>Game:</p>
                    <select className="inputs" defaultValue="Fortnite">
                        <option>Fortnite</option>
                        <option>Fall Guys</option>
                        <option>GTA V</option>
                        <option>Minecraft</option>
                    </select>
                    <p>Description:</p>
                    <textarea
                        type="text"
                        className="inputs"
                        placeholder="Epic Fortnite Battle Royale Duos Cup"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <p>Player count</p>
                    <input
                        type="number"
                        className="inputs"
                        placeholder="2500"
                        value={player_count}
                        onChange={(e) => setPlayer_count(e.target.value)}
                    />
                    <p>Prize Pool</p>
                    <input
                        type="number"
                        className="inputs"
                        placeholder="100"
                        value={prize_pool}
                        onChange={(e) => setPrize_pool(e.target.value)}
                    />
                    <p>Entry Fee</p>
                    <input
                        type="number"
                        className="inputs"
                        placeholder="2500"
                        value={entry_fee}
                        onChange={(e) => setEntry_fee(e.target.value)}
                    />

                    <p style={{ alignSelf: 'center' }}>Entries</p>
                    <div className="from-to">
                        <div className="from">
                            <p>From</p>
                            <input
                                type="date"
                                className="date"
                                placeholder="12/10/2023"
                                value={from_date}
                                onChange={(e) => setFrom_date(e.target.value)}
                            />
                        </div>
                        <div className="to">
                            <p>To</p>
                            <input
                                type="date"
                                className="date"
                                placeholder="17/10/2023"
                                value={to_date}
                                onChange={(e) => setTo_date(e.target.value)}
                            />
                        </div>
                    </div>
                    <p>Background Image (Optional)</p>
                    <input type="url" className="inputs" placeholder="Image URL" />
                    <button type="submit" onClick={sendDataToPHP}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTournament;
