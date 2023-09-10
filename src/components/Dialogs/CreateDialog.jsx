import React, { useState } from 'react';

const CreateDialog = ({ onSave, onBack }) => {
    const [question, setQuestion] = useState({
        content: '',
        options: [],
    });

    const [history, setHistory] = useState([]);
    const [optionsHistory, setOptionsHistory] = useState([]);

    const handleContentChange = (e) => {
        setQuestion({ ...question, content: e.target.value });
    };

    const handleOptionAdd = () => {
        const newOptions = [...question.options, { content: '', nextQuestion: null }];
        setQuestion({ ...question, options: newOptions });
    };

    const handleOptionContentChange = (index, e) => {
        const newOptions = [...question.options];
        newOptions[index].content = e.target.value;
        setQuestion({ ...question, options: newOptions });
    };

    const handleOptionDelete = (index) => {
        const newOptions = [...question.options];
        newOptions.splice(index, 1);
        setQuestion({ ...question, options: newOptions });
    };

    const handleOptionClick = (index) => {
        const nextQuestion = question.options[index].nextQuestion || { content: '', options: [] };

        // Store current question and options in history
        setHistory([...history, question]);
        setOptionsHistory([...optionsHistory, question.options]);

        setQuestion(nextQuestion);
    };

    const handleSave = () => {
        const dialogs = JSON.parse(localStorage.getItem('dialogs')) || [];
        dialogs.push(question);
        localStorage.setItem('dialogs', JSON.stringify(dialogs));
        onSave();
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4 mt-8">Создание диалога</h2>
            <div className="mb-4">
                <label className="block mb-2">Вопрос:</label>
                <textarea
                    value={question.content}
                    onChange={handleContentChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                />
            </div>
            <div className="mb-4">
                <button
                    onClick={handleOptionAdd}
                    className="bg-gray-500 mb-10 hover:bg-gray-700 text-white font-semibold py-2 px-3 rounded-full text-sm"
                >
                    Добавить вариант ответа
                </button>
            </div>
            <div className="mb-4">
                {question.options.map((option, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex items-center mb-2">
                            <input
                                type="text"
                                value={option.content}
                                onChange={(e) => handleOptionContentChange(index, e)}
                                className="border border-gray-300 p-2 rounded-lg w-full mr-4"
                            />
                            <button
                                onClick={() => handleOptionClick(index)}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-2 rounded-full mr-2 text-sm"
                            >
                                Дополнить
                            </button>
                            <button
                                onClick={() => handleOptionDelete(index)}
                                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-full text-sm"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <button
                    onClick={handleSave}
                    className="bg-green-500 mt-10 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full text-sm"
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default CreateDialog;
