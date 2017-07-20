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
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">
        
        <h4>Stackoverflow Component</h4>

        {/*Bare Minimal Proof of Concept Links Display*/}
        {/*Not sure of best way to make links display*/}
        {/*We can pull the title of the Stackoverflow page to make each link a bit more specific*/}

        <ol>
          <li><a href={this.state.links[0]} target="_blank">{this.state.query + ' Link'}</a></li>
          <li><a href={this.state.links[1]} target="_blank">{this.state.query + ' Link'}</a></li>
          <li><a href={this.state.links[2]} target="_blank">{this.state.query + ' Link'}</a></li>
          <li><a href={this.state.links[3]} target="_blank">{this.state.query + ' Link'}</a></li>
          <li><a href={this.state.links[4]} target="_blank">{this.state.query + ' Link'}</a></li>
        </ol>

      </div>
    );
  }
}