// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

export default class CodeSnippet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      snippetName: "",
      snippetCode: ""
    }
  }

  componentDidUpdate() {
    this.setState({
      snippetName: this.props.subtopicData[this.props.subtopicId].Snippets[0].name,
      snippetCode: this.props.subtopicData[this.props.subtopicId].Snippets[0].code
    });
    Prism.highlightAll();
  }

  render() {
    return (
          <div className="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone code-snippet">
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <div className="mdl-tabs__tab-bar">
                <a href={"#Exercise-1-panel"} className="mdl-tabs__tab is-active">{this.state.snippetName}</a>
                <a href={"#Exercise-2-panel"} className="mdl-tabs__tab">{this.state.snippetName}</a>
                <a href={"#Exercise-3-panel"} className="mdl-tabs__tab">{this.state.snippetName}</a>
              </div>

              <div className="mdl-tabs__panel is-active" id="Exercise-1-panel">
                <pre>
                  <code className="language-markup">
                    {this.state.snippetCode}
                  </code>
                </pre>
              </div>
              <div className="mdl-tabs__panel" id="Exercise-2-panel">
                <pre>
                  <code className="language-markup">
                    {this.state.snippetCode}
                  </code>
                </pre>
              </div>
              <div className="mdl-tabs__panel" id="Exercise-3-panel">
                <pre>
                  <code className="language-markup">
                    {this.state.snippetCode}
                  </code>
                </pre>
              </div>
            </div>

          </div>
    );
  }
}

module.exports = CodeSnippet;
