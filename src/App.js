import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './Router/Router';
import React, { useState, useEffect } from "react";
import generateMisdemeanours from './Docs/generate_misdemeanours';
export const misdemeanourContext = React.createContext([{}, () => { }]);

function App() {

  const [misdemeanour, setMisdemeanour] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await generateMisdemeanours();
    setMisdemeanour(response);
  }

  return (
    <misdemeanourContext.Provider value={[misdemeanour, setMisdemeanour]}>
      <div >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </misdemeanourContext.Provider>
  );
}

export default App;
