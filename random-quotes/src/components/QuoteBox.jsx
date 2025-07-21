import { useState } from "react";
import quotes from "../data/quotes";
import css from "./Style.module.css";
import clsx from "clsx";
import { getRandomColor } from "../utilits/getRandomColor";

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
};

const QuoteBox = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [isFading, setIsFading] = useState(false);

  const handleNewQuote = () => {
    setIsFading(true)

    setTimeout(() => {
      setIsFading(false);
      setQuote(getRandomQuote());
      setBgColor(getRandomColor());
    }, 200);
  };

  return (
    <div className={css.box} style={{ backgroundColor: bgColor }}>
      <div className={css.quote + " " + clsx(isFading ? css.hideQuote : css.showQuote)}>
        <p className={css.text}>'{quote.text}'</p>
        <p className={css.author}>— {quote.author}</p>
      </div>
      <button className={css.button} onClick={handleNewQuote}>
        Нова цитата
      </button>
    </div>
  );
};

export default QuoteBox;
