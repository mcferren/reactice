(function(){var t,e,a,r,n,s,o,c,p,h=[].indexOf||function(t){for(var e=0,a=this.length;a>e;e++)if(e in this&&this[e]===t)return e;return-1};p=React.DOM,o=p.div,c=p.p,t=3,document.addEventListener("DOMContentLoaded",function(){return React.renderComponent(n(),document.body)}),n=React.createClass({getInitialState:function(){return{currentDragItem:null,characterlist:[{charactername:"mickey",emotionstate:"sad",animaltype:"mouse"},{charactername:"mini",emotionstate:"happy",animaltype:"mouse"},{charactername:"donald",emotionstate:"sad",animaltype:"duck"},{charactername:"daisy",emotionstate:"happy",animaltype:"duck"}]}},render:function(){return o({className:"stage ",children:[HappyObjects({currentDragItem:this.state.currentDragItem,characterlist:this.state.characterlist,changeEmotionState:this.changeEmotionState,onDrop:this.onDrop}),SadObjects({currentDragItem:this.state.currentDragItem,characterlist:this.state.characterlist,changeEmotionState:this.changeEmotionState,onDrop:this.onDrop}),this.dropDescription()]})},onDragStart:function(t){return this.setState({currentDragItem:t})},onDragStop:function(){return this.setState({currentDragItem:null})},onDrop:function(t){return this.setState({lastDrop:{source:this.state.currentDragItem,target:t}})},changeEmotionState:function(t,e){return"happy"===e?this.state.characterlist[t].emotionstate="sad":"sad"===e&&(this.state.characterlist[t].emotionstate="happy"),this.setState({})},dropDescription:function(){var t;return(t=this.state.lastDrop)?c({className:"drop-description",children:"Dropped source "+t.source.type+"-"+t.source.index+" on target "+t.target.index}):void 0}}),HappyObjects=React.createClass({render:function(){return o({className:"happy",children:[s({changeEmotionState:this.props.changeEmotionState,characterlist:this.props.characterlist,emotionstate:"happy"}),r({currentDragItem:this.props.currentDragItem}),BackgroundObjects({})]})}}),SadObjects=React.createClass({render:function(){return o({className:"sad",children:[s({onDragStart:this.props.onDragStart,onDragStop:this.props.onDragStop,changeEmotionState:this.props.changeEmotionState,characterlist:this.props.characterlist,emotionstate:"sad"}),r({currentDragItem:this.props.currentDragItem}),BackgroundObjects({})]})}}),s=React.createClass({render:function(){var t,e;return o({className:"cast",children:function(){var a,r,n,s;for(n=this.props.characterlist,s=[],t=a=0,r=n.length;r>a;t=++a)e=n[t],s.push(CharacterObject({charactername:e.charactername,animaltype:e.animaltype,index:t,children:t+1,onDragStart:this.props.onDragStart,onDragStop:this.props.onDragStop,changeEmotionState:this.props.changeEmotionState,characterlist:this.props.characterlist,emotionstate:this.props.emotionstate}));return s}.call(this)})}}),MusicPlayer=React.createClass({render:function(){return o({className:"hero",html:'  <object width="250" height="40" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="gsSong3970061891" name="gsSong3970061891"><param name="movie" value="http://grooveshark.com/songWidget.swf" /><param name="wmode" value="window" /><param name="allowScriptAccess" value="always" /><param name="flashvars" value="hostname=grooveshark.com&songID=39700618&style=metal&p=1" /><object type="application/x-shockwave-flash" data="http://grooveshark.com/songWidget.swf" width="250" height="40"><param name="wmode" value="window" /><param name="allowScriptAccess" value="always" /><param name="flashvars" value="hostname=grooveshark.com&songID=39700618&style=metal&p=1" /><span><a href="http://grooveshark.com/search/song?q=Capital%20Cities%20Love%20Away" title="Love Away by Capital Cities on Grooveshark">Love Away by Capital Cities on Grooveshark</a></span></object></object>'})}}),CharacterObject=React.createClass({render:function(){return e({className:"character "+this.props.animaltype,children:function(){var t,e,a,r;for(a=this.pathnodeframes(),r=[],i=t=0,e=a.length;e>t;i=++t)object=a[i],r.push(PathNodeFrameObject({reelindex:object.reelindex,charactername:this.props.charactername,animaltype:this.props.animaltype,index:i+1,children:i+1,changeEmotionState:this.props.changeEmotionState,onDragStart:this.props.onDragStart,onDragStop:this.props.onDragStop,emotionstate:this.props.emotionstate}));return r}.call(this),onDragStart:this.props.onDragStart,onDragStop:this.props.onDragStop,dragData:this.dragData,changeEmotionState:this.props.changeEmotionState,characterlist:this.props.characterlist,emotionstate:this.props.emotionstate,animaltype:this.props.animaltype,index:this.props.index})},dragData:function(){return{type:this.props.type,index:this.props.index}},pathnodeframes:function(){return[{reelindex:["zero"]}]}}),PathNodeFrameObject=React.createClass({render:function(){return o({className:this.props.charactername+" "+this.props.reelindex+" headline",children:o({children:this.props.emotionstate+" "+this.props.charactername})})}}),e=React.createClass({getInitialState:function(){return{mouseDown:!1,dragging:!1,dancing:!0,present:!0,changeEmotionState:this.props.changeEmotionState,characterlist:this.props.characterlist,emotionstate:this.props.emotionstate,animaltype:this.props.animaltype}},render:function(){return this.transferPropsTo(o({style:this.style(),className:this.state.emotionstate===this.props.characterlist[this.props.index].emotionstate?" on-stage ":" off-stage ",children:this.props.children,onMouseDown:this.onMouseDown}))},style:function(){return this.state.dragging?{position:"absolute",left:this.state.left,top:this.state.top}:{}},onMouseDown:function(){this.props.changeEmotionState(this.props.index,this.state.emotionstate),this.setState({present:!1})},onMouseMove:function(e){var a,r,n,s,o;return a=e.pageX-this.state.originX,r=e.pageY-this.state.originY,n=Math.abs(a)+Math.abs(r),!this.state.dragging&&n>t&&(this.setState({dragging:!0}),"function"==typeof(s=this.props).onDragStart&&s.onDragStart("function"==typeof(o=this.props).dragData?o.dragData():void 0)),this.state.dragging?this.setState({left:this.state.elementX+a,top:this.state.elementY+r}):void 0},onMouseUp:function(){return this.state.dragging?(this.removeEvents(),this.props.onDragStop(),this.setState({dragging:!1,left:event.pageX,top:event.pageY,dancing:!0})):void 0},addEvents:function(){return document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp)},removeEvents:function(){return document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp)}}),BackgroundObjects=React.createClass({render:function(){var t,e;return o({className:"background-setting",children:function(){var a,r,n,s;for(n=this.backgroundcharacterlist(),s=[],t=a=0,r=n.length;r>a;t=++a)e=n[t],s.push(BackgroundCharacterObject({target:e,index:t,currentDragItem:this.props.currentDragItem,onDrop:this.props.onDrop}));return s}.call(this)})},backgroundcharacterlist:function(){return[{accepts:["heart"]}]}}),BackgroundCharacterObject=React.createClass({render:function(){return o({className:"background-character ",fill:"#000000",d:""})}}),r=React.createClass({render:function(){var t,e;return o({className:"emotionlist",children:function(){var r,n,s,o;for(s=this.dropzoneobjects(),o=[],t=r=0,n=s.length;n>r;t=++r)e=s[t],o.push(a({target:e,index:t,currentDragItem:this.props.currentDragItem,onDrop:this.props.onDrop}));return o}.call(this)})},dropzoneobjects:function(){return[{accepts:["character","donald"]}]}}),a=React.createClass({getInitialState:function(){return{hover:!1}},render:function(){return o({className:this.classes(),onMouseEnter:function(t){return function(){return t.setState({hover:!0})}}(this),onMouseLeave:function(t){return function(){return t.setState({hover:!1})}}(this),onMouseUp:this.onDrop})},classes:function(){return["dnd-drop-target "]},active:function(){var t;return this.props.currentDragItem&&(t=this.props.currentDragItem.type,h.call(this.props.target.accepts,t)>=0)},disabled:function(){var t;return this.props.currentDragItem&&(t=this.props.currentDragItem.type,h.call(this.props.target.accepts,t)<0)},acceptsDescription:function(){return this.props.target.accepts.length>0?this.props.target.accepts.join(" & "):"nothing"},onDrop:function(){var t;return this.active()&&"function"==typeof(t=this.props).onDrop?t.onDrop({index:this.props.index+1}):void 0}})}).call(this);