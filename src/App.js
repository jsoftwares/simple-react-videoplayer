import React from 'react'
import youtube from '../src/apis/youtube';

import SearchBar from './SearchBar';
import VideoList from "./VideoList";

class App extends React.Component {

  state = { videos: []};

  onVideoSearch = async search => {
    const response = await youtube.get('/search', {
      params: {
        q: search
      }
    });

    this.setState({ videos: response.data.items});
    console.log(response.data.items);
  };

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onVideoSearch} />
        <VideoList videos={this.state.videos } />
      </div>
    );
  }
  
}

export default App;
