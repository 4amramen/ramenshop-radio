import React, { useContext, useState } from 'react'
import '../../styles/background.scss'

function Background() {
  let orderedBackgrounds = [ 
  // //maybe 
  //  'linear-gradient( 0deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )', 
  // 'linear-gradient( 180deg,  rgba(0,0,0,1) 77.5%, rgba(0,77,84,.2) 94.5%, rgba(33,255,237,.2) 105.6% )', 
  // 'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',
  // 'linear-gradient( 0deg,  rgba(14,11,56,1) 11.2%, rgba(239,37,37,1) 91.1% )',
  // 'linear-gradient( 180deg,  rgba(255,78,80,.8) 11.2%, rgba(249,212,35,.8) 100.2% )',
  // 'linear-gradient(180deg, #4c4177 0%, #2a5470 74%)',
  // 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
  
  // //  light
  // 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  // 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
  // 'linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)',
  // 'radial-gradient( circle 1294px at -15.5% 23.8%,  rgba(255,206,149,1) 0%, rgba(247,92,92,1) 44.9%, rgba(108,0,96,0.97) 93.8% )',
  // // good ones
  
  // 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
  // 'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)',
  // 'linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)',

  // 'radial-gradient( circle 880px at -0.7% 57.1%,  rgba(202,149,149,1) 0%, rgba(239,215,177,1) 14.3%, rgba(239,239,177,1) 27.4%, rgba(191,239,177,1) 40.1%, rgba(177,239,217,1) 48.7%, rgba(177,238,239,1) 56.7%, rgba(177,180,239,1) 73.2%, rgba(224,177,239,1) 89.8%, rgba(239,177,231,1) 100.2% )',
  
  // 'linear-gradient( 122.3deg,  rgba(111,71,133,1) 14.6%, rgba(232,129,166,1) 29.6%, rgba(237,237,183,1) 42.1%, rgba(244,166,215,1) 56.7%, rgba(154,219,232,1) 68.7%, rgba(238,226,159,1) 84.8% )',
  // 'linear-gradient( 111.1deg,  rgba(0,40,70,1) -4.8%, rgba(255,115,115,1) 82.7%, rgba(255,175,123,1) 97.2% )', 
  // 'linear-gradient( 138deg,  rgba(32,201,255,1) 36.7%, rgba(0,8,187,1) 84.4%, rgba(255,255,255,1) 119.7% )',

  // 'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)',

  // 'linear-gradient( to bottom,  rgba(30,161,239,1) 0.9%, rgba(49,46,252,1) 88.6% )',

  // 'linear-gradient( 0deg,  rgba(235,217,221,.7) 8%, rgba(216,174,211,.7) 55.4%, rgba(145,130,196,.7) 91.1% )',
  
  // 'linear-gradient( 181.2deg,  rgba(181,239,249,.6) 10.5%, rgba(254,254,254,.6) 86.8% )',

  // 'linear-gradient(to bottom, #414d0b, #727a17)',
  // 'linear-gradient(to bottom, #093028, #237a57)',

  // "linear-gradient( 111.1deg,  rgba(0,40,70,1) -4.8%, rgba(255,115,115,1) 82.7%, rgba(255,175,123,1) 97.2% )",

  // 'linear-gradient( 179.9deg,  rgba(141,154,190,.7) 1.9%, rgba(244,179,78,.7) 39.6%, rgba(235,124,88,.7) 61.5%, rgba(235,124,88,.7) 75%, rgb(19, 5, 18,.7) 93% )',
  
  // 'linear-gradient( 179.3deg,  rgba(28,47,73,.5) 6.8%, rgba(95,97,92,.5) 68.5%, rgba(148,121,75,.5) 88.5%, rgba(142,133,116,.5) 104.4% )',

  // 'linear-gradient( 180.1deg,  rgba(3,5,10,1) 0.9%, rgba(8,18,46,1) 24.8%, rgba(22,59,116,1) 68.2%, rgba(66,57,86,1) 79.2%, rgba(8,18,46,1) 96% )',
  
  
  // 'linear-gradient( 180.1deg,  rgba(13,16,26,1) -10.1%, rgba(4,27,59,1) 17.8%, rgba(12,16,48,1) 100% )' ,
  
  // 'linear-gradient( 180.3deg,  rgba(214,224,255,.2) 37.2%, rgba(254,168,168,.3) 137.3% )',

  // 'linear-gradient( 179.7deg,  rgba(10,15,23,1) 0.8%, rgba(24,36,51,1) 25.2%, rgba(64,77,79,1) 62.4%, rgba(141,75,36,1) 99.6% )',

  // 'linear-gradient( 178.1deg,  rgba(60,55,106,1) 8.5%, rgba(23,20,69,1) 82.4% )',

  // 'linear-gradient( 179.9deg,  rgba(123,116,190,1) 1%, rgba(97,98,168,1) 41.4%, rgba(85,78,138,1) 83.9%, rgba(26,84,84,1) 95% )',
  // 'linear-gradient( 0deg,  rgba(123,116,190,1) 9.9%, rgba(96,97,167,1) 44.1%, rgba(53,41,63,1) 91.8% )',





//final gradients
  'linear-gradient( 0deg,  rgba(48,207,208,.3) 11.2%, rgba(33,7,64,.6) 77.5% )', 
  'radial-gradient( circle 867px at -6.7% 44%,  rgba(255,246,63,.5) 0%, rgba(226,0,0,.5) 100.2% )',
  'linear-gradient(180deg, #4c4177 0%, #2a5470 74%)',
  'radial-gradient( circle 1294px at -15.5% 23.8%,  rgba(255,206,149,.3) 0%, rgba(247,92,92,.3) 44.9%, rgba(108,0,96,0.3) 93.8% )',
  'linear-gradient( 122.3deg,  rgba(111,71,133,.4) 14.6%, rgba(232,129,166,.4) 29.6%, rgba(237,237,183,.4) 42.1%, rgba(244,166,215,.4) 56.7%, rgba(154,219,232,.4) 68.7%, rgba(238,226,159,.4) 84.8% )',  //.3
  'linear-gradient( 111.1deg,  rgba(0,40,70,.5) -4.8%, rgba(255,115,115,.5) 82.7%, rgba(255,175,123,.5) 97.2% )', 
  'linear-gradient( 0deg,  rgba(235,217,221,.4) 8%, rgba(216,174,211,.4) 55.4%, rgba(145,130,196,.4) 91.1% )',
  'linear-gradient( 138deg,  rgba(32,201,255,.4) 36.7%, rgba(0,8,187,.4) 84.4%, rgba(255,255,255,.4) 119.7% )',

  'linear-gradient( 179.9deg,  rgba(141,154,190,.3) 1.9%, rgba(244,179,78,.3) 39.6%, rgba(235,124,88,.3) 61.5%, rgba(235,124,88,.2) 75%, rgb(19, 5, 18,.3) 95% )',
  'linear-gradient( 179.3deg,  rgba(28,47,73,.6) 6.8%, rgba(95,97,92,.6) 68.5%, rgba(148,121,75,.6) 88.5%, rgba(142,133,116,.6) 104.4% )',
  'linear-gradient( 180.1deg,  rgba(3,5,10,.9) 0.9%, rgba(8,18,46,.9) 24.8%, rgba(22,59,116,.9) 68.2%, rgba(66,57,86,.9) 79.2%, rgba(8,18,46,.9) 96% )',
  'linear-gradient( 180.4deg,  rgba(190,30,36,.35) 6.6%, rgba(105,12,16,.4) 74.9% )',
  'radial-gradient( circle farthest-corner at 50% 40.1%,  rgba(0,0,0,1) 0%, rgba(39,0,89,.25) 70.9% )',
  'linear-gradient( 181deg,  rgba(2,0,97,.8) 15%, rgba(97,149,219,.8) 158.5% )',
  'linear-gradient( 179.7deg,  rgba(7,13,22,.6) 51%, rgba(24,33,48,.6) 63.7%, rgba(66,78,71,.6) 83.2%, rgba(146,88,53,.6) 100.8% )',
  'linear-gradient( 74.3deg,  rgba(68,17,28,.5) 17.4%, rgba(95,24,40,.5) 34.7%, rgba(122,31,51,.5) 51.8%, rgba(149,38,62,.5) 67.4%, rgba(163,41,68,.5) 89.6% )',

//needs opacity adjustment
'linear-gradient(-225deg, rgba(93,159,255,.6) 0%, rgba(184,220,255,.6) 48%, rgba(107,187,255,.6) 100%)',
'linear-gradient(-225deg, rgba(93,159,255,.7) 0%,  rgba(177,159,255,.7) 48%, rgba(236,161,254,.7) 100%)',
'linear-gradient(to top, rgba(93,159,255,.4) 0%, rgba(162,182,223,.4) 100%, rgba(107,140,206,.4) 100%,  rgba(162,182,223,.4) 100%)', //.45
'linear-gradient(to bottom, rgba(9,48,40,.45),  rgba(35,122,87,.45))', //.45
'linear-gradient(to right, rgba(57,106,252,.4), rgba(41,72,255,.4))',
'linear-gradient(to right,  rgba(21,153,87,.4),  rgba(21,87,153,.4))',
' linear-gradient(to top, rgba(157,80,187,.55)), rgba(110,72,170,.55))',
'linear-gradient(to top, rgba(220,36,36,.25), rgba(74,86,157,.25))',



  



//maybe
'radial-gradient( circle 880px at -0.7% 57.1%,  rgba(202,149,149,.5) 0%, rgba(239,215,177,.5) 14.3%, rgba(239,239,177,.5) 27.4%, rgba(191,239,177,.5) 40.1%, rgba(177,239,217,.5) 48.7%, rgba(177,238,239,.5) 56.7%, rgba(177,180,239,.5) 73.2%, rgba(224,177,239,.5) 89.8%, rgba(239,177,231,.5) 100.2% )',
  'linear-gradient( 180.1deg,  rgba(60,55,106,.7) 8.5%, rgba(23,20,69,.7) 82.4% )',

  

  
  ]
  const [backgrounds, setBackgrounds] = useState(shuffleBackgrounds(orderedBackgrounds));  
  
  return (
    <div className="transition-backgrounds">
      <div className="background-test" style={{opacity: 1 , background:  

'radial-gradient( circle farthest-corner at 50.1% 47.8%, #ff6666ff 0.1%, #171927ff 55.4% )'

}}/>
        <div className="intro-background" style={{background: backgrounds[0]}}/>
        <div className="background" id="back1" style={{background: backgrounds[1]}}/>
        <div className="background" id="back2" style={{background: backgrounds[2]}}/>
        <div className="background" id="back3" style={{background:"black"}}/>
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
