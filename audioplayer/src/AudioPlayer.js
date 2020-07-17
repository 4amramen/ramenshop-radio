import React from 'react';
import NowPlaying from './components/graphics/NowPlaying'
import Graphics from './components/graphics/Graphics'
import Playlist from './components/playlist/Playlist'
import Actions from './components/playlist/Actions'
import Controls from './components/Controls'

import PlayerState from './context/PlayerState'


import './main.css'
import './input.css'
import RainSound from './components/RainSound';
import AmbienceControls from './components/AmbienceControls';

function AudioPlayer() {

  return (
    <PlayerState>
      <div className="main">
        <Playlist/>
        <Controls/>
      </div>
    </PlayerState>
  );
}

export default AudioPlayer;
