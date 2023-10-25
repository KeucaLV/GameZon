import React, { useState, useEffect } from 'react';
import './game.css';
import GameBox from './gamebox.js';


function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/datubazes/selects/index.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="main">
      <h1 className="recomend-title">Recommended By Us!</h1>
      <div className="flex-row">
        {data.map(item => (
          <GameBox
            key={item.id}
            name={item.name}
            imageUrl={item.img}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Data;
