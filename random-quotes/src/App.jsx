import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuoteBox from './components/QuoteBox/QuoteBox';

function App() {

  return (
    <>
      <QuoteBox />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App
