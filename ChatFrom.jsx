import { useRef } from "react";

const ChatFrom = ({chatHistory, setChatHistory, generateBotResponse}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) =>
{
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
 setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

  setTimeout(() =>{
 setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
 generateBotResponse([...chatHistory, { role: "user", text: `using the details provided above, please address this query: ${userMessage}` }]);
  },600);
  };
  return (
    <form action="#" className="chat-from" onSubmit={handleFormSubmit}>
      <input
        type="text" placeholder="Message..."className="message-input" required ref={inputRef}/>
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatFrom;