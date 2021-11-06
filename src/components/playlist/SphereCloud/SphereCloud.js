import React, { useContext, useRef } from 'react'
import playerContext from '../../../context/playerContext'
import SongContainer from '../SongContainer'
import { useEffect } from 'react'
import useScript from './hooks/useScript'
import TagCloud from 'TagCloud'
import { useMediaQuery } from 'react-responsive'


function SphereCloud(props) {
  const { svgs, songs, HidePolygon, ShowPolygon, SetPolygonMask, ambiencePlaying, SetCurrent, SetCurrentAmbience, toggleAmbienceAudioGlobal, currentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  console.log(currentSong)

  // let url = './dist/TagCloud.min.js'
  // useScript(url);

  let { numSongs, songsOffset, radius} = props;

    // update state for sphere manually 
    const currentSongRef = useRef(currentSong);
    const setCurrentSongRef = data => {
      currentSongRef.current = data;
      SetCurrent(data);
    };
  

  useEffect(() => {
    const container = '.tagcloud-holder';

    let sphereTags = []
    let start = songsOffset;
    let end = start + numSongs;

    for(let i = start; i < end; i++ ){
      sphereTags.push(songs[i].name)
    }

    const options = {
      radius: radius
    };
    let tagCloud = TagCloud(container, sphereTags, options);

    // set sphere tags
    let rootEl = document.querySelector('.tagcloud-holder');
    rootEl.addEventListener('click', function clickEventHandler(e) {
      if (e.target.className === 'tagcloud--item') {
        // window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
        // your code here
        let clickedSongName = e.target.innerText;

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
        let clickedSongIndex = getSongIndex(clickedSongName, songs)
        console.log('clicked '+ clickedSongIndex)
        console.log('current ' + currentSongRef.current)
        console.log(clickedSongName);
        console.log(songs[currentSong]['name'])
        if (songs[currentSongRef.current]['name'] != clickedSongName) {
          console.log('setting')
          setCurrentSongRef(clickedSongIndex);
        }
      }
    });



  }, []);

  // render
  return (
    <div className="tagcloud-holder"></div>
  )
}


const getSongIndex = (songName, songs) => {
  let songIndex;
  songs.forEach((song, i) => {
    if (song.name === songName){
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
