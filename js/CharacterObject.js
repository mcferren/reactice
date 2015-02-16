'use strict';

var PathNodeFrameObject = require('./PathNodeFrameObject');
var Clickable = require('./Clickable');

var React = require('react/addons');


var CharacterObject = React.createClass({
    render: function() {
      return Clickable({
        className: "character " + this.props.animaltype,
        children: (function() {
          var _i, _len, _ref1, _results;
          _ref1 = this.pathnodeframes();
          _results = [];
          for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
            object = _ref1[i];
            _results.push(PathNodeFrameObject({
              reelindex: object.reelindex,
              charactername: this.props.charactername,
              animaltype: this.props.animaltype,
              index: i + 1,
              children: i + 1,
              changeEmotionState: this.props.changeEmotionState,
              onDragStart: this.props.onDragStart,
              onDragStop: this.props.onDragStop,
              emotionstate: this.props.emotionstate
            }));
          }
          return _results;
        }).call(this),
        onDragStart: this.props.onDragStart,
        onDragStop: this.props.onDragStop,
        dragData: this.dragData,
        changeEmotionState: this.props.changeEmotionState,
        characterlist: this.props.characterlist,
        emotionstate: this.props.emotionstate,
        animaltype: this.props.animaltype,
        index: this.props.index
      });
    },
    dragData: function() {
      return {
        type: this.props.type,
        index: this.props.index
      };
    },
    pathnodeframes: function() {
      return [
        {
          reelindex: ['zero'] // not sure how this cal coordinate with CSS Frames to dunamicly create scenes?
        }
      ];
    }
  });


module.exports = CharacterObject;