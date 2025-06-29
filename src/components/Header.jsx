import React from "react";

const Header = ({ toggleTheme }) => (
  <div className="chat-header">
    CodTech Chat
    <button className="toggle-theme" onClick={toggleTheme}>🌗 Theme</button>
  </div>
);

export default Header;
