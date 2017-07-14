// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

var Resources = React.createClass({
  render: function() {
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-color--white  resources">

            <div className="mdl-grid external-sources">
              <div className="mdl-cell mdl-cell--12-col">
                <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                  <div className="mdl-tabs__tab-bar">
                      <a href={"#Videos-panel"} className="mdl-tabs__tab is-active">Videos</a>
                      <a href={"#Stackoverflow-panel"} className="mdl-tabs__tab">Stackoverflow</a>
                      <a href={"#MDN-panel"} className="mdl-tabs__tab">MDN</a>
                  </div>

                  <div className="mdl-tabs__panel is-active" id="Videos-panel">
                    <ul>
                      <li>Eddard</li>
                      <li>Catelyn</li>
                      <li>Robb</li>
                      <li>Sansa</li>
                      <li>Brandon</li>
                      <li>Arya</li>
                      <li>Rickon</li>
                    </ul>
                  </div>
                  <div className="mdl-tabs__panel" id="Stackoverflow-panel">
                    <ul>
                      <li>Tywin</li>
                      <li>Cersei</li>
                      <li>Jamie</li>
                      <li>Tyrion</li>
                    </ul>
                  </div>
                  <div className="mdl-tabs__panel" id="MDN-panel">
                    <ul>
                      <li>Viserys</li>
                      <li>Daenerys</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mdl-grid comments">
              <div className="mdl-cell mdl-cell--12-col comments-content">
                <h2>Comments</h2>
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
})

module.exports = Resources;