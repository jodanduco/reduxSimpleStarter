import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_YOUTUBE_KEY = 'AIzaSyDd27p4CsTb2bnC5A8kMtOeiCyrKijYSsA';


// App component as class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch(
      {
        key: API_YOUTUBE_KEY,
        term: 'surfboards'
      },
      (videos) => {
        console.log('data', videos);
        this.setState({videos});
      }
    );
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Create a new component that generate HTML
// Functional component, no use state
/*const App =  () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}*/



const container = document.querySelector('.container');
//Insert component into the DOM
ReactDOM.render(<App />, container);
