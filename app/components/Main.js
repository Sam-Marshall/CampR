// React Dependencies
import React from 'react';
import helpers from './utils/helpers';
import { Link } from 'react-router-dom';

// require components
const Overview = require('./children/Overview');
const CodeSnippet = require('./children/CodeSnippet');
const Resources = require('./children/Resources');

export default class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      topicId: "1",
      subtopicId: "0",
      subtopicData: []
    };
    this.setSubtopic = this.setSubtopic.bind(this);
  }

  componentDidMount() {
    helpers.getSubtopics(this.state.topicId)
    .then(function(response) {
      console.log(response.data);
      this.setState({
        subtopicData: response.data
      });
    }.bind(this));
  }

  // Topic click handler
  handleClick(event) {
    event.preventDefault();
    let clickedTopicId = event.target.getAttribute('value');

    helpers.getSubtopics(clickedTopicId)
    .then(function(response) {
      console.log(response.data);
      this.setState({
        topicId: clickedTopicId,
        subtopicData: response.data
      });
    }.bind(this));
  }

  setSubtopic(i) {
    let clickedSubtopic = i;
    this.setState({ subtopicId: clickedSubtopic });
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

              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href={""} value="1" onClick={(e) => this.handleClick(e)}>HTML</a>
                <a className="mdl-navigation__link" href={""} value="2" onClick={(e) => this.handleClick(e)}>CSS</a>
                <a className="mdl-navigation__link" href={""} value="3" onClick={(e) => this.handleClick(e)}>Javascript</a>
              </nav>
            </div>
          </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">CAMPR</span>
          <nav className="mdl-navigation">
            {/* Including Subtopic names here*/}
            {subtopicNames}
          </nav>
        </div>

        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">

            <Overview subtopicId={this.state.subtopicId} subtopicData={this.state.subtopicData} />
            <CodeSnippet subtopicId={this.state.subtopicId} subtopicData={this.state.subtopicData}/>
            <Resources subtopicId={this.state.subtopicId} />

            </div>
          </div>
        </main>
      </div>
    </div>
    );
  }
};
