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
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.subtopicDbId !== this.state.subtopicDbId && typeof this.state.subtopicName !== "undefined") {
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

    if (typeof results[0] !== "undefined"){

      for (var i = 0; i < 10; i++) {
          var listItem = <div key={i}><ReactPlayer width='100%' height='150px' url= {videoURL + this.state.videos[i]} controls/><br/></div>
          videoArray.push(listItem);
      }

    }

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white">

        {videoArray.length > 0 ? <Slider {...settings}>{videoArray}</Slider>: null}

      </div>
    );
  }
}