// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

export default class CodeSnippet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      snippetName: "",
      snippetCode: `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>My test page</title>
          </head>
          <body>
            <p>This is my page</p>
          </body>
        </html>`
    }
  }

  componentDidUpdate() {
  }

  render() {
    return (
          <div className="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone code-snippet">
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <div className="mdl-tabs__tab-bar">
                  <a href={"#Exercise-1-panel"} className="mdl-tabs__tab is-active">Exercise-1</a>
                  <a href={"#Exercise-2-panel"} className="mdl-tabs__tab">Exercise-2</a>
                  <a href={"#Exercise-3-panel"} className="mdl-tabs__tab">Exercise-3</a>
              </div>

              <div className="mdl-tabs__panel is-active" id="Exercise-1-panel">
                <pre>
                  <code className="language-markup">
                  {this.state.snippetCode}
                  </code>
                </pre>
              </div>
              <div className="mdl-tabs__panel" id="Exercise-2-panel">
                <ul>
                  <li>Tywin</li>
                  <li>Cersei</li>
                  <li>Jamie</li>
                  <li>Tyrion</li>
                </ul>
              </div>
              <div className="mdl-tabs__panel" id="Exercise-3-panel">
                <ul>
                  <li>Viserys</li>
                  <li>Daenerys</li>
                </ul>
              </div>
            </div>

          </div>
    );
  }
}

module.exports = CodeSnippet;
