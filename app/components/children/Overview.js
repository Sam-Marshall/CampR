// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph1: "",
      paragraph2: "",
      paragraph3: ""
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    this.setState({
      paragraph1: this.props.subTopicData[this.props.subTopicId].paragraph1,
      paragraph2: this.props.subTopicData[this.props.subTopicId].paragraph2,
      paragraph3: this.props.subTopicData[this.props.subTopicId].paragraph3
    })
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--3-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white overview">
        <h2>HTML & CSS</h2>
        <img className="mdl-cell mdl-cell--12-col" src={"https://www.macitynet.it/wp-content/uploads/2015/02/vr-keyboard-1024x856.png"} />
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
