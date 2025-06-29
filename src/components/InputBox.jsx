import React, { useState } from "react";

const InputBox = ({ onSend }) => {
  const [msg, setMsg] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSend(msg);
      setMsg("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
      />
      <button onClick={() => { onSend(msg); setMsg(""); }}>Send</button>
    </div>
  );
};

export default InputBox;
