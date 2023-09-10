import {useState} from "react";
import {Link, useParams} from "react-router-dom";
import apple from '../../assets/word/fruits/apple.jpeg';
import banana from '../../assets/word/fruits/banana.jpg';
import kiwi from '../../assets/word/fruits/kiwi.jpg';
import limon from '../../assets/word/fruits/limon.jpg';
import orange from '../../assets/word/fruits/orange.jpg';
import pears from '../../assets/word/fruits/pears.jpg';
import vinograd from '../../assets/word/fruits/vinograd.jpg';
import azu_iz_govyadinny from '../../assets/word/foods/azu_iz_govyadinny.jpg';
import chack_chack from '../../assets/word/foods/chak-chak.jpg';
import echpochmak  from '../../assets/word/foods/echpochmak.jpg';
import elesh from '../../assets/word/foods/elesh.jpg';
import kysybyy from '../../assets/word/foods/kystybyy.jpg';
import zur_balish from '../../assets/word/foods/zur-balish.jpg';
import borsch from '../../assets/word/foods/borsch.jpg';
import cheburek  from '../../assets/word/foods/cheburek.jpg';
import manti from '../../assets/word/foods/manti.jpg';
import plov from '../../assets/word/foods/plov.jpg';

const wordsData = [
    {
        categoryId: 1,
        words: [
            {
                word: 'Алма',
                images: [
                    banana,
                    orange,
                    apple,
                    kiwi,
                ],
                correctImage: 2,
            }, {
                word: 'әфлисун',
                images: [
                    kiwi,
                    banana,
                    vinograd,
                    orange,
                ],
                correctImage: 3,
            }, {
                word: 'йөзем',
                images: [
                    vinograd,
                    orange,
                    pears,
                    limon,
                ],
                correctImage: 0,
            },
        ]
    },
    {
        categoryId: 0,
        words: [
            {
                word: 'Эчпочмак',
                images: [
                    echpochmak,
                    cheburek,
                    manti,
                    kysybyy
                ],
                correctImage: 0,
            }, {
                word: 'Сыер итеннән Азу',
                images: [
                    plov,
                    manti,
                    borsch,
                    azu_iz_govyadinny,
                ],
                correctImage: 3,
            }, {
                word: 'Кыстыбый',
                images: [
                    kysybyy,
                    chack_chack,
                    zur_balish,
                    echpochmak
                ],
                correctImage: 0,
            }, {
                word: 'Зур-бәләш',
                images: [
                    echpochmak,
                    borsch,
                    zur_balish,
                    manti
                ],
                correctImage: 2,
            }, {
                word: 'Элеш',
                images: [
                    cheburek,
                    elesh,
                    kysybyy,
                    chack_chack
                ],
                correctImage: 1,
            },{
                word: 'чәк-чәк',
                images: [
                    chack_chack,
                    elesh,
                    kysybyy,
                    manti
                ],
                correctImage: 0,
            },
        ]
    },

];

const Words = () => {
    const {categoryId} = useParams(); // Get the categoryId from the path parameter
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
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
                                    className="w-full rounded-lg h-full object-cover mx-auto mb-2"
                                />
                            </div>
                        ))}
                    </div>
                    {!result && selectedImageIndex !== null && (
                        <div className="mt-4">
                            <button
                                onClick={handleCheckAnswer}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                            >
                                Проверить ответ
                            </button>
                        </div>
                    )}
                    {result && (
                        <div className="mt-4">
                            <p
                                className={`text-lg font-semibold ${
                                    result === 'Верно!' ? 'text-green-500' : 'text-red-500'
                                }`}
                            >
                                {result}
                            </p>
                            {currentWordIndex + 1 < totalWords ? (
                                <button
                                    onClick={handleNextWord}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                                >
                                    Следующее слово
                                </button>
                            ) : (
                                <button
                                    onClick={handleShowResults}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                                >
                                    Показать результаты
                                </button>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <div className="mt-20">
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
                        className="mt-4 inline-block bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded-full"
                    >
                        Вернуться обратно
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Words;
