import React from 'react';
import styled from 'styled-components';
import { Container, Title } from '../styles';

import image from '../assets/desktop/image-interactive.jpg';

const InfoHome = () => {
	return (
		<InfoHomeStyled>
			<img src={image} alt="interactive person" />
			<Info>
				<Title>THE LEADER IN INTERACTIVE VR</Title>
				<p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
			</Info>
		</InfoHomeStyled>
	)
}

export default InfoHome;


const InfoHomeStyled = styled(Container)`
	display: flex;
	align-items: center;
	min-height: 120vh;
	position: relative;
`

const Info = styled.div`

	position: absolute;
	bottom: 2rem;
	right: 2rem;
	background-color: white;
	font-size: 0.9rem;
	padding: 4rem;
	width: 550px;
`
