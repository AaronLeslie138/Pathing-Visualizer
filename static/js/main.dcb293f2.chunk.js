(this["webpackJsonppathing-algs"]=this["webpackJsonppathing-algs"]||[]).push([[0],{39:function(t,e,a){t.exports=a(53)},44:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(18),s=a.n(o),i=(a(44),a(8)),c=a(10),l=a(14),h=a(13),u=a(15),f=(a(45),a(26)),d=a(34),b=a(22),m=a(31),p=a(33),g={bfs:"Dijkstra's (BFS)",greedy:"Best First Search (Greedy)",a:"A*"},v=function t(){Object(i.a)(this,t),this.state="blank"},x=function t(e,a,r,n){Object(i.a)(this,t),this.index=e,this.path=a,this.cost=r,this.heuristic=n},S=function t(e,a){var r=this;Object(i.a)(this,t),this.search=function(){if(!r.searching){r.searching=!0;var t=null;"bfs"===r.algorithm?t=new p.a([new x(895,[],0,0)],(function(t,e){return t.cost-e.cost})):"greedy"===r.algorithm?t=new p.a([new x(895,[],0,0)],(function(t,e){return t.heuristic-e.heuristic})):"a"===r.algorithm&&(t=new p.a([new x(895,[],0,0)],(function(t,e){return t.cost+t.heuristic-e.cost-e.heuristic===0?t.cost-e.cost:t.cost+t.heuristic-e.cost-e.heuristic})));for(var e=new Set,a=0;a<1890;a++)"blank"===r.boxStates[a].state&&e.add(a);e.add(929),e.add(895),r.searchLoop(t,e)}},this.searchLoop=function(t,e){var a=O(t,e);if(null!==a){var n=a.index;if("goal"!==r.boxStates[n].state)"blank"===r.boxStates[n].state&&(r.boxStates[n].state="search",r.gridRef.current.updateBox(n,r.boxStates[n])),setTimeout(function(){this.searchLoop(t,e)}.bind(r),1);else{t.length=0;for(var o=function(t){setTimeout(function(){var e=a.path[t];this.boxStates[e].state="path",this.gridRef.current.updateBox(e,this.boxStates[e]),t===a.path.length-1&&(this.searching=!1)}.bind(r),45*t)},s=1;s<a.path.length;s++)o(s)}}else r.searching=!1},this.clicked=function(t){r.searching||r.wasClicked.has(t)||("blank"===r.boxStates[t].state||"search"===r.boxStates[t].state||"path"===r.boxStates[t].state?(r.boxStates[t].state="block",r.gridRef.current.updateBox(t,r.boxStates[t])):"block"===r.boxStates[t].state&&(r.boxStates[t].state="blank",r.gridRef.current.updateBox(t,r.boxStates[t])),r.wasClicked.add(t),setTimeout(function(){this.wasClicked.delete(t)}.bind(r),200))},this.updateAlgorithm=function(t){if(!r.searching){r.algorithm=t,r.headerRef.current.setAlgorithm(t),r.boxStates[895].state="start",r.boxStates[929].state="goal";for(var e=0;e<1890;e++)"path"!==r.boxStates[e].state&&"search"!==r.boxStates[e].state||(r.boxStates[e].state="blank"),r.gridRef.current.updateBox(e,r.boxStates[e])}},this.makeMaze=function(){if(!r.searching){r.clearBoard(),r.searching=!0;for(var t=0,e=function(e){var a=e;t+=1,setTimeout(function(){this.boxStates[a].state="block",this.gridRef.current.updateBox(a,this.boxStates[a])}.bind(r),10*t)},a=0;a<63;a++)e(a);for(var n=function(e){var a=e+1827;t+=1,setTimeout(function(){this.boxStates[a].state="block",this.gridRef.current.updateBox(a,this.boxStates[a])}.bind(r),10*t)},o=0;o<63;o++)n(o);for(var s=function(e){var a=1+Math.floor(Math.random()*Math.floor(28));0!==e&&e!==Math.floor(31.5)||(a=-1);for(var n=function(n){var o=2*e+63*n;"blank"===r.boxStates[o].state&&n!==a&&(t+=1,setTimeout(function(){this.boxStates[o].state="block",this.gridRef.current.updateBox(o,this.boxStates[o]),e===Math.floor(31.5)&&29===n&&(this.searching=!1)}.bind(r),10*t))},o=0;o<30;o++)n(o)},i=0;i<Math.floor(31.5)+1;i++)s(i)}},this.makeBlocks=function(){if(!r.searching){r.clearBoard(),r.searching=!0;for(var t=0,e=function(e){var a=Math.floor(Math.random()*Math.floor(1890));"blank"===r.boxStates[a].state&&(t+=1,setTimeout(function(){this.boxStates[a].state="block",this.gridRef.current.updateBox(a,this.boxStates[a]),499===e&&(this.searching=!1)}.bind(r),10*t))},a=0;a<500;a++)e(a)}},this.clearBoard=function(){if(!r.searching){r.boxStates=new Array(1890).fill().map((function(){return new v})),r.boxStates[895].state="start",r.boxStates[929].state="goal";for(var t=0;t<1890;t++)r.gridRef.current.updateBox(t,r.boxStates[t])}},this.clearPaths=function(){if(!r.searching){r.boxStates[895].state="start",r.boxStates[929].state="goal";for(var t=0;t<1890;t++)"path"!==r.boxStates[t].state&&"search"!==r.boxStates[t].state||(r.boxStates[t].state="blank"),r.gridRef.current.updateBox(t,r.boxStates[t])}},this.algorithm="bfs",this.isSearching=!1,this.wasClicked=new Set,this.headerRef=e,this.gridRef=a,this.boxStates=new Array(1890).fill().map((function(){return new v})),this.boxStates[895].state="start",this.boxStates[929].state="goal",this.searching=!1},k=function(t){var e=Math.floor(t/63),a=t%63,r=Math.floor(929/63),n=Math.floor(895/63),o=Math.abs(a-47)+Math.abs(e-r),s=a-47,i=e-r,c=n-r;return o+=1e-7*Math.abs(s*c- -34*i),o},O=function(t,e){if(0===t.length)return null;for(var a=t.pop();!e.has(a.index);){if(0===t.length)return null;a=t.pop()}var r=a.index;e.delete(r);var n=Math.floor(r/63),o=r%63;if(o<62){var s=r+1,i=k(s);t.push(new x(s,a.path.concat([r]),1+a.path.length,i))}if(n>0){var c=r-63,l=k(c);t.push(new x(c,a.path.concat([r]),1+a.path.length,l))}if(n<29){var h=r+63,u=k(h);t.push(new x(h,a.path.concat([r]),1+a.path.length,u))}if(o>0){var f=r-1,d=k(f);t.push(new x(f,a.path.concat([r]),1+a.path.length,d))}return a},w=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).setAlgorithm=function(t){a.setState({algorithm:g[t]})},a.state={algorithm:g.bfs},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"Header"},n.a.createElement(f.a,{bg:"light",expand:"lg"},n.a.createElement(f.a.Brand,null,"Pathing Visualizer"),n.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(d.a,{className:"mr-auto"},n.a.createElement(m.a,{onClick:this.props.algorithmOverlord.search},"Search!"),n.a.createElement(b.a,{title:this.state.algorithm,id:"basic-nav-dropdown"},Object.entries(g).map((function(e,a){return n.a.createElement(b.a.Item,{onClick:function(){return t.props.algorithmOverlord.updateAlgorithm(e[0])}},e[1])}))),n.a.createElement(b.a,{title:"Generate Board",id:"basic-nav-dropdown"},n.a.createElement(b.a.Item,{onClick:function(){return t.props.algorithmOverlord.makeMaze()}},"Random Maze"),n.a.createElement(b.a.Item,{onClick:function(){return t.props.algorithmOverlord.makeBlocks()}},"Random Blocks")),n.a.createElement(d.a.Link,{onClick:this.props.algorithmOverlord.clearBoard},"Clear All"),n.a.createElement(d.a.Link,{onClick:this.props.algorithmOverlord.clearPaths},"Clear Paths")))))}}]),e}(n.a.Component),j=(a(52),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).setClass=function(t){a.setState({class:"inner-"+t})},a.state={class:"inner-blank"},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{onMouseDown:this.props.clicked,onMouseOver:this.props.clicked,className:"box"},n.a.createElement("div",{className:this.state.class}))}}]),e}(n.a.Component)),E=function(t){function e(t){return Object(i.a)(this,e),Object(l.a)(this,Object(h.a)(e).call(this,t))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{style:{overflow:"hidden"}},n.a.createElement("h3",{style:{marginTop:"calc(100vh - 250px)"}},"If you see this text, but no large grid above, your browser is several years out of date. Please use an up-to-date Chrome or Firefox based browser."))}}]),e}(n.a.Component),B=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).updateBox=function(t,e){a.boxes[t].current.setClass(e.state)},a.createTable=function(){var t=[];t.push();for(var e=function(e){for(var r=[],o=function(t){r.push(n.a.createElement(j,{ref:a.boxes[t+63*e],clicked:function(r){r.preventDefault(),1===r.buttons&&a.props.algorithmOverlord.clicked(t+63*e)}}))},s=0;s<63;s++)o(s);t.push(n.a.createElement("div",{onMouseDown:function(t){return t.preventDefault()},className:"row"},r))},r=0;r<30;r++)e(r);return t},a.componentDidMount=function(){for(var t=0;t<1890;t++)a.updateBox(t,a.props.algorithmOverlord.boxStates[t])},a.boxes=Array(1890).fill().map((function(){return n.a.createRef()})),a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:"100%",height:"100%",textAlign:"center"}},n.a.createElement("div",{className:"grid",onMouseDown:function(t){return t.preventDefault()}},this.createTable()),n.a.createElement(E,null))}}]),e}(n.a.Component),M=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).headerRef=n.a.createRef(),a.gridRef=n.a.createRef(),a.algorithmOverlord=new S(a.headerRef,a.gridRef),a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){document.title="Pathing Visualizer"}},{key:"render",value:function(){return n.a.createElement("div",{className:"pathingApp"},n.a.createElement(w,{ref:this.headerRef,algorithmOverlord:this.algorithmOverlord}),n.a.createElement(B,{ref:this.gridRef,algorithmOverlord:this.algorithmOverlord}))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.dcb293f2.chunk.js.map