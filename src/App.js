import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import Confirm from './components/confirm';
function App() {
  const handleClick =(event) =>{
    setDisplay("block");
  }

  const [display, setDisplay] = useState("none");

  const confirm2Go = (value) => {

  }


  return (
    <div className="App">

    <div className="mybutton" onClick={handleClick}>

    </div>
    <div className="popup">
      <Confirm display={display} setDisplay={setDisplay} confirm2Go={confirm2Go}/>
    </div>
    </div>
  );
}

export default App;
