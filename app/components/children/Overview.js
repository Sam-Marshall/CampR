// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicName: "",
      subtopicId: "",
      subtopicName: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      image: ""
    };
  }

  componentDidUpdate() {
    if (this.state.subtopicId !== this.props.subtopicId || this.state.topicName !== this.props.topicName) {
      this.setState({
        topicName: this.props.topicName,
        subtopicId: this.props.subtopicId,
        subtopicName: this.props.subtopicData[this.props.subtopicId].name,
        paragraph1: this.props.subtopicData[this.props.subtopicId].paragraph1,
        paragraph2: this.props.subtopicData[this.props.subtopicId].paragraph2,
        paragraph3: this.props.subtopicData[this.props.subtopicId].paragraph3,
        image: this.props.subtopicData[this.props.subtopicId].image
      })
    }
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--3-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white overview">
        <h2 className="topic-heading">{this.state.topicName}</h2>
        <img className="mdl-cell mdl-cell--12-col overview-img" src={this.state.image} />
        <h4>{this.state.subtopicName}</h4>
        <p>
          {this.state.paragraph1}
        </p>
        <p>
          {this.state.paragraph2}
        </p>
        <p>
          {this.state.paragraph3}
        </p>
      </div>
    );
  }
}

module.exports = Overview;
