import React from 'react';
import helpers from '../../utils/helpers';

export default class Comments extends React.Component{
  
  constructor(props) {
      super(props);
      this.state = {
          subtopicDbId: '',
          topicId: '',
          comment: '',
          commentsData: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.subtopicDbId !== this.state.subtopicDbId) {
          this.setState({
              subtopicDbId: nextProps.subtopicDbId,
              topicId: nextProps.topicId
          });
      }

  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.subtopicDbId !== this.state.subtopicDbId && typeof this.state.subtopicDbId != "undefined") {
          helpers.getComments(this.state.subtopicDbId)
              .then(function(response) {
                  console.log(response.data);
                  this.setState({ commentsData: response.data });
              }.bind(this));
      }

  }

  handleChange(event) {
      this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      let formattedComment = (this.state.comment).split('?').join('--');
      formattedComment = formattedComment.split('/').join('**');

      helpers.postComment(formattedComment, this.state.subtopicDbId)
          .then(response => {
              console.log('Comment added!');
              helpers.getComments(this.state.subtopicDbId)
                  .then(function(response) {
                      console.log(response.data);
                      this.setState({ commentsData: response.data });
                  }.bind(this));
          });
      this.setState({ comment: '' });
  }

  render() {

    let results = this.state.commentsData;
    let commentArray = [];

    for (var i = 0; i < results.length; i++) {
        var listItem = <div key={i}><span>{results[i].comment}</span>{/*<span>{results[i].createdAt}</span>*/}</div> ;
        commentArray.push(listItem);
    }

    return (
      <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-color--white resources">

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              value={this.state.comment}
              type="text"
              id="newComment"
              onChange={this.handleChange}
               required
            />
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="scrollBox">
          {commentArray}
        </div>
      </div>
    );
  }
}