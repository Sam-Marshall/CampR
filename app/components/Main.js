// Include React
var React = require("react");

// Creating the Main component
var Main = React.createClass({

  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">CampR!</h2>
            <p className="text-center">
              <em>Dah Best</em>
            </p>
          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;