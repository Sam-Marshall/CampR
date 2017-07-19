// Inclue the React library
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from '../components/Main';

// Export the Routes
module.exports = (

  <Router>
    <div>
      <Route path="/" component={Main} />
    </div>
  </Router>
);