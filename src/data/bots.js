export const bots = [
  {
    id: "codtech",
    name: "CodTech Bot",
    getReply: (msg) => {
      msg = msg.toLowerCase();
      if (msg.includes("project") || msg.includes("task"))
        return "You're working on a chatbot project! Keep building!";
      if (msg.includes("internship"))
        return "This internship is about learning React through projects.";
      return "I'm CodTech Bot! Ask me about your internship.";
    },
  },
  {
    id: "joke",
    name: "Joke Bot",
    getReply: () => {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐞",
        "What's a programmer’s favorite hangout place? The Foo Bar!",
        "Why did the developer go broke? Because he used up all his cache!"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    },
  },
  {
    id: "motivation",
    name: "Motivation Bot",
    getReply: () => {
      const quotes = [
        "Push yourself, because no one else is going to do it for you.",
        "You don’t have to be great to start, but you have to start to be great.",
        "Code. Debug. Repeat. Success will follow. 💪"
      ];
      return quotes[Math.floor(Math.random() * quotes.length)];
    },
  },
  {
    id: "info",
    name: "Info Bot",
    getReply: (msg) => {
      if (msg.includes("react")) return "React is a popular JavaScript library for building UIs.";
      if (msg.includes("html")) return "HTML is the skeleton of a webpage.";
      if (msg.includes("css")) return "CSS styles your webpage and makes it look pretty.";
      return "I'm Info Bot. Ask me about frontend technologies!";
    }
  }
];
