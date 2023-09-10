import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import storyData from "./ExampleDialog";

import items from "./Items";

const ChatRoom = () => {
  // Use the useParams hook to get the item ID from the URL
  const { id } = useParams();

  // Find the item based on the item ID from the URL
  const selectedItem = items.find((item) => item.id === id);

  if (id!=11) {

    return <div className="mt-4">История пишется. Еще не готова!</div>;
  }

  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [optionsVisible, setOptionsVisible] = useState(true);
  const [currentScene, setCurrentScene] = useState("park"); // Initialize with the initial scene

  const getSceneData = (scene) => storyData[scene];

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);

      const computerMessage = {
        id: "computer",
        text: getSceneData(currentScene).dialog,
      };

      setMessages((prevMessages) => [...prevMessages, computerMessage]);
    }, 1500);

    return () => clearTimeout(typingTimer);
  }, []);


  const handleOptionClick = (optionText) => {
    // Get the current scene data
    const currentSceneData = getSceneData(currentScene);

    // Display the user's selected option as a message
    const userMessage = {
      id: "user",
      text: optionText,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsTyping(true);

    // Simulate a delay before the computer responds
    setTimeout(() => {
      setIsTyping(false);

      if (currentSceneData.options) {
        // Find the selected option
        const selectedOption = currentSceneData.options.find(
          (option) => option.text === optionText
        );

        if (selectedOption && selectedOption.result) {
          // Navigate to the next scene based on the selected option
          setCurrentScene(selectedOption.result);
          if (currentScene && !currentScene.options){
            const currentProgress = localStorage.getItem('progress');
            const currentProgressNumber = parseInt(currentProgress, 10);
            const randomIncrement = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            const newProgress = currentProgressNumber + randomIncrement;
            localStorage.setItem('progress', newProgress.toString());

          }

          // // Simulate computer's response
          const computerMessage = {
            id: "computer",
            text: getSceneData(selectedOption.result).dialog,
          };

          // Add the computer's message to the existing messages
          setMessages((prevMessages) => [...prevMessages, computerMessage]);
        }
      }
      

      // Show options again
      setOptionsVisible(true);
    }, 1500);

    // Hide options temporarily
    setOptionsVisible(false);

  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

    const [translationText, setTranslationText] = useState(null);

  const fetchTranslation = async (text) => {
    try {
      const response = await fetch(`https://translate.tatar/translate?lang=1&text=${text}`);
      const html = await response.text();
      console.log(html)
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const translationElement = doc.querySelector('translation');

      if (translationElement) {
        setTranslationText(translationElement.textContent);
      } else {
        setTranslationText(html); // Use the original text if no translation element found
      }
    } catch (error) {
      setTranslationText(text); // Use the original text if no translation element found
      console.error('Error fetching translation:', error);
    }
  };

  const handleMouseOver = (text) => {
    fetchTranslation(text);
  };

  return (
      <div className="h-full p-20 flex flex-col items-center justify-center mt-6">
      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow-md border">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          {selectedItem.title} 
          <div>(Очрашу)</div>
        </h1>
        {translationText && (
            <div className="bg-blue-100 p-2 rounded-md mb-4 text-gray-700">
              Перевод: {translationText}
            </div>
        )}
        <div
          className="bg-gray-300 p-2 rounded-md mb-4"
          style={{ minHeight: "400px", maxHeight: "400px", overflowY: "auto" }}
        >

          {messages.map((message, index) => (
              <div
                  key={index}
                  className={`mb-2`}
                  onMouseOver={() => handleMouseOver(message.text)}
              >
              <div
                className={`flex items-center ${
                  message.id === "computer" ? "justify-start" : "justify-end"
                }`}
              >
                {message.id === "computer" ? (
                  <div className="flex items-center">
                    <span
                      role="img"
                      aria-label="Computer Icon"
                      className="mr-2"
                    >
                      🖥️
                    </span>
                    <div className="bg-white p-2 rounded-lg max-w-[70%] break-words">
                      {message.text}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                    <div className="bg-blue-200 p-2 rounded-lg max-w-[70%] break-words">
                      {message.text}
                    </div>
                    <span role="img"
                          aria-label="Human Icon"
                          className="ml-2">
                      👤
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {isTyping && (
          <div className="text-left item-center mb-2">
            🖥️
            <span className="p-2 rounded-lg bg-white ml-2">
              <span className="inline-block animate-bounce rounded-full text-sm">
                .
              </span>
              <span className="inline-block animate-bounce rounded-full text-sm animate-delay-500">
                .
              </span>
              <span className="inline-block animate-bounce rounded-full text-sm animate-delay-1000">
                .
              </span>
            </span>
          </div>
        )}

        {/* Render user options */}
        {!isTyping && optionsVisible && (
          <div className="grid grid-cols-1 gap-4">
            {getSceneData(currentScene).options && getSceneData(currentScene).options.map((option) => (
              <button
                key={option.text}
                className="bg-blue-400 hover:bg-blue-600 text-sm text-white p-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleOptionClick(option.text)}
                onMouseOver={() => handleMouseOver(option.text)}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
