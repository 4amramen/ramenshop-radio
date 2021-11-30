import React, { useContext, useRef } from 'react'
import playerContext from '../../../context/playerContext'
import SongContainer from '../SongContainer'
import { useEffect } from 'react'
import useScript from './hooks/useScript'
import Clouder from './cloud'
// import TagCloud from 'TagCloud'

import { useMediaQuery } from 'react-responsive'


function SphereCloud(props) {
  const { svgs, songs, HidePolygon, ShowPolygon, SetPolygonMask, ambiencePlaying, SetCurrent, SetCurrentAmbience, toggleAmbienceAudioGlobal, currentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  let url = './dist/cloud.js'

  useScript(url);

  let { numSongs, songsOffset, radius } = props;

  // update state for sphere manually 
  const currentSongRef = useRef(currentSong);
  const setCurrentSongRef = data => {
    currentSongRef.current = data;
    SetCurrent(data);
  };

    // update state for sphere manually 
    const clickedRef = useRef(clicked);

    const setClickedRef = data => {
      clickedRef.current = data;
      SetClicked(data);
    };

  useEffect(() => {
    let sphereTags = []
    let start = songsOffset;
    let end = start + numSongs;

    for (let i = start; i < end; i++) {
      let tag = { text: songs[i].name, id: i, weight: 1 }
      sphereTags.push(tag)
    }
    console.log(sphereTags)

    let rootEl = document.querySelector('.cloud');

    let clouder = Clouder({
      container: rootEl,
      tags: sphereTags,
      nonSense: .7,
      callback: function (id) { handleSongClick(id); }
    });
  }, []);

  function handleSongClick(id) {
    // window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
    // your code here

    let clickedSongId = id;
    let clickedSongName = songs[clickedSongId].name;
    let currentSongName = songs[currentSongRef.current].name;

    console.log(clickedSongId)

    console.log(clickedSongName !== currentSongName)
    if (clickedSongName !== currentSongName) {

      console.log(clickedRef.current)
      if (!clickedRef.current) {
        console.log("first click");

        setClickedRef(1);
        SetCurrentAmbience(3);
      } else if (clickedRef.current == 1) {
        setClickedRef(2);
      }
      if (isMobile && clickedRef.current) {
        if (!ambiencePlaying) {
          toggleAmbiencePlaying();
          toggleAmbienceAudioGlobal();
        }
      }
      console.log('setting')
      setCurrentSongRef(clickedSongId);
    }
  }



  // render
  return (
    <div className="cloud"></div>
  )
}


export default SphereCloud;
