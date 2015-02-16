var ReacticeApp = require('./ReacticeApp');

(function() {
  var DRAG_THRESHOLD, 
      Clickable, 
      DropTarget, 
      DropTargets, 
      ReacticeApp,  
      SourceObject, 
      SourceObjects, 
      div, 
      p, 
      _ref,
    __indexOf = [].indexOf || function(item) { 
                                  for (var i = 0, l = this.length; i < l; i++) { 

                                      if (i in this && this[i] === item) 
                                        return i; 
                                  } 
                              return -1; };

  _ref = React.DOM, 
  div = _ref.div, 
  p = _ref.p;

  DRAG_THRESHOLD = 3;

  document.addEventListener('DOMContentLoaded', function() {
    return React.renderComponent(ReacticeApp(), document.body);
  });

}).call(this);