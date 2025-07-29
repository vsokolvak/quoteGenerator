import { toast } from "react-toastify";
import css from "./Style.module.css";
import clsx from "clsx";
import { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Quote = ({ text, author, isFading }) => {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    
    setCopied(true)
    setTimeout(() => setCopied(false), 1000);

    const fullText = `"${text}" — ${author}`;
    
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
    <div
      className={clsx(
        isFading ? css.hideQuote : css.showQuote,
        css.quote,
        copied ? css.copied : ""
      )}
      onClick={handleCopy}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Click to copy!"
    >
      <Tooltip id="my-tooltip" />
      <p className={css.text}>'{text}'</p>
      <p className={css.author}>— {author}</p>
    </div>
  );
};

export default Quote;
