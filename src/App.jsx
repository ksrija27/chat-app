import React, { useState, useEffect } from "react";
import BotList from "./components/BotList";
import ChatBox from "./components/ChatBox";
import "./App.css";

const bots = [
  {id:"nothing",name:"nothing"},
  { id: "motivation", name: "Motivation Bot", emoji: "💪" },
  { id: "info", name: "Info Bot", emoji: "🧠" },
  { id: "joke", name: "Joke Bot", emoji: "😂" },
  { id: "codtech", name: "CodTech Bot", emoji: "🤖" },
];

const getBotReply = (id, text) => {
  const lower = text.toLowerCase();
  if (lower.includes("hello") || lower.includes("hi")) return "Hi! How can I assist you?";

  if (id === "joke") return "Why do coders prefer dark mode? Because light attracts bugs! 😂";
  if (id === "motivation") return "Code. Debug. Repeat. Success will follow. 💪";
  if (id === "info") return "Ask me about HTML, CSS, JavaScript, or React!";
  if (id === "codtech") {
    if (lower.includes("project") || lower.includes("task")) return "You're building a chat interface. Stay focused!";
    return "I'm CodTech Bot, your internship buddy!";
  }
  return "I'm still learning! Try asking something else.";
};

function App() {
  const [selectedBot, setSelectedBot] = useState(null);
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleSend = () => {
    if (!input.trim() || !selectedBot) return;
    const text = input.trim();
    const newMsg = { from: "user", text, type: "sent" };
    const botReply = { from: "bot", text: getBotReply(selectedBot.id, text), type: "received" };

    setMessages((prev) => ({
      ...prev,
      [selectedBot.id]: [...(prev[selectedBot.id] || []), newMsg, botReply],
    }));

    setInput("");
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <div className="chat-header">
        CodTech Chat
        <button className="toggle-theme" onClick={toggleTheme}>
          🌗 Theme
        </button>
      </div>

      <div className="chat-body">
        <BotList bots={bots} selectedBot={selectedBot} setSelectedBot={setSelectedBot} />

        <div className="chat-box-wrapper">
          {selectedBot ? (
            <ChatBox
              selectedBot={selectedBot}
              messages={messages[selectedBot.id] || []}
              onSend={handleSend}
              input={input}
              setInput={setInput}
            />
          ) : (
            <div className="placeholder">
              <h2>👋 Welcome to CodTech Chat!</h2>
              <p>Select a bot from the left to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
