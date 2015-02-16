'use strict';

var SourceObjects = require('./SourceObjects');
var DropTargets = require('./DropTargets');
var BackgroundObjects = require('./BackgroundObjects');

var React = require('react/addons');


var HappyObjects = React.createClass({
	render: function() {
	  var i, target;
	  return div({
	    className: 'happy',
	    children: [
	      SourceObjects({
	        // onDragStart: this.props.onDragStart,
	        // onDragStop: this.props.onDragStop,
	        changeEmotionState: this.props.changeEmotionState,
	        characterlist: this.props.characterlist,
	        emotionstate: "happy"
	      }), 
	      DropTargets({
	        currentDragItem: this.props.currentDragItem
	      }),
	      BackgroundObjects({
	      })
	    ] 
	  });
	}
});


module.exports = HappyObjects;