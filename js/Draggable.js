'use strict';

var React = require('react/addons');


var Clickable = React.createClass({
    getInitialState: function() {
      return {
        mouseDown: false,
        dragging: false,
        dancing: true,
        present: true,
        changeEmotionState: this.props.changeEmotionState,
        characterlist: this.props.characterlist,
        emotionstate: this.props.emotionstate,
        animaltype: this.props.animaltype
      };
    },
    render: function() {
      return this.transferPropsTo(div({
        style: this.style(),
        className: (this.state.emotionstate ===  this.props.characterlist[this.props.index].emotionstate 
                        ? ' on-stage ' : ' off-stage '),
        children: this.props.children,
        onMouseDown: this.onMouseDown
      }));
    },
    style: function() {
      if (this.state.dragging) {
        return {
          position: 'absolute',
          left: this.state.left,
          top: this.state.top
        };
      } else {
        return {};
      }
    },
    onMouseDown: function(event) {
      var pageOffset;
      this.props.changeEmotionState(this.props.index, this.state.emotionstate);
      this.setState({
          present: false
      });
    },
    onMouseMove: function(event) {
      var deltaX, deltaY, distance, _base, _base1;
      deltaX = event.pageX - this.state.originX;
      deltaY = event.pageY - this.state.originY;
      distance = Math.abs(deltaX) + Math.abs(deltaY);
      if (!this.state.dragging && distance > DRAG_THRESHOLD) {
        this.setState({
          dragging: true
        });
        if (typeof (_base = this.props).onDragStart === "function") {
          _base.onDragStart(typeof (_base1 = this.props).dragData === "function" ? _base1.dragData() : void 0);
        }
      }
      if (this.state.dragging) {
        return this.setState({
          left: this.state.elementX + deltaX,
          top: this.state.elementY + deltaY
        });
      }
    },
    onMouseUp: function() {
      if (this.state.dragging) {
        this.removeEvents();
        this.props.onDragStop();

        return this.setState({
          dragging: false,
          left: event.pageX,
          top: event.pageY,
          dancing: true,
        });
      }
    },
    addEvents: function() {
      document.addEventListener('mousemove', this.onMouseMove);
      return document.addEventListener('mouseup', this.onMouseUp);
    },
    removeEvents: function() {
      document.removeEventListener('mousemove', this.onMouseMove);
      return document.removeEventListener('mouseup', this.onMouseUp);
    }
  });


module.exports = Clickable;