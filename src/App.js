import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './Router/Router';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div >
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
