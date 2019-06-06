import React from 'react';
import './App.css';
import josh from './josh.jpeg'

function App() {
  return (
    <div className="App">
      <div className="square"> 
        <p>HI JOSH</p>
        <div className="circle"></div>
      </div>
      <div className='josh1'>
        <img src={josh}></img>
      </div>
      <div className='josh2'>
        <img src={josh}></img>
      </div>
      <div className='square2'>
        <input placeholder="focus" />
        <input placeholder="disabled" disabled="disabled" />
      </div>
      
    </div>
  );
}

export default App;
