// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

export default class CodeSnippet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      subtopicName: "",
      subtopicId: "",
      subtopicDbId: "",
      snippetCode1: "",
      snippetCode2: "",
      snippetCode3: ""
    }
  }

  componentDidUpdate() {
    if (this.props.subtopicDbId !== this.state.subtopicDbId) {
      let codeLanguage = "";
      if (this.props.topicName === "HTML") {
        codeLanguage = "markup"
      } else if (this.props.topicName === "CSS") {
        codeLanguage = "css"
      } else {
        codeLanguage = "javascript"
      };

      this.setState({
        subtopicName: this.props.subtopicName,
        subtopicId: this.props.subtopicId,
        subtopicDbId: this.props.subtopicDbId,
        snippetCode1: this.props.subtopicData[this.props.subtopicId].Snippets[0].code1,
        snippetCode2: this.props.subtopicData[this.props.subtopicId].Snippets[0].code2,
        snippetCode3: this.props.subtopicData[this.props.subtopicId].Snippets[0].code3,
        snippetLanguage: codeLanguage
      });
    }
    Prism.highlightAll();
  }

  render() {
    return (
          <div className="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone code-snippet">
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <div className="mdl-tabs__tab-bar">
                <a href={"#Exercise-1-panel"} className="mdl-tabs__tab is-active">Exercise 1</a>
                <a href={"#Exercise-2-panel"} className="mdl-tabs__tab">Exercise 2</a>
                <a href={"#Exercise-3-panel"} className="mdl-tabs__tab">Exercise 3</a>
              </div>

              <div className="mdl-tabs__panel is-active" id="Exercise-1-panel">
                <pre><code className={`language-${this.state.snippetLanguage}`}>
                    {this.state.snippetCode1}
                </code></pre>
              </div>
              <div className="mdl-tabs__panel" id="Exercise-2-panel">
                <pre>
                  <code className={`language-${this.state.snippetLanguage}`}>
                    {this.state.snippetCode2}
                  </code>
                </pre>
              </div>
              <div className="mdl-tabs__panel" id="Exercise-3-panel">
                <pre>
                  <code className={`language-${this.state.snippetLanguage}`}>
                    {this.state.snippetCode3}
                  </code>
                </pre>
              </div>
            </div>

          </div>
    );
  }
}

module.exports = CodeSnippet;
