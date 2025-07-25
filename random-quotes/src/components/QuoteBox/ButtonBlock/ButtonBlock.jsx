import css from "./Style.module.css";

const ButtonBlock = ({handleCopy, handleNewQuote}) => {

  const handleQuote = () => {handleNewQuote()}
  const copy = () => {handleCopy()}

  return (
    <>
      <button className={css.button} onClick={handleQuote}>
        Нова цитата
      </button>

      <button className={css.copyButton} onClick={copy}>
        Скопіювати
      </button>
    </>
  );
};

export default ButtonBlock;
