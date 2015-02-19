var React = require('react');

var AddtoCal = React.createClass({
  handleClick: function() {
    this.props.winAPI();
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleClick} id="friendButton">Add to Calendar</button>
        <div className="background Calendar"></div>
      </div>
    );
  }
});

module.exports = AddtoCal;
