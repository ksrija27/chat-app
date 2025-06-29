import React from "react";

const ChatBox = ({ selectedBot, messages, onSend, input, setInput }) => {
  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            <strong>{msg.from === "user" ? "You" : selectedBot.name}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder={`Talk to ${selectedBot.name}...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
        />
        <button onClick={onSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
