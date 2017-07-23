import React from 'react';

const courseraLink = "https://www.coursera.org/courses?languages=en&query=";
const edxLink = "https://www.edx.org/course?search_query=";

export default class Continue extends React.Component{
  
  constructor(props){
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
      console.log(nextProps);
  }

  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">
        
        <a href={courseraLink + this.state.topicName + ' ' + this.state.subtopicName} target="_blank"><img className="eduPic" src={"http://www.pekinpubliclibrary.org/wp-content/uploads/2015/03/education-coursera-logo-150x150.png"}/></a>
        <a href={edxLink + this.state.topicName + ' ' + this.state.subtopicName} target="_blank"><img className="eduPic" src={"https://www.edx.org/sites/default/files/theme/edx-logo-header.png"}/></a>

      </div>
    );
  }
}