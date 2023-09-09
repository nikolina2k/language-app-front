import React, { useState } from 'react';
import {Link, useParams} from "react-router-dom";

const wordsData = [
    {
        categoryId: 1,
        words: [
            {
                word: 'Алма',
                images: [
                    'https://remontnichek.ru/wp-content/uploads/2028/03/sorta-grush-29.jpg',
                    'https://i.pinimg.com/originals/6a/bf/a9/6abfa90bd5ff616b000dfe8a8a3ceb55.jpg',
                    'https://w.forfun.com/fetch/a8/a88c709d1c6c613541eb97dd07b40012.jpeg',
                    'https://s1.1zoom.ru/big3/783/398395-sepik.jpg'
                ],
                correctImage: 2,
            }, {
                word: 'әфлисун',
                images: [
                    'https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kivi-2.jpg',
                    'https://i.pinimg.com/originals/6a/bf/a9/6abfa90bd5ff616b000dfe8a8a3ceb55.jpg',
                    'https://klike.net/uploads/posts/2022-08/1661955736_j-18.jpg',
                    'https://kartinkin.net/uploads/posts/2022-02/1645491000_12-kartinkin-net-p-apelsin-kartinki-15.jpg'
                ],
                correctImage: 3,
            }, {
                word: 'йөзем',
                images: [
                    'https://klike.net/uploads/posts/2022-08/1661955736_j-18.jpg',
                    'https://i.pinimg.com/originals/6a/bf/a9/6abfa90bd5ff616b000dfe8a8a3ceb55.jpg',
                    'https://w.forfun.com/fetch/a8/a88c709d1c6c613541eb97dd07b40012.jpeg',
                    'https://kartinkin.net/uploads/posts/2022-02/1645491000_12-kartinkin-net-p-apelsin-kartinki-15.jpg'
                ],
                correctImage: 0,
            },
        ]
    },

];

const Words= () => {
    const { categoryId } = useParams(); // Get the categoryId from the path parameter
    const categoryWords = wordsData.find((category) => category.categoryId === Number(categoryId));

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectWords, setIncorrectWords] = useState([]);
    const [result, setResult] = useState(null); // Track result
    const [showResults, setShowResults] = useState(false); // Track result

    if (!categoryWords) {
        return <div className="text-red-600">Category not found</div>;
    }

    const currentWord = categoryWords.words[currentWordIndex];

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleCheckAnswer = () => {
        if (selectedImageIndex === currentWord.correctImage) {
            setCorrectAnswers(correctAnswers + 1);
            setResult('Верно!'); // Set the result to 'Correct'
        } else {
            setIncorrectWords([...incorrectWords, currentWord.word]);
            setResult('Ошибся :('); // Set the result to 'Incorrect'
        }
    };

    const handleNextWord = () => {
        console.log("Index: "+currentWordIndex + " total: "+ categoryWords.words.length)
        if (currentWordIndex + 1 < categoryWords.words.length) {
            setCurrentWordIndex(currentWordIndex + 1);
            setSelectedImageIndex(null);
            setResult(null); // Reset the result
        } else {
            // If it's the last word, show results
            setShowResults(true);
        }
    };

    const totalWords = categoryWords.words.length;

    function handleShowResults() {
        setShowResults(true);
    }

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            {currentWordIndex < totalWords && !showResults ? (
                <>
                    <h2 className="text-2xl font-semibold mb-4">{currentWord.word}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {currentWord.images.map((image, index) => (
                            <div
                                key={index}
                                className={`bg-white p-4 rounded-lg shadow-md cursor-pointer ${
                                    selectedImageIndex === index ? 'border-2 border-blue-500' : ''
                                } ${
                                    result === 'Верно!' && index === currentWord.correctImage
                                        ? 'border-2 border-green-500'
                                        : ''
                                } ${
                                    result === 'Ошибся :(' && index === selectedImageIndex
                                        ? 'border-2 border-red-500'
                                        : ''
                                }`}
                                onClick={() => handleImageClick(index)}
                            >
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="w-36 h-36 object-cover rounded-full mx-auto mb-2"
                                />
                                <p className="text-center text-gray-600">{`Image ${index + 1}`}</p>
                            </div>
                        ))}
                    </div>
                    {!result && selectedImageIndex !== null && (
                        <div className="mt-4">
                            <button
                                onClick={handleCheckAnswer}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                            >
                                Check Answer
                            </button>
                        </div>
                    )}
                    {result && (
                        <div className="mt-4">
                            <p
                                className={`text-lg font-semibold ${
                                    result === 'Correct' ? 'text-green-500' : 'text-red-500'
                                }`}
                            >
                                {result}
                            </p>
                            {currentWordIndex + 1 < totalWords ? (
                                <button
                                    onClick={handleNextWord}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                                >
                                    Next Word
                                </button>
                            ) : (
                                <button
                                    onClick={handleShowResults}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                                >
                                    Show Results
                                </button>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Итог теста:</h3>
                    <p className="text-green-500 font-semibold">{`Правильных ответов: ${correctAnswers} / ${totalWords}`}</p>
                    {incorrectWords.length > 0 && (
                        <div>
                            <h3 className="text-red-500 font-semibold">Ошибся в словах:</h3>
                            <ul className="list-disc list-inside">
                                {incorrectWords.map((word, index) => (
                                    <li key={index}>{word}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <Link
                        to="/word"
                        className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                    >
                        Вернуться обратно
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Words;
