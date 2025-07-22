import { useState } from "react";
import quotes from "../data/quotes";
import css from "./Style.module.css";
import clsx from "clsx";
import { getRandomColor } from "../utilits/getRandomColor";
import { toast } from "react-toastify";

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

  const handleCopy = () => {
    const fullText = `"${quote.text}" — ${quote.author}`;
    navigator.clipboard
      .writeText(fullText)
      .then(() => {
        toast.success(`Цитату ${fullText} скопійовано 📋`);
      })
      .catch(() => {
        toast.error("Не вдалося скопіювати 😢");
      });
  };

  return (
    <div className={css.box} style={{ backgroundColor: bgColor }}>
      <div
        className={
          css.quote + " " + clsx(isFading ? css.hideQuote : css.showQuote)
        }
      >
        <p className={css.text}>'{quote.text}'</p>
        <p className={css.author}>— {quote.author}</p>
      </div>
      <button className={css.button} onClick={handleNewQuote}>
        Нова цитата
      </button>

      <button className={css.copyButton} onClick={handleCopy}>
        Скопіювати
      </button>

    </div>
  );
};

export default QuoteBox;
