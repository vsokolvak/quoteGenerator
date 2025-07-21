import { useState } from "react";
import quotes from "../data/quotes";
import css from "./Style.module.css";

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

const QuoteBox = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className={css.box}>
      <p className={css.text}>“{quote.text}”</p>
      <p className={css.author}>— {quote.author}</p>
      <button className={css.button} onClick={handleNewQuote}>
        Нова цитата
      </button>
    </div>
  );
};

export default QuoteBox;
