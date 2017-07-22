import React from 'react';
import helpers from '../../utils/helpers';

import MDN from './MDN';
import Stackoverflow from './Stackoverflow';
import Videos from './Videos';

export default class ExternalSources extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {

    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
          <a href={"#Videos-panel"} onClick={""} className="mdl-tabs__tab is-active">Videos</a>
          <a href={"#Stackoverflow-panel"} className="mdl-tabs__tab">Stackoverflow</a>
          <a href={"#MDN-panel"} className="mdl-tabs__tab">MDN</a>
        </div>

        <div className="mdl-tabs__panel is-active" id="Videos-panel">
          <Videos />
        </div>

        <div className="mdl-tabs__panel" id="Stackoverflow-panel">
          <Stackoverflow />
        </div>

        <div className="mdl-tabs__panel" id="MDN-panel">
          <MDN />
        </div>
      </div>
    );
  }
}