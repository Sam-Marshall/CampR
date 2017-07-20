import React from 'react';

export default class MDN extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      links: [],
      query: "Javascript Arrays"
    };
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">
        
        <h4>MDN Component</h4>

      </div>
    );
  }
}