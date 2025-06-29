export const getBotReply = (input) => {
  input = input.toLowerCase();
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! 👋 Welcome to CodTech Chat. How can I assist you today?";
  } else if (input.includes("how are you")) {
    return "I'm just code, but I'm happy to chat! 😊";
  } else if (input.includes("task") || input.includes("project")) {
    return "You're building a React chatbot. Keep it clean and responsive!";
  } else if (input.includes("bye")) {
    return "Goodbye! 👋 Keep building and stay curious!";
  } else if (input.includes("joke")) {
    return "Why do programmers love dark mode? Because light attracts bugs! 🐞";
  } else {
    return "Hmm... I didn’t get that. Try asking about your project or internship.";
  }
};
