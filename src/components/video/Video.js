
import React, { Component } from 'react'
import './video.css';
import { NavLink, Link } from 'react-router-dom';

class Video extends Component {
  state = {
    clicked : null
  }

  onVideoClick = () => {
    console.log("hello Clicked!")
  }

  render() {

  //conditional CSS setting for diffrent show of the component, 'Video'
    let elementOn = {};
    let elementOff = {};

    if (this.props.watchOn) {
      elementOn = {
        display: "block"
      };
      elementOff = {
        display: "none"
      };
    } else {
      elementOn = {
        display: "none"
      };
      elementOff = {
        display: "block"
      };
    }
    return (
      <article className="videoFrame" key={ this.props.videoData.id }>
        <iframe
          width="1000"
          height="550"
          style={ elementOn }
          src={`http://www.youtube.com/embed/${this.props.videoData.id.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
        <NavLink
          to="/watch/match.params.clicked"
          style={{ textDecoration: "none" }}
        >
          <img
            src={ this.props.videoData.snippet.thumbnails.medium.url }
            style={ elementOff }
          />
          <div className="textFrame">
            <h4>{ this.props.videoData.snippet.title }</h4>
            <h5>{ this.props.videoData.snippet.channelTitle }</h5>
            <p style={ elementOn }>{ this.props.videoData.snippet.description }</p>
          </div>
        </NavLink>
      </article>
    );
  }
}

export default Video;

