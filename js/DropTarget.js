'use strict';

var React = require('react/addons');


var DropTarget = React.createClass({
      getInitialState: function() {
        return {
          hover: false
        };
      },
      render: function() {
        return div({
          className: this.classes(),
          onMouseEnter: (function(_this) {
            return function() {
              return _this.setState({
                hover: true
              });
            };
          })(this),
          onMouseLeave: (function(_this) {
            return function() {
              return _this.setState({
                hover: false
              });
            };
          })(this),
          onMouseUp: this.onDrop
        });
      },
      classes: function() {
        // return ['dnd-drop-target', "" + (this.props.target.accepts.join(' ')), this.active() ? 'active' : void 0, this.active() && this.props.currentDragItem.type === 'green' ? 'active-green' : void 0, this.active() && this.props.currentDragItem.type === 'blue' ? 'active-blue' : void 0, this.disabled() ? 'disabled' : void 0, this.state.hover ? 'hover' : void 0].join(' ');
        return ['dnd-drop-target '];
      },
      active: function() {
        var _ref1;
        return this.props.currentDragItem && (_ref1 = this.props.currentDragItem.type, __indexOf.call(this.props.target.accepts, _ref1) >= 0);
      },
      disabled: function() {
        var _ref1;
        return this.props.currentDragItem && (_ref1 = this.props.currentDragItem.type, __indexOf.call(this.props.target.accepts, _ref1) < 0);
      },
      acceptsDescription: function() {
        if (this.props.target.accepts.length > 0) {
          return this.props.target.accepts.join(' & ');
        } else {
          return 'nothing';
        }
      },
      onDrop: function() {
        var _base;
        if (this.active()) {
          return typeof (_base = this.props).onDrop === "function" ? _base.onDrop({
            index: this.props.index + 1
          }) : void 0;
        }
      }
    });


module.exports = DropTarget;