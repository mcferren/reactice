'use strict';

var HappyObjects = require('./HappyObjects');
var SadObjects = require('./SadObjects');

var React = require('react/addons');



var ReacticeApp = React.createClass({
    getInitialState: function() {
      return {
        currentDragItem: null,
        characterlist: [
        {
          charactername: "mickey",
          emotionstate:  "sad",
          animaltype:    "mouse"
        }, {
          charactername: "mini",
          emotionstate:  "happy",
          animaltype:    "mouse"
        }, {
          charactername: "donald",
          emotionstate:  "sad",
          animaltype:    "duck"
        }, {
          charactername: "daisy",
          emotionstate:  "happy",
          animaltype:    "duck"
        },
      ]
      };
    },
    render: function() {

      return div({
        className: "stage ",
        // className: "stage " + (this.state.currentDragItem ? 'dragging' : void 0),
        children: [
          // MusicPlayer(),
          HappyObjects({
              currentDragItem: this.state.currentDragItem,
              characterlist: this.state.characterlist,
              changeEmotionState: this.changeEmotionState,
              onDrop: this.onDrop
          }),
          SadObjects({
              currentDragItem: this.state.currentDragItem,
              characterlist: this.state.characterlist,
              changeEmotionState: this.changeEmotionState,
              onDrop: this.onDrop
          }),
          this.dropDescription()
        ]
      });
    },
    onDragStart: function(details) {
      return this.setState({
        currentDragItem: details
      });
    },
    onDragStop: function() {
      return this.setState({
        currentDragItem: null
      });
    },
    onDrop: function(target) {
      return this.setState({
        lastDrop: {
          source: this.state.currentDragItem,
          target: target
        }
      });
    },
    changeEmotionState: function(characterindex, state) {

      if(state === "happy") {
        this.state.characterlist[characterindex].emotionstate = "sad";
      } else if (state === "sad") {
        this.state.characterlist[characterindex].emotionstate = "happy";
      }

      return this.setState({});

    },
    dropDescription: function() {
      var drop;
      if (drop = this.state.lastDrop) {
        return p({
          className: 'drop-description',
          children: "Dropped source " + 
                    drop.source.type + 
                    "-" + drop.source.index + 
                    " on target " + 
                    drop.target.index
        });
      }
    }
});


module.exports = ReacticeApp;