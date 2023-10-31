import React, { useState } from 'react';
import SearchResults from "./searchResult";


function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost/datubazes/selects/search.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `searchTerm=${encodeURIComponent(searchTerm)}`,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Received data from PHP:', data); // Check if data is received
            setResults(data);

        } catch (error) {
            console.error('Error:', error);

        }

        console.log(`Sending searchTerm: ${searchTerm}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search for games..."
                />
                <button type="submit">Search</button>
            </form>
            <SearchResults results={results} />
        </>
    );
}

export default SearchBar;
