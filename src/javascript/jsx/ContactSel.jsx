var React = require('react');

var ContactSel = React.createClass({
  render: function() {
    return (
      <div>
        <button id="friendButton">Take a Friend</button>
        <div id="contactBg"></div>
      </div>
    );
  }
});

module.exports = ContactSel;
