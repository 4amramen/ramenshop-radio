import React, { useContext } from 'react'
import Particles from 'react-particles-js'
import '../../styles/particles.css'
import playerContext from '../../context/playerContext'


function PolygonMaskParticles(props) {


	const {
		show,
		polygonMask
	} = useContext(playerContext)


	let url = "polygonMaskImages/" + polygonMask;

	if(show){
		console.log(url);
		return (
			<Particles className="particles screen"
		  params={{
			  "fps_limit": 28,
			  "particles": {
				  "collisions": {
					  "enable": false
				  },
				  "number": {
					  "value": 300,
					  "density": {
						  "enable": false
					  }
				  },
				  "line_linked": {
					  "enable": true,
					  "distance": 70,
					  "opacity": 0.2
				  },
				  "move": {
					  "speed": .3
				  },
				  "opacity": {
					  "anim": {
						  "enable": true,
						  "opacity_min": 0.5,
						  "speed": 1,
						  "sync": false
					  },
					  "value": 0.4
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
				}
			  },
			  "polygon": {
				  "enable": true,
				  "scale": 2,
				  "type": "inline",
				  "move": {
					  "radius": 7
				  },
				  "url": url,
				  "inline": {
					  "arrangement": "equidistant"
				  },
				  "draw": {
					  "enable": false,
					  "stroke": {
						  "color": "rgba(255, 255, 255, .2)"
					  }
				  }
			  },
			  "retina_detect": false,
			  "interactivity": {
				  "events": {
					  "onhover": {
						  "enable": true,
						  "mode": "bubble"
					  }
				  },
				  "modes": {
					  "bubble": {
						  "size": 6,
						  "distance": 40
					  }
				  }
			  }
		  }} />
		)
	} else {
		return null;
	}
}

export default PolygonMaskParticles
