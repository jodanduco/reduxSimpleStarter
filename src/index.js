import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component that generate HTML

const App =  () => {
  return <div>Hi !</div>;
}

const container = document.querySelector('.container');
//Insert component into the DOM
ReactDOM.render(<App />, container);
