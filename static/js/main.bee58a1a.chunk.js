/*! For license information please see main.bee58a1a.chunk.js.LICENSE.txt */
(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"project":[{"text":"Event driven","link":"https://github.com/Kittichok/my-playground/tree/main/Event-driven","imgSrc":"https://raw.githubusercontent.com/Kittichok/my-playground/main/Event-driven/img/arch.png"},{"text":"Microservice","link":"https://github.com/Kittichok/my-playground/tree/main/To-do-list-microservices","imgSrc":"https://raw.githubusercontent.com/Kittichok/my-playground/main/To-do-list-microservices/todo_microservice.png"}]}')},39:function(e,t,r){e.exports=r(73)},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},67:function(e,t,r){},71:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(11),i=r.n(o),c=(r(44),r(45),r(12)),l=(r(46),r(76)),u=r(77),s=r(78),f=r(79),h=r(85),m=r(80),d=r(81),p=r(82),v=r(31),y=r.n(v),g=r(14),E=r(32),w=r.n(E);g.a.initialize("UA-141787668-1");var b=function(){var e=Object(n.useState)({data:[],loading:!0}),t=Object(c.a)(e,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){w.a.init({key:"",callback:function(e){var t;o({data:(t=e,t.sort((function(e,t){var r=new Date(e.date);return new Date(t.date).valueOf()-r.valueOf()}))),loading:!1})},simpleSheet:!0})}),[]),a.a.createElement("div",{className:"Card-list"},a.a.createElement(d.a,null,a.a.createElement(p.a,null,a.a.createElement("h1",{className:"Center-text"},"Journey of me")),a.a.createElement(p.a,null,a.a.createElement("div",{className:"Center-text"},a.a.createElement(y.a,{size:250,visible:r.loading,radius:100,color:"#1ba8a4",stroke:10})),function(e){var t=["info","primary"];return e.map((function(e,r){return a.a.createElement(l.a,{key:r,body:!0,inverse:!0,color:t[r%2],className:"Card-item text-center"},a.a.createElement(u.a,null,e.topic),a.a.createElement(s.a,null,a.a.createElement(f.a,null,e.remark),a.a.createElement("a",{href:e.reference},a.a.createElement(h.a,{color:"dark",onClick:function(){g.a.event({category:"User",action:"Click"})}},"Link"))),a.a.createElement(m.a,null,e.date))}))}(r.data))))},x=(r(67),function(e){var t=e.text,r=Object(n.useState)(""),o=Object(c.a)(r,2),i=o[0],l=o[1],u=0;return Object(n.useEffect)((function(){var e=setInterval((function(){l(t.slice(0,u)),u++}),100);return function(){return clearInterval(e)}}),[t]),a.a.createElement("p",{className:"text-center align-middle topic my-auto"},i)}),k=function(){return a.a.createElement("div",{className:"container-center"},a.a.createElement(x,{text:"Hello, I am a Software developer"}))},j=r(83),L=r(84),O=function(){return a.a.createElement("div",null,a.a.createElement(j.a,{bg:"dark",variant:"dark",fixed:"top"},a.a.createElement(j.a.Collapse,{className:"justify-content-end"},a.a.createElement(L.a,null,a.a.createElement(L.a.Link,{href:"#profile"},"Profile"),a.a.createElement(L.a.Link,{href:"#project"},"Project"),a.a.createElement(L.a.Link,{href:"#journey"},"Journey")))))},N=r(38),S=r(36),_=(r(71),function(e){var t=e.imgSrc,r=e.text,n=e.link;return a.a.createElement("div",{className:"card-item"},a.a.createElement("img",{src:t,className:"card-img-top",alt:"card"}),a.a.createElement("div",{className:"card-body"},a.a.createElement("p",{className:"card-text"},r),a.a.createElement("a",{href:n,className:"btn btn-primary"},"Learn More")))}),P=r(37);function C(){C=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:b(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var f={};function h(){}function m(){}function d(){}var p={};l(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&r.call(y,o)&&(p=y);var g=d.prototype=h.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function b(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),l(g,c,"Generator"),l(g,o,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var G=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),r=t[0],o=t[1],i=function(){var e=Object(S.a)(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(N.a)(P.project),o(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),a.a.createElement("div",{className:"Card-list"},a.a.createElement(d.a,null,a.a.createElement(p.a,null,a.a.createElement("h1",{className:"Center-text"},"Project")),a.a.createElement(p.a,null,r&&(null===r||void 0===r?void 0:r.map((function(e,t){return a.a.createElement(_,{key:t,imgSrc:e.imgSrc,text:e.text,link:e.link})}))))))};g.a.initialize("UA-141787668-1");var I=function(){return a.a.createElement("div",{className:"App"},g.a.pageview(window.location.pathname+window.location.search),a.a.createElement(O,null),a.a.createElement("div",{className:"full-screen",id:"profile"},a.a.createElement(k,null)),a.a.createElement("div",{className:"full-screen",id:"project"},a.a.createElement(G,null)),a.a.createElement("div",{className:"full-screen",id:"journey"},a.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(72);i.a.render(a.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.bee58a1a.chunk.js.map