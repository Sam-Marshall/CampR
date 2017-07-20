// Inclue the React library
import React from 'react';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main';
import Videos from '../components/children/grandchildren/Videos';
import Stackoverflow from '../components/children/grandchildren/Stackoverflow';

// Export the Routes
module.exports = (

  <HashRouter>
    <div>
		<Switch>
	      	<Route path="/" component={Main}/>
    	</Switch>
    </div>
  </HashRouter>
);