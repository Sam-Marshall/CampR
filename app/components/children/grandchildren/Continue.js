import React from 'react';

const courseraLink = "https://www.coursera.org/courses?languages=en&query=";
const edxLink = "https://www.edx.org/course?search_query=";
let codeAcademyLink;

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

    switch(this.state.topicName){
      case 'HTML':
        codeAcademyLink = 'https://www.codecademy.com/courses/html-one-o-one';
        break;
      case 'CSS':
        codeAcademyLink = 'https://www.codecademy.com/courses/css-coding-with-style';
        break;
      case 'Javascript':
        codeAcademyLink = 'https://www.codecademy.com/learn/javascript';
        break;
      default:
        codeAcademyLink = 'https://www.codecademy.com/';
        break;
    }
    
    return (
      
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources educationSection">
        
        <a href={courseraLink + this.state.topicName + ' ' + this.state.subtopicName} target="_blank"><img className="eduPic" src={"https://upload.wikimedia.org/wikipedia/commons/e/e5/Coursera_logo.PNG"}/></a>
        <a href={edxLink + this.state.topicName + ' ' + this.state.subtopicName} target="_blank"><img className="eduPic" src={"https://www.edx.org/sites/default/files/theme/edx-logo-header.png"}/></a>
        <a href={codeAcademyLink} target="_blank"><img className="eduPic" src={"https://p14.zdassets.com/hc/settings_assets/1030455/200272088/1muBAt6udX37m4Ihlik09w-CC_Logotype_Lockup_Blue_Alpha.png"}/></a>

      </div>
    );
  }
}