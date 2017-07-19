// React Dependencies
import React from 'react';
import { withRouter } from 'react-router';
import helpers from './utils/helpers';
import { Link } from 'react-router-dom';

// require components
const Overview = require('./children/Overview');
const CodeSnippet = require('./children/CodeSnippet');
const Resources = require('./children/Resources');

export default class Main extends React.Component{
  constructor(){
    super();
    this.state = {};
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
                <a className="mdl-navigation__link" href={""}>Link</a>
                <a className="mdl-navigation__link" href={""}>Link</a>
                <a className="mdl-navigation__link" href={""}>Link</a>
                <a className="mdl-navigation__link" href={""}>Link</a>
              </nav>
            </div>
          </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">CAMPR</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href={""} value="HTML">HTML</a>
            <a className="mdl-navigation__link" href={""} value="CSS">CSS</a>
            <a className="mdl-navigation__link" href={""} value="Javascript">Javascript</a>
          </nav>
        </div>

        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">

            <Overview />
            <CodeSnippet />
            <Resources />

            </div>
          </div>
        </main>
      </div>
    </div>
    );
  }
};