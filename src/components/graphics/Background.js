import React, { useContext, useState } from 'react'
import '../../styles/background.scss'

function Background() {
  let orderedBackgrounds = [ 
  //maybe 
   'linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )', 
   'linear-gradient( 180deg,  rgba(0,0,0,1) 77.5%, rgba(0,77,84,.2) 94.5%, rgba(33,255,237,.2) 105.6% )', 
  'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
  'linear-gradient( 109.6deg,  rgba(14,11,56,1) 11.2%, rgba(239,37,37,1) 91.1% )',
  'linear-gradient( 109.6deg,  rgba(255,78,80,.8) 11.2%, rgba(249,212,35,.8) 100.2% )',
  'linear-gradient(315deg, #4c4177 0%, #2a5470 74%)',
  'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
  //  light
  // 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'
  // 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
  // 'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
  // 'radial-gradient( circle 1294px at -15.5% 23.8%,  rgba(255,206,149,1) 0%, rgba(247,92,92,1) 44.9%, rgba(108,0,96,0.97) 93.8% )'
  // good ones
  
  'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
  'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)',
  'linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)',
  'radial-gradient( circle 880px at -0.7% 57.1%,  rgba(202,149,149,1) 0%, rgba(239,215,177,1) 14.3%, rgba(239,239,177,1) 27.4%, rgba(191,239,177,1) 40.1%, rgba(177,239,217,1) 48.7%, rgba(177,238,239,1) 56.7%, rgba(177,180,239,1) 73.2%, rgba(224,177,239,1) 89.8%, rgba(239,177,231,1) 100.2% )',
  'linear-gradient( 122.3deg,  rgba(111,71,133,1) 14.6%, rgba(232,129,166,1) 29.6%, rgba(237,237,183,1) 42.1%, rgba(244,166,215,1) 56.7%, rgba(154,219,232,1) 68.7%, rgba(238,226,159,1) 84.8% )',
  'linear-gradient( 111.1deg,  rgba(0,40,70,1) -4.8%, rgba(255,115,115,1) 82.7%, rgba(255,175,123,1) 97.2% )', 
  'linear-gradient( 138deg,  rgba(32,201,255,1) 36.7%, rgba(0,8,187,1) 84.4%, rgba(255,255,255,1) 119.7% )',
  'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
  'linear-gradient( 0.3deg,  rgba(30,161,239,1) 0.9%, rgba(49,46,252,1) 88.6% )',
  'linear-gradient( 68.7deg,  rgba(235,217,221,1) 8%, rgba(216,174,211,1) 55.4%, rgba(145,130,196,1) 91.1% )',
  'linear-gradient( 181.2deg,  rgba(181,239,249,.6) 10.5%, rgba(254,254,254,.6) 86.8% )',
  'linear-gradient(to right, #414d0b, #727a17)',
  'linear-gradient(to right, #093028, #237a57)',
  ]
  const [backgrounds, setBackgrounds] = useState(shuffleBackgrounds(orderedBackgrounds));  
  
  return (
    <div className="transition-backgrounds">
        <div className="background" id="back1" style={{background: backgrounds[0]}}/>
        <div className="background" id="back2" style={{background: backgrounds[1]}}/>
        <div className="background" id="back3" style={{background: backgrounds[2]}}/>
        <div className="background" id="back4" style={{background: backgrounds[3]}}/>
        <div className="background" id="back5" style={{background: backgrounds[4]}}/>
    </div>
 
    )
}

function shuffleBackgrounds(backgrounds) {
  let shuffled = backgrounds.sort(() => Math.random() - 0.5)
  return shuffled
}

export default Background
