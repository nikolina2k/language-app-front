import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import axios from 'axios';
import { unescape } from 'html-entities';

import items from "./Items";

const ChatRoom = () => {
  // Use the useParams hook to get the item ID from the URL
  const { id } = useParams();

  async function translateWord(inputWord, translationDirection) {
    try {
      const response = await axios.get(
        translationDirection === 'tat2rus'
          ? `https://translate.tatar/translate?lang=1&text=${encodeURIComponent(inputWord)}`
          : `https://translate.tatar/translate?lang=0&text=${encodeURIComponent(inputWord)}`
      );
  
      const parsedText = unescape(response.data);
      return parsedText;
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  }

  async function translateExample() {
    try {
      const translatedText = await translateWord('example', 'tat2rus');
      console.log('Translated Text:', translatedText);
    } catch (error) {
      console.error('Translation error:', error);
    }
  }
  
  translateExample();
  

  // Find the item based on the item ID from the URL
  const selectedItem = items.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [optionsVisible, setOptionsVisible] = useState(true);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);

      const computerMessage = {
        id: "computer",
        text: "Hello, how can I help you?",
      };

      setMessages((prevMessages) => [...prevMessages, computerMessage]);
    }, 2000);

    return () => clearTimeout(typingTimer);
  }, []);

  const handleOptionClick = (optionText) => {
    // Display the user's selected option as a message
    const userMessage = {
      id: "user",
      text: optionText,
    };

    // Add the user's message to the existing messages
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate computer typing
    setIsTyping(true);

    // Simulate a delay before the computer responds
    setTimeout(() => {
      setIsTyping(false);

      // Simulate computer's response
      const computerMessage = {
        id: "computer",
        text:
          "Thank you for choosing: " +
          optionText +
          ". How can I assist you further? asdjajshjd hjakshd hashdjk hjkash djhasj hdkjash dkjhajks",
      };

      // Add the computer's message to the existing messages
      setMessages((prevMessages) => [...prevMessages, computerMessage]);

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
              className={`mb-2 ${
                message.id === "computer" ? "text-left" : "text-right"
              }`}
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
                  <div className="flex items-center">
                    <div className="bg-blue-200 p-2 rounded-lg max-w-[70%] break-words">
                      {message.text}
                    </div>
                    <span role="img" aria-label="Human Icon" className="ml-2">
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
            <button
              className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleOptionClick("Option 1")}
            >
              Option 1
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleOptionClick("Option 2")}
            >
              Option 2
            </button>
            <button
              className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleOptionClick("Option 3")}
            >
              Option 3
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
