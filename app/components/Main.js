// React Dependencies
import React from 'react';
import helpers from './utils/helpers';
import { Link } from 'react-router-dom';

// require components
const Overview = require('./children/Overview');
const CodeSnippet = require('./children/CodeSnippet');
const Resources = require('./children/Resources');

export default class Main extends React.Component{
  constructor() {
      super();
      this.state = {
          topicId: "1",
          subtopicId: "0",
          subtopicData: [],
          topicName: '',
          subtopicName: '',
          subtopicDbId: ''
      };
      this.setSubtopic = this.setSubtopic.bind(this);
  }

  componentDidMount() {
      helpers.getTopics(this.state.topicId)
          .then(function(response) {
              this.setState({
                  subtopicData: response.data[0].Subtopics,
                  topicName: response.data[0].name,
                  subtopicName: response.data[0].Subtopics[0].name,
                  subtopicDbId: response.data[0].Subtopics[0].id
              });
          }.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {
      console.log(this.state);
  }

  // Topic click handler
  handleClick(event) {
      event.preventDefault();
      let clickedTopicId = event.target.getAttribute('value');

      helpers.getTopics(clickedTopicId)
          .then(function(response) {
              console.log(response.data[0]);
              this.setState({
                  topicId: clickedTopicId,
                  topicName: response.data[0].name,
                  subtopicData: response.data[0].Subtopics,
                  subtopicName: response.data[0].Subtopics[0].name,
                  subtopicId: 0,
                  subtopicDbId: response.data[0].Subtopics[0].id
              });
          }.bind(this));
  }

  setSubtopic(i) {
      let clickedSubtopic = i;
      this.setState({ subtopicId: clickedSubtopic });
      helpers.getTopics(this.state.topicId)
          .then(function(response) {
              this.setState({
                  subtopicName: response.data[0].Subtopics[this.state.subtopicId].name,
                  subtopicDbId: response.data[0].Subtopics[this.state.subtopicId].id
              })
          }.bind(this));
  }

  render() {
    {/* Map through subtopics array and display names in sidebar */}
    let results = this.state.subtopicData;
    let subtopicNames = results.map((data, index) => {
      return (
        <div className="mdl-navigation__link" href={""} onClick={()=>this.setSubtopic(index)} key={index}>{data.name}</div>
      )
    });

    return (
      <div className="wrapper">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">CAMPR</span>
              <div className="mdl-layout-spacer"></div>
            </div>
          </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">CAMPR</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link sidebar-topic" href={""} value="1" onClick={(e) => this.handleClick(e)}>HTML</a>
            <a className="mdl-navigation__link sidebar-topic" href={""} value="2" onClick={(e) => this.handleClick(e)}>CSS</a>
            <a className="mdl-navigation__link sidebar-topic" href={""} value="3" onClick={(e) => this.handleClick(e)}>Javascript</a>
            {/* Including Subtopic names here*/}
            {subtopicNames}
          </nav>
        </div>

        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">

            <Overview subtopicId={this.state.subtopicId} subtopicData={this.state.subtopicData} topicName={this.state.topicName} />
            <CodeSnippet subtopicId={this.state.subtopicId} subtopicData={this.state.subtopicData} />
            <Resources subtopicName={this.state.subtopicName} topicName={this.state.topicName} topicId={this.state.topicId} subtopicDbId={this.state.subtopicDbId} />

            </div>
          </div>
        </main>
      </div>
    </div>
    );
  }
};
