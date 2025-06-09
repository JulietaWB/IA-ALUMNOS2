import React from 'react';
import './Chat.css'; // Archivo CSS para estilos

const Chat = ({ messages }) => {
  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.type}`}>
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Chat;