import { useState } from "react";
import css from "./Style.module.css";
import { getRandomColor } from "../../utilits/getRandomColor";
import Quote from "./Quote/Quote";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import { getRandomQuote } from "../../utilits/getRandomQuote";

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
      <Quote text={quote.text} author={quote.author} isFading={isFading} />
      <ButtonBlock handleNewQuote={handleNewQuote} />
    </div>
  );
};

export default QuoteBox;
