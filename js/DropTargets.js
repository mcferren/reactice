'use strict';

var DropTarget = require('./DropTarget');

var React = require('react/addons');


var DropTargets = React.createClass({
  render: function(type) {
    var i, target;
    return div({
      className: 'emotionlist',
      children: (function() {
        var _i, _len, _ref1, _results;
        _ref1 = this.dropzoneobjects();
        _results = [];
        for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
          target = _ref1[i];
          _results.push(DropTarget({
            target: target,
            index: i,
            currentDragItem: this.props.currentDragItem,
            onDrop: this.props.onDrop
          }));
        }
        return _results;
      }).call(this)
    });
  },
  dropzoneobjects: function() {
    return [
      {
        accepts: ['character', 'donald']
      }
      // , {
      //   accepts: ['happy']
      // }
    ];
  },
});


module.exports = DropTargets;