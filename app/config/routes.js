// Inclue the React library
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from '../components/Main';
import Manager from '../components/Manager';

// Export the Routes
module.exports = (

  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route path="/Manager" component={Manager} />
    </div>
  </Router>
);