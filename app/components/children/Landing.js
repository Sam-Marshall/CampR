// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {showLanding: true}
  }

  handleClick() {
    this.setState({showLanding: false});
  }

  render() {
    let landingDiv = null;
    if (this.state.showLanding) {
      landingDiv = (
        <div className="landing-bg">
          <h1 className="landing-title">CAMPR</h1>
          <h3 className="landing-tagline">Your coding camp site</h3>
          <div className="landing-btn" onClick={(e) => this.handleClick(e)}><span>Let's get started</span></div>
        </div>
      );
    }

    return(
      <div>
        {landingDiv}
      </div>
    )
  }
}

module.exports = Landing;
