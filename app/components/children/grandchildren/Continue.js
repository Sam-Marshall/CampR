import React from 'react';

const courseraLink = "https://www.coursera.org/courses?languages=en&query=";
const edxLink = "https://www.edx.org/course?search_query=";
const udemyLink = "https://www.udemy.com/courses/search/?ref=home&src=ukw&q=";
let codeAcademyLink;
let treehouseLink;
let codeAvengersLink;

export default class Continue extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      links: [],
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
      console.log(nextProps);
  }

  render() {

    switch(this.state.topicName){
      case 'HTML':
        codeAcademyLink = 'https://www.codecademy.com/courses/html-one-o-one';
        treehouseLink = 'https://teamtreehouse.com/library/topic:html';
        codeAvengersLink = 'https://www.codeavengers.com/profile#html-css';
        break;
      case 'CSS':
        codeAcademyLink = 'https://www.codecademy.com/courses/css-coding-with-style';
        treehouseLink = 'https://teamtreehouse.com/library/topic:css';
        codeAvengersLink = 'https://www.codeavengers.com/profile#html-css';
        break;
      case 'JavaScript':
        codeAcademyLink = 'https://www.codecademy.com/learn/javascript';
        treehouseLink = 'https://teamtreehouse.com/library/topic:javascript';
        codeAvengersLink = 'https://www.codeavengers.com/profile#javascript';
        break;
      default:
        codeAcademyLink = 'https://www.codecademy.com/';
        treehouseLink = 'https://teamtreehouse.com/library';
        codeAvengersLink = 'https://www.codeavengers.com/profile';
        break;
    }
    
    return (

      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
          
          <div className="mdl-tabs__tab-bar">
            <a href={"#Courses-panel"} onClick={""} className="mdl-tabs__tab is-active">Courses</a>
            <a href={"#Helpful-panel"} className="mdl-tabs__tab">Helpful Resources</a>
          </div>
      
          <div className="mdl-tabs__panel is-active" id="Courses-panel">
            <br />
            <a href={courseraLink + this.state.topicName + '%20' + this.state.subtopicName} target="_blank"><img className="eduPic" src={"https://upload.wikimedia.org/wikipedia/commons/e/e5/Coursera_logo.PNG"}/></a>
            <a href={edxLink + this.state.topicName + '%20' + this.state.subtopicName} target="_blank"><img className="eduPic" src={"https://www.edx.org/sites/default/files/theme/edx-logo-header.png"}/></a>
            <a href={codeAcademyLink} target="_blank"><img className="eduPic" src={"https://p14.zdassets.com/hc/settings_assets/1030455/200272088/1muBAt6udX37m4Ihlik09w-CC_Logotype_Lockup_Blue_Alpha.png"}/></a>
            <a href={udemyLink + this.state.topicName + '%20' + this.state.subtopicName} target="_blank"><img className="eduPic" src={"https://blog.udemy.com/wp-content/uploads/2010/12/udemy-logo-1.jpg"}/></a>
            <a href={treehouseLink} target="_blank"><img className="eduPic" src={"https://qph.ec.quoracdn.net/main-qimg-31ed8b0c424c8708f0684e669a01f7d5"}/></a>
            <a href={codeAvengersLink} target="_blank"><img className="eduPic" src={"https://www.codeavengers.com/image/code-avengers_ca-icon.png"}/></a>
          </div>

          <div className="mdl-tabs__panel" id="Helpful-panel">
            <br />
            
            <div className="mdl-cell mdl-cell--6-col">
              <ul>
                <li><a href={"https://caniuse.com/"}>CanIUse</a></li>
              </ul>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              <ul>
                <li><a href={"https://caniuse.com/"}>CanIUse</a></li>
              </ul>
            </div>

          </div>

      </div>
    );
  }
}