'use client';

import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import './ChatBot.css';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {isOpen && (
        <div className="chatbot-window glass">
          <div className="chatbot-header">
            <div className="bot-avatar">
              <Bot size={20} />
            </div>
            <div>
              <h4>Agro-AI Assistant</h4>
              <span>Online for you</span>
            </div>
          </div>
          <div className="chatbot-messages">
            <div className="msg bot">
              How can I help you choose the right tools for your farm today?
            </div>
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Ask about our products..." />
            <button className="send-btn"><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
};
