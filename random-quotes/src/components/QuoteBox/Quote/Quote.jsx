import { toast } from "react-toastify";
import css from "./Style.module.css";
import clsx from "clsx";

const Quote = ({ text, author, isFading }) => {

  const handleCopy = () => {
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
      className={
        css.quote + " " + clsx(isFading ? css.hideQuote : css.showQuote)
      }
      onClick={handleCopy}
    >
      <p className={css.text}>'{text}'</p>
      <p className={css.author}>— {author}</p>
    </div>
  );
};

export default Quote;
