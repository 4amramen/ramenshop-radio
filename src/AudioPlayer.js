import React from 'react';
import Playlist from './components/playlist/Playlist'
import Controls from './components/Controls'
import Title from './components/graphics/Title'
import PlayerState from './context/PlayerState'
import Background from './components/graphics/Background'
import './styles/main.css'
import './styles/input.css'
import CustomParticles from './components/graphics/CustomParticles';
import PolygonMaskParticles from './components/graphics/PolygonMaskParticles';

import {useState} from 'react'
import Sidebar from './components/Sidebar'
import Toggle from './components/Toggle'
import DimOverlay from './components/graphics/DimOverlay';
import VideoBackground from './components/VideoBackground';



import ReactGA from 'react-ga';

const trackingId = "UA-186084933-1"
ReactGA.initialize(trackingId);




function AudioPlayer() {

  const handleGAEvent = () => {
    ReactGA.event({
        category: "Sidebar Click",
        action: "User clicked on sidebar",
      });
}

  const [sidebarOpen, setSidebarOpen] = useState(false)

    const openHandler = () => {
        if (!sidebarOpen){
            setSidebarOpen(true)
            handleGAEvent();
        } else {
            setSidebarOpen(false)
        }
    }
    
    const sidebarCloseHandler = () => {
        setSidebarOpen(false);
    }


    let sidebar
    let dimOverlay
    if(sidebarOpen){
        sidebar = <Sidebar sidebar={"sidebar"} dim={"dim"} close={sidebarCloseHandler}/>
    }

  return (
    <PlayerState>

      <div className="main" >
     
        <div className="middle-title">
            <div className="rr-title">
              [ramenshop radio]       
            </div>  
            <div className="coming-soon">
              coming soon...     
            </div>  
        </div>
        
        {sidebar}
        {/* <Toggle click={openHandler}/> */}

        <CustomParticles/>
        {/* <PolygonMaskParticles/> */}

        {/* <VideoBackground/> */}
        {/* <Background/> */}

        {/* <Title/> */}

        {/* <Playlist/> */}

        {/* <Controls/> */}

      </div>

    </PlayerState>
  );
}

export default AudioPlayer;
