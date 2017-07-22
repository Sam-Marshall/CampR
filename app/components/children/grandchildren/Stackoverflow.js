import React from 'react';
import helpers from '../../utils/helpers';

export default class Stackoverflow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      links: [],
      query: "Javascript Arrays"
    };
  }
  componentDidMount() {
    {/*Once connected, set state to query props sent from parent here*/}
    helpers.stackoverflowQuery(this.state.query).then(function(data) {
      this.setState({links: data});
      console.log(this.state.links);
    }.bind(this));
  }
  render() {
    let results = this.state.links;
    let linksArray = [];

    for (var i=0; i < 5; i++){
        var listItem = <li key={i}><a href={results[i]} target="_blank">{this.state.query + ' Link'}</a></li>;
        linksArray.push(listItem);
    }

    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">

        {/*Bare Minimal Proof of Concept Links Display*/}
        {/*Not sure of best way to make links display*/}
        {/*We can pull the title of the Stackoverflow page to make each link a bit more specific*/}

        <ol>
          {linksArray}
        </ol>

      </div>
    );
  }
}