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
          topicName: '',
          subtopicDbId: ''
      };
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.subtopicDbId !== this.state.subtopicDbId) {
          this.setState({
              subtopicName: nextProps.subtopicName,
              subtopicDbId: nextProps.subtopicDbId,
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
            <Videos subtopicName={this.state.subtopicName} topicName={this.state.topicName} subtopicDbId={this.state.subtopicDbId}/>
          </div>

          <div className="mdl-tabs__panel" id="Stackoverflow-panel">
            <Stackoverflow subtopicName={this.state.subtopicName} topicName={this.state.topicName} subtopicDbId={this.state.subtopicDbId}/>
          </div>

          <div className="mdl-tabs__panel" id="MDN-panel">
            <MDN subtopicName={this.state.subtopicName} topicName={this.state.topicName} subtopicDbId={this.state.subtopicDbId}/>
          </div>
        </div>
    );
  }
}