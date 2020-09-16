import React from 'react';
import Playlist from './components/playlist/Playlist'
import Controls from './components/Controls'
import Title from './components/graphics/Title'
import PlayerState from './context/PlayerState'
import ColorOverlay from './components/graphics/ColorOverlay'
import './main.css'
import './input.css'
import CustomParticles from './components/graphics/CustomParticles';

function AudioPlayer() {

  return (
    <PlayerState>

      <div className="main" >

	  	<CustomParticles/>

		<ColorOverlay/>
		
        <Title/>

        <Playlist/>

        <Controls/>

      </div>

    </PlayerState>
  );
}

export default AudioPlayer;
