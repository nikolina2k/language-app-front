import React, { useEffect, useState } from 'react';

const WordList = () => {
    const [uniqueWords, setUniqueWords] = useState([]);
    const [filter, setFilter] = useState('');
    const [filteredWords, setFilteredWords] = useState([]);

    useEffect(() => {
        // Retrieve the list of words from localStorage
        const wordsFromLocalStorage = JSON.parse(localStorage.getItem('words')) || [];

        // Remove duplicates by converting the array to a Set and then back to an array
        const uniqueWordsArray = [...new Set(wordsFromLocalStorage)];

        // Set the unique words in state
        setUniqueWords(uniqueWordsArray);
        setFilteredWords(uniqueWordsArray); // Initialize filtered words with all unique words
    }, []);

    // Handle filter input changes
    const handleFilterChange = (e) => {
        const searchTerm = e.target.value;
        setFilter(searchTerm);

        // Filter words based on the search term
        const filtered = uniqueWords.filter((word) =>
            word.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredWords(filtered);
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Выученные слова</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Искать слова..."
                    className="border border-gray-300 p-2 rounded-lg"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredWords.map((word, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md"
                    >
                        <p className="text-lg">{word}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WordList;
