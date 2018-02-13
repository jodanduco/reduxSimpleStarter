import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Components
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
const API_YOUTUBE_KEY = 'AIzaSyDd27p4CsTb2bnC5A8kMtOeiCyrKijYSsA';

// App component as class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // Use youtube-api-search component
    const configuration = {
      key: API_YOUTUBE_KEY,
      term,
    };
    const response = (videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0],
      });
    };
    YTSearch(
      configuration,
      response,
    );
  }

  render() {
    // Delay videoSearch call
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return(
      <div>
        <SearchBar 
          onSearchTermChange={videoSearch}
        />
        <VideoDetail 
          video={this.state.selectedVideo}
        />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} 
        />
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
