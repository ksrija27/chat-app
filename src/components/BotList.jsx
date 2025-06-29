import React from "react";

const BotList = ({ bots, selectedBot, setSelectedBot }) => {
  return (
    <div className="bot-list">
      {bots.map((bot) => (
        <div
          key={bot.id}
          className={`bot-item ${selectedBot?.id === bot.id ? "active" : ""}`}
          onClick={() => setSelectedBot(bot)}
        >
          {bot.emoji} {bot.name}
        </div>
      ))}
    </div>
  );
};

export default BotList;
