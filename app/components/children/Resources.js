import React from 'react';
import { Link } from 'react-router-dom';

import Stackoverflow from './grandchildren/Stackoverflow';
import Videos from './grandchildren/Videos';
import MDN from './grandchildren/MDN';

export default class Resources extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white  resources">

            <div className="mdl-grid external-sources">
              <div className="mdl-cell mdl-cell--12-col">
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
              </div>
            </div>

            <div className="mdl-grid comments">
              <div className="mdl-cell mdl-cell--12-col comments-content">
                <h4>Comments</h4>
              </div>
            </div>

            <div className="mdl-grid moocs">
              <div className="mdl-cell mdl-cell--12-col">
                <h4>Continue your learning</h4>
              </div>
            </div>

          </div>
    );
  }
}

module.exports = Resources;
