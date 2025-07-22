import './App.css'
import QuoteBox from './components/QuoteBox'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <QuoteBox />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App
