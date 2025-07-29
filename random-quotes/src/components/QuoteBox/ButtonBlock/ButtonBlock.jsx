import css from "./Style.module.css";

const ButtonBlock = ({handleNewQuote}) => {

  const handleQuote = () => {handleNewQuote()}

  return (
    <>
      <button className={css.button} onClick={handleQuote}>
        Нова цитата
      </button>
    </>
  );
};

export default ButtonBlock;
