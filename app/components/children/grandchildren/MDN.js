import React from 'react';
let MDNlink = "https://developer.mozilla.org/en-US/search?q=";
let MDNimage = "https://tentacu.files.wordpress.com/2015/03/mdn_logo-wordmark-full_color.jpg";

export default class MDN extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          link: '',
          subtopicName: '',
          topicName: '',
          subtopicDbId: ''
      };
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.subtopicDbId !== this.state.subtopicDbId) {
          this.setState({
              subtopicName: nextProps.subtopicName,
              topicName: nextProps.topicName,
              subtopicDbId: nextProps.subtopicDbId
          })
      }
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.subtopicDbId !== this.state.subtopicDbId && typeof this.state.subtopicName !== "undefined") {
        this.setState({
          link: MDNlink + this.state.subtopicName + '+' + this.state.topicName
        });
      }
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white">
        <a href={this.state.link} target="_blank">
          <br/>
          <br/>
          <img className="MDNimage" src={MDNimage}/>
        </a>
      </div>
    );
  }
}