// React Dependencies
const React = require('react');
const ReactDOM = require('react-dom');

var Overview = React.createClass({
  render: function() {
    return (
      <div className="mdl-cell mdl-cell--3-col mdl-cell--12-col-tablet mdl-color--white overview">
        <h2>HTML & CSS</h2>
        <img className="mdl-cell mdl-cell--12-col" src={"https://www.macitynet.it/wp-content/uploads/2015/02/vr-keyboard-1024x856.png"} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec luctus lorem. Proin id ultricies metus. Etiam id dolor et felis porta molestie dapibus eget erat. Nullam vehicula luctus nisi non consequat. Quisque auctor placerat finibus. Duis imperdiet posuere elit. Integer dapibus sodales leo, sit amet commodo mi bibendum ut. Sed cursus dolor non lorem dignissim iaculis. Curabitur sapien lorem, consectetur id pellentesque et, fermentum sit amet eros. Suspendisse velit sem, tempus ut elementum at, lobortis vel sem. Integer molestie, neque aliquam rhoncus dapibus, turpis mi maximus ante, at luctus lacus erat ut nulla. Vestibulum lacinia venenatis dui. Donec euismod faucibus turpis eget pharetra. Donec sodales nulla nec urna consequat, ut fermentum neque gravida. Sed enim libero, luctus non velit sed, dictum congue nunc. Pellentesque viverra diam gravida tortor dictum, in consectetur massa lacinia. Vestibulum nec varius eros, id ultrices mauris. Sed euismod felis odio, et dictum magna pharetra a. Phasellus auctor porttitor nisl non rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sit amet turpis dapibus, scelerisque ante et, consequat libero. Cras fermentum lorem a felis scelerisque, ac aliquam ante molestie.
        </p>
      </div>
    );
  }
})

module.exports = Overview;
