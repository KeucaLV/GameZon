import React, { useState, useEffect } from 'react';

function FetchAPI() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:8888/GitHub/GameZon/grupa/selects/index.php')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return { items, fetchData }; // Return items and fetchData function
}

export { FetchAPI };
