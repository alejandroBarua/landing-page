import React from 'react';
import styled from 'styled-components';


const Creation = ({img, description}) => {
	return (
		<ImageContainer>
			<Image>
				<img src={img} alt={description} />
			</Image>
			<Description>{description}</Description>
		</ImageContainer>
	)
}

export default Creation;


const ImageContainer = styled.figure`

	position: relative;
	cursor: pointer;
`

const Image = styled.div`

	&::before{
		content: '';
		width: 100%;
		height: 99%;
		position: absolute;
		top: 0;
		right: 0;
		background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6));
	}

`

const Description = styled.figcaption`
	bottom: 0;
	color: white;
	font-size: 2.1rem;
	font-weight: 300;
	padding: 2rem;
	position: absolute;
	text-transform: uppercase;
	width: 230px;
	
`