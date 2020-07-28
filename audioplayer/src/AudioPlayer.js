import React from 'react';
import Playlist from './components/playlist/Playlist'
import Controls from './components/Controls'
import Title from './components/graphics/Title'
import PlayerState from './context/PlayerState'

import './main.css'
import './input.css'

function AudioPlayer() {

  return (
    <PlayerState>
      <div className="main">
        <Title/>
        <Playlist/>
        <Controls/>
      </div>
    </PlayerState>
  );
}

export default AudioPlayer;
