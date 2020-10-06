import React, { useContext } from 'react'
import Particles from 'react-particles-js'

function CustomParticles() {

  return (
      <Particles className= "particles p1 pb"  params={{
        "particles": {
      "number": {
        "value": 40,
        "density": {
        "enable": true,
        "value_area": 700
        }
      },
      "color": {
      "value": ["#fff"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
        "width": 0,
        "color": "#ffffff"
        },
        "polygon": {
        "nb_sides": 15
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
        "enable": true,
        "speed": .7,
        "opacity_min": 0,
        "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#fff",
        "opacity": 0.2,
        "width": .5
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "right",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
        }
      }
      },
      "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
        "enable": true,
        "mode": "grab"
        },
        "onclick": {
        "enable": true,
        "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": .4
        }
        },
        "bubble": {
        "distance": 150,
        "size": 9,
        "duration": 5,
        "opacity": 8,
        "speed": 10,
        },
        "repulse": {
        "distance": 200,
        "duration": .4,
        },
        "push": {
        "particles_nb": 4
        },
        "remove": {
        "particles_nb": 2
        }
      }
      },
      "retina_detect": true
    }} />
  )
}

export default CustomParticles
