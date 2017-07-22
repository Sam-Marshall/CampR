import React from 'react';
import helpers from '../../utils/helpers';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

const videoURL = "https://www.youtube.com/watch?v=";
let results;
let videoArray;

export default class Videos extends React.Component{
  
  constructor(props) {
      super(props);
      this.state = {
          videos: [],
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
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.subtopicName !== this.state.subtopicName && this.state.subtopicName !== "undefined") {
          helpers.youtubeQuery(this.state.topicName + ' ' + this.state.subtopicName)
              .then(function(data) {
                  this.setState({ videos: data });
                  console.log(this.state.videos);
              }.bind(this));
      }

  }

  render() {
    results = this.state.videos;
    videoArray = [];

    for (var i = 0; i < 5; i++) {
        var listItem = < li key = { i } > < a href = { videoURL + results[i] } target = "_blank" > { this.state.topicName + ' ' + this.state.subtopicName + ' Video' } < /a></li > ;
        videoArray.push(listItem);
    }

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">

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