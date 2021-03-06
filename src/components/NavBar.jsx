import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
	return (
		<NavBarStyled>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/products'>Products</NavLink>
			<NavLink to='/events'>Events</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/careers'>Careers</NavLink>
			<NavLink to='/support'>Support</NavLink>
		</NavBarStyled>
	)
}

export default NavBar

const NavBarStyled = styled.nav`

	a{
		color: white;
		margin-left: 2.2rem;
		padding-bottom: 0.5rem;
	}

	a.active{
		border-bottom: solid 2px white;
	}
`