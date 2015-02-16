'use strict';

var CharacterObject = require('./CharacterObject');

var React = require('react/addons');


var SourceObjects = React.createClass({
	render: function() {
	  var i, object;
	  return div({
	    className: 'cast',
	    children: (function() {
	      var _i, _len, _ref1, _results;
	      _ref1 = this.props.characterlist;
	      _results = [];
	      for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
	        object = _ref1[i];


	        _results.push(CharacterObject({
	          charactername: object.charactername,
	          animaltype: object.animaltype,
	          index: i,
	          children: i + 1,
	          onDragStart: this.props.onDragStart,
	          onDragStop: this.props.onDragStop,
	          changeEmotionState: this.props.changeEmotionState,
	          characterlist: this.props.characterlist,
	          emotionstate: this.props.emotionstate
	        }));
	      }
	      return _results;
	    }).call(this)
	  });
	}
});



module.exports = SourceObjects;