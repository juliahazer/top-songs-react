import React, { Component } from 'react';
import Song from './Song';
import './SongTable.css';

class SongTable extends Component {
  render() {
    var songs = this.props.songs.map((song) => {
      return (
        <Song 
          key={"pos" + song.position}
          position={song.position}
          name={song.songName} 
          artist={song.artist}
          bioUrl={song.bioUrl}
          nameBio={song.namBio}
        />
      )
    });
    return (
      <table className="table table-striped table-hover table-responsive table-sm"> 
        <thead> 
          <tr> 
            <th className="col-xs-1">Position</th>
            <th className="col-xs-2">Song / Artist</th>
            <th className="col-xs-9">Video</th>
          </tr>
        </thead>
        <tbody>
          {songs}
        </tbody>
      </table>
    )
  }
}

export default SongTable;