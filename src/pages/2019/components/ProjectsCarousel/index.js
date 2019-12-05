import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import SimpleCard from '../SimpleCard'

const ProjectsCarousel = () => {
	return (
		<Carousel
			showIndicators={false}
			showThumbs={false}
			autoPlay={false}
			interval={0}
			transitionTime={450}
			infiniteLoop={true}
			showStatus={false}
			useKeyboardArrows={true}
			emulateTouch={true}
			stopOnHover={true}
		>
			<div></div>
			<div></div>

		</Carousel>
	)
}

export default ProjectsCarousel
