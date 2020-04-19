import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    );
  }
}

export default App;
