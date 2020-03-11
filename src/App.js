import React, { Component } from 'react';
import VideoList from './components/videoList/VideoList';
import Video from './components/video/Video';
import SideMenu from './components/sideMenu/SideMenu';
import Header from './components/header/Header';
import yotube from './api/yotube';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WatchVideo from './components/watchVideo/WatchVideo';

export default class App extends Component {
  // initializing state
  state = {
    videos: [],
    firstVideo: {
      id: { videoId: "0" },
      snippet: {
        title: "a",
        description: "b",
        thumbnails: { default: {}, medium: {}, high: {} }
      }
    },
    watchOn: false,
    clickedVideo: null
  };

  // calling asnyc API call with the 'searchTerm' from 'search component
  handleSubmit = async searchTerm => {
    const response = await yotube.get("search", {
      params: {
        part: "snippet",
        maxResults: 36,
        key: `AIzaSyCeCFeVFIlSPjwDclJxBKMTuVfnH43nCgQ`,
        q: searchTerm
      }
    });

    // updating states with the data from youTube API data
    this.setState({
      videos: response.data.items,
      firstVideo: response.data.items[0]
    });
  };

  // initial searched when it opened first time
  componentDidMount() {
    this.handleSubmit("technology");
  }

  render() {
    //variable indicating 'video watch' mode on or off
    //intending to apply different setting for same component 'video' with diffrent outcome with diffrent CSS

    return (
      <Router>
        <Route exact path="/">
          <div className="app">
            <Header onChildClick={this.handleSubmit} />
            <div className="mainBody">
              <SideMenu />
              <VideoList
                videoData={this.state.videos}
                watchOn={ this.state.watchOn }
          
              />
            </div>
          </div>
        </Route>
        <Route path="/watch" render={() => (
            <div className="app">
              <WatchVideo
                onChildClick={ this.handleSubmit }
                videoData={ this.state }
                watchOn={ this.state.watchOn }
              />
            </div>
          )}
        />
      </Router>
    );
  }
}

