// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

// require components
const Overview = require('./children/Overview');
const CodeSnippet = require('./children/CodeSnippet');
const Resources = require('./children/Resources');

var Main = React.createClass({
  render: function() {
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
            <a className="mdl-navigation__link" href={""}>Link</a>
            <a className="mdl-navigation__link" href={""}>Link</a>
            <a className="mdl-navigation__link" href={""}>Link</a>
            <a className="mdl-navigation__link" href={""}>Link</a>
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
});

module.exports = Main;