import React from 'react';
import helpers from '../../utils/helpers';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

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
    helpers.youtubeQuery(this.state.query)
      .then(function(data) {
        this.setState({videos: data});
        console.log(this.state.videos);
      }.bind(this));
  }

  render() {

    let results = this.state.videos;
    let videoArray = [];

    for (var i=0; i < 10; i++){
        var listItem = <li key={i}><a href={videoURL + results[i]} target="_blank">{this.state.query + ' Video'}</a></li>;
        videoArray.push(listItem);
    }

    let settings = {
      dots: true,
      infinite:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">

      {/*Bare Minimal Proof of Concept Video Display*/}
      {/*It would be nice to show an image and be able to horz scroll through them*/}
      {/*We can get video thumbnails and titles from the AJAX call to YouTube*/}
        <Slider {...settings}>
          {videoArray}
        </Slider>
        {/*<YouTube
          videoId = {this.state.videos[0]}
        />*/}

      </div>
    );
  }
}