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
            <a href={"https://caniuse.com/"} target="_blank"><img className="eduPic" src={"https://super-monitoring.com/blog/wp-content/uploads/2016/09/caniuse.png"}/></a>
            <a href={"https://regex101.com/"} target="_blank"><img className="eduPic" src={"http://www.seocial.com/material/media/resource-regex101.jpg"}/></a>
            <a href={"https://www.youtube.com/playlist?list=PLgJ8UgkiorCnbVc-ZiCqgm3dw7Cvrewq2"} target="_blank"><img className="eduPic" src={"https://yt3.ggpht.com/-wSWcfHo7wZE/AAAAAAAAAAI/AAAAAAAAAAA/xH_Ohb-8Kyc/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"}/></a>
            <a href={"https://www.codeschool.com/courses/try-git"} target="_blank"><img className="eduPic" src={"https://d1ffx7ull4987f.cloudfront.net/images/achievements/large_badge/621/level-1-on-try-git-b54d1cd9fa940e4a3c1925056d38eca2.png"}/></a>
            <a href={"https://hackdesign.org/lessons"} target="_blank"><img className="eduPic" src={"https://d1qb2nb5cznatu.cloudfront.net/startups/i/198816-df3f53b6c2449f54f1e7b654ab4d6c00-medium_jpg.jpg?buster=1366685215"}/></a>
            <a href={"https://www.getpostman.com/"} target="_blank"><img className="eduPic" src={"https://www.getpostman.com/img/v2/logo-glyph.png"}/></a>
          </div>

      </div>
    );
  }
}