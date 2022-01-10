import React, { Fragment } from 'react'
import GlobalStyles from "./styles/Global";

import { Home } from './pages';


const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Home />
    </Fragment>
     
  );
}

export default App;
