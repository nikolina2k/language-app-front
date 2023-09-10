import React, { useState } from 'react';

const CreateDialog = ({ onSave, onBack }) => {
    const [question, setQuestion] = useState({
        content: '',
        options: [],
    });

    const [history, setHistory] = useState([]); // Keep track of previous questions

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
        // Store current question in history
        setHistory([...history, question]);

        // Navigate to a new question for the clicked option (Recursion)
        const nextQuestion = question.options[index].nextQuestion || { content: '', options: [] };
        setQuestion(nextQuestion);
    };

    const handleBack = () => {
        // Retrieve previous question from history
        const prevQuestion = history.pop() || { content: '', options: [] };
        setQuestion(prevQuestion);
        setHistory([...history]); // Update history after removing the last element
    };

    const handleSave = () => {
        // Save to localStorage
        const dialogs = JSON.parse(localStorage.getItem('dialogs')) || [];
        dialogs.push(question);
        localStorage.setItem('dialogs', JSON.stringify(dialogs));

        // Trigger parent onSave callback
        onSave();
    };

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Create Dialog</h2>
            <div className="mb-4">
                <label className="block mb-2">Question Content:</label>
                <textarea
                    value={question.content}
                    onChange={handleContentChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                />
            </div>
            <div className="mb-4">
                <button
                    onClick={handleOptionAdd}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                >
                    Add Option
                </button>
            </div>
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
                            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full mr-2"
                        >
                            Edit Option
                        </button>
                        <button
                            onClick={() => handleOptionDelete(index)}
                            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full"
                        >
                            Delete Option
                        </button>
                    </div>
                </div>
            ))}
            <div className="mt-4">
                <button
                    onClick={handleBack}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full mr-2"
                >
                    Back
                </button>
                <button
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default CreateDialog;
