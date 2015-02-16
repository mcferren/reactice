'use strict';

var React = require('react/addons');


PathNodeFrameObject = React.createClass({
	render: function() {
	  return div({
	    className: this.props.charactername + " " + this.props.reelindex + " headline",
	    children: div({children:this.props.emotionstate + " " + this.props.charactername})
	  });
	}
});


module.exports = PathNodeFrameObject;