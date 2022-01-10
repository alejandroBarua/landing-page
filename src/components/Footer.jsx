import React from 'react';
import { Container, Flex } from '../styles';

import logo from '../assets/logo.svg';

import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';
import instragramIcon from '../assets/icon-instagram.svg';
import styled from 'styled-components';


const Footer = () => {
	return (
		<FooterStyled>
			<Container>
				<FlexStyled>
					<Logo src={logo} alt="loopstudios" />
					<IconContainer>
						<Icon src={facebookIcon} alt="facebook" />
						<Icon src={twitterIcon} alt="twitter" />
						<Icon src={pinterestIcon} alt="pinterest" />
						<Icon src={instragramIcon} alt="instagram" />
					</IconContainer>
				</FlexStyled>
				<FlexCopy>
					<span>©2021 Loopstudios. All rights reserved.</span>
				</FlexCopy>
			</Container>
		</FooterStyled>
	)
}

export default Footer;

const FooterStyled = styled.footer`
	background-color: #222;
	color: white;
	padding: 2rem 0;
	margin-top: 5rem;

`

const FlexCopy = styled(Flex)`
	justify-content: flex-end;
	margin-top: 1rem;
`

const Icon = styled.img` 

	margin-left: 1rem;
	padding-bottom: 0.5rem;
	&:hover{
		cursor: pointer;
		border-bottom: solid 2px white;
	}
`

const IconContainer = styled.div`
	position: absolute;
	right: 0;
`

const FlexStyled = styled(Flex)`
	position: relative;
`

const Logo = styled.img`
	cursor: pointer;
`