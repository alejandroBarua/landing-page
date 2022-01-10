import React from 'react';
import styled from 'styled-components';
import { Container, Flex, Title } from '../styles';

import Creation from './Creation';

import imageEarth from '../assets/desktop/image-deep-earth.jpg';
import imageNight from '../assets/desktop/image-night-arcade.jpg';
import imageSoccer from '../assets/desktop/image-soccer-team.jpg';
import imageCar from '../assets/desktop/image-grid.jpg';
import imageMountain from '../assets/desktop/image-from-above.jpg';
import imageBorealis from '../assets/desktop/image-pocket-borealis.jpg';
import imageCuriosity from '../assets/desktop/image-curiosity.jpg';
import imageFisheye from '../assets/desktop/image-fisheye.jpg';

const data = [
	{
		img: imageEarth,
		description: 'deep earth'
	},
	{
		img: imageNight,
		description: 'night arcade'
	},
	{
		img: imageSoccer,
		description: 'soccer team vr'
	},
	{
		img: imageCar,
		description: 'the__ grid'
	},
	{
		img: imageMountain,
		description: 'from up above vr'
	},
	{
		img: imageBorealis,
		description: 'pocket borealis'
	},
	{
		img: imageCuriosity,
		description: 'the curiosity'
	},
	{
		img: imageFisheye,
		description: 'make it fisheye'
	}
]

const Creations = () => {
	return (
		<CreationsStyled>
			<FlexStyled>
				<Title>OUR CREATIONS</Title>
				<Btn>SEE ALL</Btn>
			</FlexStyled>
			<Grid>
				{
					data.map(({img, description}, index) => {
						return (
							<Creation 
								key={index}
								img={img} 
								description={description} />
						)
					})
				}
			</Grid>
		</CreationsStyled>
	)
}

export default Creations;

const CreationsStyled = styled(Container)`

	
`

const Grid = styled.div`

	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Btn = styled.button`

	background-color: white;
	border: solid 1px black;
	padding: 0.7rem 2rem;

	&:hover{
		background-color: black;
		color: white;
		cursor: pointer;
	}
`

const FlexStyled = styled(Flex)`

	margin-top: 5rem;
	margin-bottom: 3rem;
`