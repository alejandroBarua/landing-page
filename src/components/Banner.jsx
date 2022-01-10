import React from 'react';
import styled from 'styled-components';
import { Container, Flex} from '../styles';

import Header from './Header';
import image from '../assets/desktop/image-hero.jpg';

const Banner = () => {
	return (
		<BannerStyled>
			<Container>
				<Header />
				<FlexStyled>
					<Title>IMMERSIVE EXPERIENCES THAT DELIVER</Title>
				</FlexStyled>
			</Container>
		</BannerStyled>
	)
}

export default Banner;

const BannerStyled = styled.div`
	height: 90vh;
	color: white;
	background-image: url(${image});
`

const Title = styled.h1`
	border: solid 2px white;
	font-size: 4rem;
	font-weight: 300;
	line-height: 1;
	padding: 1.5rem;
	width: 500px;

`

const FlexStyled = styled(Flex)`

	display: flex;
	align-items: center;
	min-height: calc(90vh - 4rem);

`