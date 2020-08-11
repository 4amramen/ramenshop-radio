import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import Cloud from './Cloud'

function Playlist() {
  const { SetCurrent, random1, random2, random3, SetCurrentAmbience, currentSong, songs, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
  var songPositions = [];
  var left = 0;
  var bottom = 0;

  var c1Size= 5;
  var c2Size= 15;

  var t = 30;

  var songSizes = [10, 14, 18];
  var songOpacities = [.25, .59, 1];

  var half = Math.floor(songs.length/2)
  var firstCloud = songs.slice(0, half-1);
  var secondCloud = songs.slice(half, songs.length-1);



  for(let j = 0; j<half; j++){

    var r = j%5;
    var f = Math.floor(j/5);
    var level = f*20;
    var deg = 10;
    var deg1 = 5;
    var right = 0;

    console.log(random1);
    if(r==0){
      bottom = 2*deg+level+(random1*deg1);
    }
         
    if(r==1){
      bottom = deg+level+(random2*deg1);
      if(f==2)
        bottom+=deg*2+(random3*deg1);
    }

    if(r==2){
      bottom = 0+level+(random1*deg1);
     
      if(f==1)
        bottom+=2*deg+(random2*deg1);

      if(f==2)
        bottom+=4*deg+(random3*deg1);
    }
    
    if(r==3){
      bottom = deg+level+(random1*deg1);
      if(f==2)
        bottom+=deg*2+(random2*deg1);
    }

    if(r==4){
      bottom = deg*2+level+(random3*deg1);
    }
    
    // set right
    if(left>90){
      right = (100-left)/3;
    }
    //assign positions
    songPositions[j] = [left, bottom, right];

    //set left for next
    left+=20+(random1*deg);
  }
  
  return (
    <div className="playlist">
            <Cloud offset={0} cloudSongs={songs.slice(0, c1Size)} x='0' y='100'delay={0*5}/>

            <Cloud offset={c1Size} cloudSongs={songs.slice(c1Size, c1Size+c2Size)}x='0' y='30'intro={true} delay={0*t}/>
            <Cloud offset={0} cloudSongs={songs.slice(0, c2Size)} x='0'y='100' delay={.2*t}/>
            <Cloud offset={0} cloudSongs={songs.slice(0, c2Size)} x='0'y='100' delay={.5*t}/>




          {/* <div className={'cloud 1'}>

              {secondCloud.map((song, j) =>
                  
                  <div className={'songContainer' + ' fall-' +  0 + ' ' + (currentSong === j+half ? 'selected' : '')} key={j+half} style={
                    {
                      fontSize: songSizes[(j)%3],
                      opacity: songOpacities[(j)%3],
                      left: songPositions[j][0]%100>90 ? '' : songPositions[j][0]%100 +'%', 
                      right: songPositions[j][0]%100>90 ? songPositions[j][2] +'%' : '',
                      bottom: songPositions[(j)][1] + '%',
                    
                  }} onClick={() => { 
                    console.log((j+half));
                    console.log(songs.length/2);


                    if (!clicked)
                  {
                    console.log("first click");
                    toggleAmbiencePlaying();
                    SetCurrentAmbience(1);
                    SetClicked();
                  }
                    if(song && currentSong != (j+half)){
                      SetCurrent((j+half));
                    }
                  }
                  }>
                    
                    <span className="song">{song[0]}</span>

                  </div>
                )
              }
            </div> */}
    </div>
  )
}


export default Playlist
