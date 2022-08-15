// https://type.fit/api/quotes (API)
import "./App.css";
import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const randomQuote = data[Math.trunc(Math.random() * data.length)];
    console.log(randomQuote);

    setQuote(randomQuote);
  };

  return (
    <div className="container">
      <form className="quote-container">
        <blockquote>{quote.text}</blockquote>
        {quote.author ? <div>{quote.author}</div> : <div>Unknown</div>}
      </form>
      <button onClick={submitHandler} className="btn">
        Search For A Quote!
      </button>
    </div>
  );
}

export default App;
