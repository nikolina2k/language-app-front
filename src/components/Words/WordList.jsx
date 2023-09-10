import React, { useEffect, useState } from 'react';

const WordList = () => {
    const [uniqueWords, setUniqueWords] = useState([]);
    const [filter, setFilter] = useState('');
    const [filteredWords, setFilteredWords] = useState([]);
    const [selectedWord, setSelectedWord] = useState(null);
    const [translation, setTranslation] = useState(null);

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

    // Handle word block click
    const handleWordClick = async (word) => {
        if (word === selectedWord) {
            // If the same word is clicked again, clear the translation
            setSelectedWord(null);
            setTranslation(null);
        } else {
            try {
                const response = await fetch(`https://translate.tatar/translate?lang=1&text=${word}`);
                const data = await response.text();
                // Extract the content from the translation tag
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const translationContent = doc.querySelector('translation').textContent;

                setSelectedWord(word);
                setTranslation(translationContent);
            } catch (error) {
                console.error('Error fetching translation:', error);
                setSelectedWord(null);
                setTranslation(null);
            }
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Выученные слова</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Поиск слов..."
                    className="border border-gray-300 p-2 rounded-lg"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredWords.map((word, index) => (
                    <div
                        key={index}
                        className={`bg-white p-4 rounded-lg shadow-md cursor-pointer ${
                            word === selectedWord ? 'border-2 border-blue-500' : ''
                        }`}
                        onClick={() => handleWordClick(word)}
                    >
                        {word === selectedWord ? (
                            <div dangerouslySetInnerHTML={{ __html: translation }}></div>
                        ) : (
                            <p className="text-lg">{word}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WordList;
