import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import logo from '../assets/logo.svg';


const Header = () => {
	return (
		<HeaderStyled>
			<img src={logo} alt="logo loopstudios" />
			<NavBar />
		</HeaderStyled>
	)
}

export default Header

const HeaderStyled = styled.header`

	align-items: center;
	display: flex;
	height: 4rem;
	justify-content: space-between;

	
`