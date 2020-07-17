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

function AudioPlayer() {

  return (
    <PlayerState>
    <RainSound audio = {"ambience/RainSound.mp3"}/>
      <div className="main">
        <div className="top">
          <div className="left">
          </div>
          <div className="right">

            <Playlist />
          </div>
        </div>
        <Controls/>
      </div>
    </PlayerState>
  );
}

export default AudioPlayer;
