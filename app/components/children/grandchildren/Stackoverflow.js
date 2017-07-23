import React from 'react';
import helpers from '../../utils/helpers';

export default class Stackoverflow extends React.Component{
  
  constructor(props) {
      super(props);
      this.state = {
          links: [],
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

  componentDidUpdate(prevProps, prevState) {
      if (prevState.subtopicName !== this.state.subtopicName && typeof this.state.subtopicName !== "undefined") {
          helpers.stackoverflowQuery(this.state.topicName + ' ' + this.state.subtopicName).then(function(data) {
              this.setState({ links: data });
              console.log(this.state.links);
          }.bind(this));
      }
  }

  render() {
    let results = this.state.links;
    let linksArray = [];

    for (var i=0; i < 5; i++){
        var listItem = <li key={i}><a href={results[i]} target="_blank">{this.state.topicName + ' ' + this.state.subtopicName + ' Link'}</a></li>;
        linksArray.push(listItem);
    }

    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">

        <ol>
          {linksArray}
        </ol>

      </div>
    );
  }
}