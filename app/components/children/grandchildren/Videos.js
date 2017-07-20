import React from 'react';
import helpers from '../../utils/helpers';

const videoURL = "https://www.youtube.com/watch?v=";

export default class Videos extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      query: "Javascript Arrays"
    };
  }
  componentDidMount(){
  {/*Once connected, set state to query props sent from parent here*/}
    helpers.youtubeQuery(this.state.query).then(function(data) {
      this.setState({videos: data});
      console.log(this.state.videos);
    }.bind(this));
  }
  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">
        
        <h4>Video Component</h4>

      {/*Bare Minimal Proof of Concept Video Display*/}
      {/*It would be nice to show an image and be able to horz scroll through them*/}
      {/*We can get video thumbnails and titles from the AJAX call to YouTube*/}
        <ol>
          <li><a href={videoURL + this.state.videos[0]} target="_blank">{this.state.query + ' Video'}</a></li>
          <li><a href={videoURL + this.state.videos[1]} target="_blank">{this.state.query + ' Video'}</a></li>
          <li><a href={videoURL + this.state.videos[2]} target="_blank">{this.state.query + ' Video'}</a></li>
          <li><a href={videoURL + this.state.videos[3]} target="_blank">{this.state.query + ' Video'}</a></li>
          <li><a href={videoURL + this.state.videos[4]} target="_blank">{this.state.query + ' Video'}</a></li>
        </ol>
        {/*<YouTube
          videoId = {this.state.videos[0]}
        />*/}

      </div>
    );
  }
}