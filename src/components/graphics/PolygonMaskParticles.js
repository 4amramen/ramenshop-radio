import React, { useContext } from 'react'
import Particles from 'react-particles-js'
import '../../styles/particles.css'
import playerContext from '../../context/playerContext'


function PolygonMaskParticles(props) {
	const {
		show,
		polygonMask,
		clicked
	} = useContext(playerContext)
	if(show){
		console.log(polygonMask[2])
		return (
			<div className="polygon-wrapper">
			<div className={"polygon-transition-in"}/> 
			<div className={"polygon-background"} 
				style={
					polygonMask[1]
				}
				/> 

			<Particles className="particles-polygon"
			params={polygonMask[0]} 
			style={
				polygonMask[2]}
			
		  	/>

			 </div>
		)
	} else {
 
		
				return null;
			

	}
}

export default PolygonMaskParticles
