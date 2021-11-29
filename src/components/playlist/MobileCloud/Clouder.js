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
  console.log(currentSong)

  let url = './dist/cloud.js'

  useScript(url);

  let { numSongs, songsOffset, radius } = props;

  // update state for sphere manually 
  const currentSongRef = useRef(currentSong);
  const setCurrentSongRef = data => {
    currentSongRef.current = data;
    SetCurrent(data);
  };


  useEffect(() => {

    let sphereTags = []
    let start = songsOffset;
    let end = start + numSongs;

    for (let i = start; i < end; i++) {
      let tag = {text: songs[i].name, id: i, weight: 1}
      sphereTags.push(tag)
    }
    console.log(sphereTags)

    let rootEl = document.querySelector('.cloud');

    let clouder = Clouder({
      container: rootEl,
      tags: sphereTags,
      callback: function(id) {handleSongClick(id);}
    });

    // const options = {
    //   radius: radius
    // };
    // let tagCloud = TagCloud(container, sphereTags, options);

    // set sphere tags

    // rootEl.addEventListener('click', function clickEventHandler(e) {
    //   if (e.target.className === 'tagcloud--item') {
    //     // window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
    //     // your code here
    //     let clickedSongName = e.target.innerText;

    //     if (!clicked) {
    //       SetClicked(1);
    //       console.log("first click");
    //       SetCurrentAmbience(3);
    //       toggleAmbiencePlaying();

    //     } else if (clicked == 1) {
    //       SetClicked(2);
    //     }
    //     if (isMobile && clicked) {
    //       if (!ambiencePlaying) {
    //         toggleAmbiencePlaying();
    //         toggleAmbienceAudioGlobal();
    //       }
    //     }
    //     let clickedSongIndex = getSongIndex(clickedSongName, songs)
    //     console.log('clicked ' + clickedSongIndex)
    //     console.log('current ' + currentSongRef.current)
    //     console.log(clickedSongName);
    //     console.log(songs[currentSong]['name'])
    //     if (songs[currentSongRef.current]['name'] != clickedSongName) {
    //       console.log('setting')
    //       setCurrentSongRef(clickedSongIndex);
    //     }
    //   }
    // });
  }, []);

  function handleSongClick(id) {
      // window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
      // your code here

      let clickedSongId = id;

      if (!clicked) {
        SetClicked(1);
        console.log("first click");
        SetCurrentAmbience(3);
        toggleAmbiencePlaying();

      } else if (clicked == 1) {
        SetClicked(2);
      }
      if (isMobile && clicked) {
        if (!ambiencePlaying) {
          toggleAmbiencePlaying();
          toggleAmbienceAudioGlobal();
        }
      }

      console.log(currentSongRef.current)

      if (songs[currentSongRef.current] != clickedSongId) {
        console.log('setting')
        setCurrentSongRef(clickedSongId);
      }
    }

  

  // render
  return (
    <div className="cloud"></div>
  )
}




const getSongIndex = (songName, songs) => {
  let songIndex;
  songs.forEach((song, i) => {
    if (song.name === songName) {
      songIndex = i;
    }
  })
  if (songIndex !== undefined) {
    return songIndex;
  } else {
    console.log('song not found in getsongindex')
    return
  }

}



export default SphereCloud;
