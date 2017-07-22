import React from 'react';
import helpers from '../../utils/helpers';

import MDN from './MDN';
import Stackoverflow from './Stackoverflow';
import Videos from './Videos';

export default class ExternalSources extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          subtopicName: '',
          topicName: ''
      };
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.subtopicName !== this.state.subtopicName) {
          this.setState({
              subtopicName: nextProps.subtopicName,
              topicName: nextProps.topicName
          })
      }
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
          <Videos subtopicName={this.state.subtopicName} topicName={this.state.topicName} />
        </div>

        <div className="mdl-tabs__panel" id="Stackoverflow-panel">
          <Stackoverflow subtopicName={this.state.subtopicName} topicName={this.state.topicName} />
        </div>

        <div className="mdl-tabs__panel" id="MDN-panel">
          <MDN />
        </div>
      </div>
    );
  }
}