import React from 'react';

const courseraLink = "https://www.coursera.org/courses?languages=en&query=";
const edxLink = "https://www.edx.org/course?search_query=";

export default class Continue extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      links: [],
      query: "Javascript Arrays"
    };
  }
  componentDidMount() {
    {/*Once connected, set state to query props sent from parent here*/}
  }
  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">
        
        <a href={courseraLink + this.state.query} target="_blank"><img className="eduPic" src={"http://www.pekinpubliclibrary.org/wp-content/uploads/2015/03/education-coursera-logo-150x150.png"}/></a>
        <a href={edxLink + this.state.query} target="_blank"><img className="eduPic" src={"https://www.edx.org/sites/default/files/theme/edx-logo-header.png"}/></a>

      </div>
    );
  }
}