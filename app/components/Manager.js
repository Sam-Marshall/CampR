// React Dependencies
import React from 'react';
import { withRouter } from 'react-router';
import helpers from './utils/helpers';

export default class Manager extends React.Component{

  // static propTypes = {
  //   router: React.PropTypes.object.isRequired
  // }

  constructor() {
    super();

    this.state = {
      topic: "",
      description: ""
    };

    // Bind this to the functions
    // this.toggleMenu = this.toggleMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  topicCollect(){
  }

  render() {
    return (
      <div className="wrapper">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">

              <span className="mdl-layout-title">CAMPR</span>
              
              <div className="mdl-layout-spacer"></div>

              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href={""}>Link</a>
                <a className="mdl-navigation__link" href={""}>Link</a>
                <a className="mdl-navigation__link" href={""}>Link</a>
                <a className="mdl-navigation__link" href={""}>Link</a>
              </nav>
            </div>
          </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">CAMPR</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href={""}>Link</a>
            <a className="mdl-navigation__link" href={""}>Link</a>
            <a className="mdl-navigation__link" href={""}>Link</a>
            <a className="mdl-navigation__link" href={""}>Link</a>
          </nav>
        </div>

        <main className="mdl-layout__content">
          <div className="page-content">

            <div className="mdl-grid">
              <form className="col s12" id="topicForm" onsubmit={this.topicCollect}>
                <h6>Topic Form</h6>
                <div className="row">
                  <div className="input-field col s6">
                    <input placeholder="Ex: HTML" id="topic_name" type="text" className="validate"/>
                    <label htmlFor="topic_name">Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder="Ex: Cool Topic" id="topic_description" type="text" className="validate"/>
                    <label htmlFor="topic_description">Description</label>
                  </div>
                  <button type="submit" value="Submit">Submit</button>
                </div>
              </form>
            </div>

            <div className="mdl-grid">
              <form className="col s12" id="subtopicForm" onsubmit="">
                <h6>Subtopic Form</h6>
                <div className="row">
                  <div className="input-field col s6">
                    <input placeholder="Ex: Tags" id="subtopic_name" type="text" className="validate"/>
                    <label htmlFor="subtopic_name">Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder="Ex: http://coolimage1.com" id="subtopic_image" type="text" className="validate"/>
                    <label htmlFor="subtopic_image">Image</label>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder="Love this subtopic" id="subtopic_desc" type="text" className="validate"/>
                    <label htmlFor="subtopic_desc">Description</label>
                  </div>
                  <button type="submit" value="Submit">Submit</button>
                </div>
              </form>
            </div>

          </div>
        </main>
      </div>
    </div>
    );
  }
};