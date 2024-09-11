import React, { useState } from 'react';
import './App.css';
import TextBox from './components/TextBox/TextBox';
import KeyPad from './components/KeyPad/KeyPad';
import CalciContex from './context/CalciContex';
import Alert from './components/Alert/Alert';

function App() {
  const [stored, setStored] = useState<string | null>(null);
  const [current, setCurrent] = useState<string>("");
  const [alerter, setAlerter] = useState<boolean>(false);

  const handleCloseAlert = () => {
    setAlerter(false);
  };

  return (
    <div className="App">
      <CalciContex.Provider value={{ alerter, setAlerter, stored, setStored, current, setCurrent }}>
        <div className="container my-5">
          <TextBox />
          <KeyPad />
        </div>
      </CalciContex.Provider>
      {alerter && <Alert onClose={handleCloseAlert} />}
    </div>
  );
}

export default App;
