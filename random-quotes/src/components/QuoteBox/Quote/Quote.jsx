import css from "./Style.module.css";
import clsx from "clsx";

const Quote = ({ text, author, isFading }) => {
  return (
    <div
      className={
        css.quote + " " + clsx(isFading ? css.hideQuote : css.showQuote)
      }
    >
      <p className={css.text}>'{text}'</p>
      <p className={css.author}>— {author}</p>
    </div>
  );
};

export default Quote;
