import { useState } from "react";
import css from "./Style.module.css";
import { getRandomColor } from "../../utilits/getRandomColor";
import { toast } from "react-toastify";
import Quote from "./Quote/Quote";
import ButtonBlock from "./ButtonBlock/ButtonBlock";
import { fetchQuote } from "../../utilits/getRandomQuote";

// const getRandomQuote = () => {
//   const index = Math.floor(Math.random() * quotes.length);
//   return quotes[index];
// };

const QuoteBox = () => {
  const [quote, setQuote] = useState({});
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [isFading, setIsFading] = useState(false);

  const getRandomQuote = async () => {
    try {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleNewQuote = () => {
    setIsFading(true)

    setTimeout(() => {
      setIsFading(false);
      getRandomQuote();
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
      <Quote text={quote.text} author={quote.author} isFading={isFading} />
      <ButtonBlock handleCopy={handleCopy} handleNewQuote={handleNewQuote} />
    </div>
  );
};

export default QuoteBox;
