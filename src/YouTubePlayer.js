import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import {
  addPlayer,
  handleVideoStateChange
} from './actions';

class YouTubePlayer extends Component {
  render() {
    const OPTS = {
      height: '300',
      width: '500'
    }

    return (
      <YouTube
        videoId={this.props.videoId}
        id={this.props.videoId}
        opts={OPTS}
        onReady={this.props.addPlayer.bind(this)}
        onStateChange={this.props.handleVideoStateChange.bind(this)}
      />
    )
  }
}

const mapDispatchToProps = { addPlayer, handleVideoStateChange };

export default connect(null, mapDispatchToProps)(YouTubePlayer);

