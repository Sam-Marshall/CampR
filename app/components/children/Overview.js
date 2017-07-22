// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtopicId: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      image: ""
    };
  }

  componentDidUpdate() {
    if (this.state.subtopicId !== this.props.subtopicId) {
      this.setState({
        subtopicId: this.props.subtopicId,
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
        <h2>HTML & CSS</h2>
        <img className="mdl-cell mdl-cell--12-col" src={this.state.image} />
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
