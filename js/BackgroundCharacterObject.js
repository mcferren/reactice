'use strict';

var React = require('react/addons');


var BackgroundCharacterObject = React.createClass({
  render: function() {
    return div({
      className: 'background-character ',
      fill: '#000000',
      d: ""
    });
  }
});

module.exports = BackgroundCharacterObject;