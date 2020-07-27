import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'


function Playlist() {
  const { SetCurrent, togglePlaying, currentAmbience, ambiencePlaying, SetCurrentAmbience, currentSong, songs, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)

  return (
    <div className="playlist">
      <div className="header">
        <i className="fas fa-list-ul"></i>
        <span className="pltext">Play List</span>
      </div>
      <div className="songlist">
        <div className="loi">
          {
            songs.map((song, i) =>
              <div className={'songContainer ' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { 
                if (!clicked)
              {
                console.log("first click");
                toggleAmbiencePlaying();
                SetCurrentAmbience(1);
                SetClicked();
              }
                if(song && currentSong != i){
                  SetCurrent(i);
                }
              }}>
                <span className="song">{song[0]}</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Playlist
