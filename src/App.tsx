import React, { useState } from 'react';
import './App.css';
import TextBox from './components/TextBox/TextBox';
import KeyPad from './components/KeyPad/KeyPad';
import CalciContex from './context/CalciContex';

function App() {
  const [stored, setStored] = useState<string | null>(null);
  const [current, setCurrent] = useState<string>("");

  return (
    <div className="App">
      <CalciContex.Provider value={{ stored, setStored, current, setCurrent }}>
        <div className="container my-5">
          <TextBox />
          <KeyPad />
        </div>
      </CalciContex.Provider>

    </div>
  );
}

export default App;
