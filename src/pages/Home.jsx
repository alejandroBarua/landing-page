import React, { Fragment } from 'react';
import { 
	Banner,
	InfoHome,
	Creations,
	Footer

} from '../components';

const Home = () => {
	return (
		<Fragment>
			<Banner />
			<InfoHome />
			<Creations />
			<Footer />
		</Fragment>
	)
}

export default Home;
