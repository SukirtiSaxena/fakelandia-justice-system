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
          <p>Welcome to the home of the Justice Department of Fakelandia.</p>
          <p>Here you can browse a list of recent misdemeanours committed by our citizens, or
            you can confess to your own misdemeanour.
          </p>

          <Footer />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
