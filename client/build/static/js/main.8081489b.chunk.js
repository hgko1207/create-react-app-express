(this["webpackJsonpexample-create-react-app-express"]=this["webpackJsonpexample-create-react-app-express"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(3),c=n.n(s),o=n(1),p=n.n(o),u=n(4),i=n(5),l=n(6),h=n(8),f=n(7),m=n(9),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={response:"",post:"",responseToPost:""},n.callApi=Object(u.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/hello");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.callApi().then((function(t){return e.setState({response:t.express})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,this.state.response))}}]),t}(r.Component);c.a.render(a.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8081489b.chunk.js.map