import React from 'react';
import helpers from '../../utils/helpers';
import Slider from 'react-slick';

export default class Stackoverflow extends React.Component{
  
  constructor(props) {
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
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.subtopicDbId !== this.state.subtopicDbId && typeof this.state.subtopicName !== "undefined") {
          helpers.stackoverflowQuery(this.state.topicName, this.state.subtopicName).then(function(data) {
              this.setState({ links: data });
              console.log(this.state.links);
          }.bind(this));
      }

  }

  render() {
    let results = this.state.links;
    let linksArray = [];

    if (typeof results[0] !== "undefined"){
      for (var i=0; i < 5; i++){
          var listItem = <li key={i}><a href={results[i].link} target="_blank">{results[i].title}</a></li>;
          linksArray.push(listItem);
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
      <div>
          <br />
          {linksArray}

      </div>
    );
  }
}