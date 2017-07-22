import React from 'react';
import { Link } from 'react-router-dom';

import Continue from './grandchildren/Continue';
import ExternalSources from './grandchildren/ExternalSources';

export default class Resources extends React.Component{
  
  constructor(props) {
      super(props);
      this.state = {
          expanded: true,
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

  toggleContent(event){
    event.preventDefault();
    this.setState({expanded: !(this.state.expanded)});
    console.log(this.state.expanded);
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white  resources">

          <div className="mdl-grid external-sources resource_col">
            <div className="mdl-cell mdl-cell--12-col">
              <h4 onClick={(e) => this.toggleContent(e)}>External Resources</h4>
              <ExternalSources subtopicName={this.state.subtopicName} topicName={this.state.topicName} />
            </div>
          </div>

          <div className="mdl-grid comments resource_col">
            <div className="mdl-cell mdl-cell--12-col comments-content">
              <h4>Comments</h4>
            </div>
          </div>

          <div className="mdl-grid moocs resource_col">
            <div className="mdl-cell mdl-cell--12-col">
              <h4>Continue Your Education</h4>
              <Continue subtopicName={this.state.subtopicName} topicName={this.state.topicName} />
            </div>
          </div>

      </div>
    );
  }
}

module.exports = Resources;
