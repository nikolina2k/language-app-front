import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import storyData from "./ExampleDialog";

import items from "./Items";

const ChatRoom = () => {
  // Use the useParams hook to get the item ID from the URL
  const { id } = useParams();

  // Find the item based on the item ID from the URL
  const selectedItem = items.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>Item not found</div>;
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
    }, 2000);

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

  return (
    <div className="h-full p-20 flex flex-col items-center justify-center mt-10">
      <div className="w-full max-w-xl bg-white p-4 rounded-lg shadow-md border">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          {selectedItem.title}
        </h1>

        <div
          className="bg-gray-300 p-2 rounded-md mb-4"
          style={{ minHeight: "400px", maxHeight: "400px", overflowY: "auto" }}
        >
          {/* Render chat messages */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2`}
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
          <div className="grid grid-cols-3 gap-4">
            {getSceneData(currentScene).options && getSceneData(currentScene).options.map((option) => (
              <button
                key={option.text}
                className="bg-blue-400 hover:bg-blue-600 text-white p-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleOptionClick(option.text)}
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
