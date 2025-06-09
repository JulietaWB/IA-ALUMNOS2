import React, { useState } from 'react';
import Chat from './Chat';
import { sendMessage } from './api';
import './App.css'; // Archivo CSS para estilos

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await sendMessage(input);
      const botMessage = { type: 'bot', text: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { type: 'bot', text: 'Error: Unable to get a response.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Chat messages={messages} />
      {loading && <div className="loading">Thinking...</div>}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default App;