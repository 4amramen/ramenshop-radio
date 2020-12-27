import React, { useReducer } from 'react';
import playerContext from './playerContext';
import playerReducer from './playerReducer';
import { songsArr } from './songs';
// import { sidebarSongsArr } from './sidebarSongs';
import { sidebarSongsMap } from './sidebarSongsMap';
import ReactGA from 'react-ga';

import { ambienceArr } from './ambience';
import { svgsArr } from './svgs';
import { artistsArr } from './artists'


import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_CURRENT_AMBIENCE,
  TOGGLE_AMBIENCE_PLAYING,
  SET_CLICKED,
  SET_POLYGONMASK,
  SHOW_POLYGON,
  HIDE_POLYGON,
  TOGGLE_AMBIENCE_AUDIO_GLOBAL
} from './types'

let sidebarSongsArr = [];
let j = 0
for (const [key, value] of Object.entries(sidebarSongsMap)) {
  value.forEach(song => {
    song.push(j)
    sidebarSongsArr.push(song)
    j++
  });
}

const songs =  sidebarSongsArr.concat( songsArr.sort(() => Math.random() - 0.5));
console.log(sidebarSongsMap);
const random1 = Math.random();
const random2 = Math.random();
const random3 = Math.random();


const PlayerState = props => {
  const initialState = {
    currentSong: Math.floor(Math.random() * songsArr.length),
    currentAmbience: 0,
    songsOffset: sidebarSongsArr.length,
    random1: random1,
    random2: random2, 
    random3: random3,
    sidebarSongsMap: sidebarSongsMap,
    songs: songs,
    ambience: ambienceArr,
    artists: artistsArr,
    svgs: svgsArr,
    repeat: false,
    random: true,

    playing: false,
    ambiencePlaying: false,

    clicked: 0,

    polygonMask: null,
    show: false,
    ambienceAudioGlobal: false,
  }
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Set playing state
  const togglePlaying = () => dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })

  // SET AMBIENCE PLAYING STATE
  const toggleAmbiencePlaying = () => dispatch({ type: TOGGLE_AMBIENCE_PLAYING, data: state.ambiencePlaying ? false : true })

  // Set current song
  const SetCurrent = id => dispatch({ type: SET_CURRENT_SONG, data: id })

  // Set polygon mask
  const SetPolygonMask = svg => {
    dispatch({ type: SET_POLYGONMASK, data: svg })
  }

  const ShowPolygon = () => dispatch({ type: SHOW_POLYGON, data: true })

  const HidePolygon = () => dispatch({ type: HIDE_POLYGON, data: false })

   // SET CURRENT AMBIENCE
  const SetCurrentAmbience = id => dispatch({ type: SET_CURRENT_AMBIENCE, data: id });

  // Clicked

  const SetClicked = (numClicks) => { 
    
    if(numClicks==1)
      {
        handleGAEvent('First Click', 'User interacted with site after load');
      }
  
  dispatch({ type: SET_CLICKED, data: numClicks })}


  const toggleAmbienceAudioGlobal = () => dispatch({ type: TOGGLE_AMBIENCE_AUDIO_GLOBAL, data: state.ambienceAudioGlobal ? false : true })


  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1)
    } else {
      SetCurrent(state.currentSong - 1)
    }
  }
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0)
    } else {
      let randomCurrent = state.currentSong;
      while(randomCurrent!=state.currentSong){
         randomCurrent = Math.floor(Math.random() * ((state.songs.length-1)-sidebarSongsArr.length)) + sidebarSongsArr.length;
      }

      SetCurrent(randomCurrent)
    }
  }


  const handleGAEvent = (category, action) => {
    ReactGA.event({
        category: category,
        action: action,
      });
}

   // Next AMBIENCE
   const nextAmbience = (press) => {
    if(press != undefined){
      handleGAEvent("Next Ambience Click", "Clicked on next ambience")
    }
    if (state.currentAmbience === state.ambience.length - 1) {
      SetCurrentAmbience(0);
    } else {
      SetCurrentAmbience(state.currentAmbience + 1)
    }
  }

  // Next AMBIENCE
  const prevAmbience = (press) => {
    if(press != undefined){
      handleGAEvent("Previous Ambience Click", "Clicked on previous ambience")
    }
    if (state.currentAmbience === 0) {
      SetCurrentAmbience(state.ambience.length - 1);
    } else {
      SetCurrentAmbience(state.currentAmbience - 1)
    }
  }
  
  // Repeat and Random
  const toggleRepeat = (id) => dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
  const toggleRandom = (id) => dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })


  // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return dispatch({ type: SET_CURRENT_SONG, data: ~~(Math.random() * state.songs.length) })
    } else {
      if (state.repeat) {
        nextSong()
      } else {
        nextSong();
      }
    }
  }


   // END OF AMBIENCE
   const handleEndOfAmbience = () => {
    nextAmbience();
  }




  return <playerContext.Provider
    value={{
      currentSong: state.currentSong,
      currentAmbience: state.currentAmbience,

      random1: state.random1,
      random2: state.random2,
      random3: state.random3,


      songs: state.songs,
      sidebarSongsMap: state.sidebarSongsMap,
      songsOffset: state.songsOffset,
      ambience: state.ambience,
      artists: state.artists,
      svgs: state.svgs,

      repeat: state.repeat,
      random: state.random,

      playing: state.playing,
      ambiencePlaying: state.ambiencePlaying,
      ambienceAudioGlobal: state.ambienceAudioGlobal,

      show: state.show,
      polygonMask: state.polygonMask,

      clicked: state.clicked,

      nextSong,
      nextAmbience,
      prevAmbience,

      prevSong,

      SetCurrent,
      SetCurrentAmbience,

      toggleRandom,
      toggleRepeat,

      togglePlaying,
      toggleAmbiencePlaying,
      
      handleEnd,
      handleEndOfAmbience,
      SetClicked,

      SetPolygonMask,
      ShowPolygon,
      HidePolygon,

      toggleAmbienceAudioGlobal
    }}>

    {props.children}

  </playerContext.Provider>
}

export default PlayerState;

