import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);

      const computerMessage = {
        id: 'computer',
        text: 'Hello, how can I help you?',
      };

      setMessages((prevMessages) => [...prevMessages, computerMessage]);
    }, 1500);

    return () => clearTimeout(typingTimer);
  }, []);

  const handleOptionClick = (optionText) => {
    // Display the user's selected option as a message
    const userMessage = {
      id: 'user',
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
        id: 'computer',
        text: 'Thank you for choosing: ' + optionText + '. How can I assist you further?',
      };

      // Add the computer's message to the existing messages
      setMessages((prevMessages) => [...prevMessages, computerMessage]);

      // Show options again
      setOptionsVisible(true);
    }, 1500);

    // Hide options temporarily
    setOptionsVisible(false);
  };

  console.log(messages);

  return (
    <div className="bg-gray-200 p-4 h-96">
      <h1>{selectedItem.title}</h1>
      {/* Render chat messages */}
      <div className="mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.id === 'computer' ? 'text-left' : 'text-right'} mb-2`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Render typing indicator */}
      {isTyping && <div className="text-left animate-pulse">...</div>}

      {/* Render user options */}
      {optionsVisible && (
        <div className="grid grid-cols-3 gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => handleOptionClick('Option 1')}
          >
            Option 1
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => handleOptionClick('Option 2')}
          >
            Option 2
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => handleOptionClick('Option 3')}
          >
            Option 3
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
