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
      subTopicId: "0",
      subTopicData: {}
    };
  }

  // Topic click handler
  handleClick(event) {
    event.preventDefault();
    let clickedTopicId = event.target.getAttribute('value');

    helpers.getSubTopics(clickedTopicId)
    .then(function(response) {
      console.log(response.data);
      this.setState({
        topicId: clickedTopicId,
        subTopicData: response.data
      });
    }.bind(this));
  }

  render() {
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
            <a className="mdl-navigation__link" onClick={""} value="HTML">HTML</a>
            <a className="mdl-navigation__link" onClick={""} value="CSS">CSS</a>
            <a className="mdl-navigation__link" onClick={""} value="Javascript">Javascript</a>
          </nav>
        </div>

        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">

            <Overview subTopicId={this.state.subTopicId} subTopicData={this.state.subTopicData} />
            <CodeSnippet subTopicId={this.state.subTopicId} subTopicData={this.state.subTopicData}/>
            <Resources subTopicId={this.state.subTopicId} />

            </div>
          </div>
        </main>
      </div>
    </div>
    );
  }
};
