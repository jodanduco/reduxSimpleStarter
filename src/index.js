import React from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchBar from './components/SearchBar';

const API_YOUTUBE_KEY = 'AIzaSyDsFiWaI0OujvF7D4WlKYsRO9Oh_f70Eho';
//Create a new component that generate HTML

const App =  () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

const container = document.querySelector('.container');
//Insert component into the DOM
ReactDOM.render(<App />, container);
