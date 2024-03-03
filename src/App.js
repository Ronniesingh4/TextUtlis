import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("dark mode is applied")
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.title = 'TextUtils - light Mode';
    }
  }

  return (

      <>
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
       
          <TextForm heading="Enter the text to analyze" />
         {/* <About />*/}
        </div>
    </>
  );
}

export default App;
