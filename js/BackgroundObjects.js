'use strict';

var BackgroundCharacterObject = require('./BackgroundCharacterObject');

var React = require('react/addons');


var BackgroundObjects = React.createClass({
    render: function() {
      var i, target;
      return div({
        className: 'background-setting',
        // xmlns: 'http://www.w3.org/2000/svg',
        // viewBox: '0 0 40 40',
        children: (function() {
          var _i, _len, _ref1, _results;
          _ref1 = this.backgroundcharacterlist();
          _results = [];
          for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
            target = _ref1[i];
            _results.push(BackgroundCharacterObject({
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
    backgroundcharacterlist: function() {
      return [
        {
          accepts: ['heart']
        }
        // , {
        //   accepts: ['happy']
        // }
      ];
    },
  });


module.exports = BackgroundObjects;