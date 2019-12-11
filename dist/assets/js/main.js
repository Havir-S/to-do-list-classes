!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";n.r(t);var a=class{constructor(e,t,n,a){this._title=e,this._description=t,this._priority=n,this._icon=a}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get priority(){return this._priority}set priority(e){this._priority=e}get icon(){return this._icon}set icon(e){this._icon=e}};function r(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=r(e),a=r(t),i=n.getTime()-a.getTime();return i<0?-1:i>0?1:i}function o(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=r(e),a=r(t),o=i(n,a),c=Math.abs(function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=r(e),a=r(t);return 12*(n.getFullYear()-a.getFullYear())+(n.getMonth()-a.getMonth())}(n,a));n.setMonth(n.getMonth()-o*c);var d=o*(c-(i(n,a)===-o));return 0===d?0:d}function c(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=r(e),a=r(t);return n.getTime()-a.getTime()}(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var s={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var c=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;a=e.values[d]||e.values[c]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function p(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],c=a.match(o);if(!c)return null;var d,l=c[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(s,(function(e){return e.test(a)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(s,(function(e){return e.test(a)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(l.length)}}}var h,f={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof d[e]?d[e]:1===t?d[e].one:d[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:s,formatRelative:function(e,t,n,a){return m[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(h.matchPattern);if(!r)return null;var i=r[0],o=n.match(h.parsePattern);if(!o)return null;var c=h.valueCallback?h.valueCallback(o[0]):o[0];return{value:c=a.valueCallback?a.valueCallback(c):c,rest:n.slice(i.length)}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}var v=6e4;function y(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=t.getTime()%v;return n*v+a}var b=1440,E=2520,C=43200,w=86400;function N(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return function(e,t,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=n||{},d=a.locale||f;if(!d.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=i(e,t);if(isNaN(l))throw new RangeError("Invalid time value");var s,m,u=g(a);u.addSuffix=Boolean(a.addSuffix),u.comparison=l,l>0?(s=r(t),m=r(e)):(s=r(e),m=r(t));var p,h=c(m,s),v=(y(m)-y(s))/1e3,N=Math.round((h-v)/60);if(N<2)return a.includeSeconds?h<5?d.formatDistance("lessThanXSeconds",5,u):h<10?d.formatDistance("lessThanXSeconds",10,u):h<20?d.formatDistance("lessThanXSeconds",20,u):h<40?d.formatDistance("halfAMinute",null,u):h<60?d.formatDistance("lessThanXMinutes",1,u):d.formatDistance("xMinutes",1,u):0===N?d.formatDistance("lessThanXMinutes",1,u):d.formatDistance("xMinutes",N,u);if(N<45)return d.formatDistance("xMinutes",N,u);if(N<90)return d.formatDistance("aboutXHours",1,u);if(N<b){var j=Math.round(N/60);return d.formatDistance("aboutXHours",j,u)}if(N<E)return d.formatDistance("xDays",1,u);if(N<C){var M=Math.round(N/b);return d.formatDistance("xDays",M,u)}if(N<w)return p=Math.round(N/C),d.formatDistance("aboutXMonths",p,u);if((p=o(m,s))<12){var T=Math.round(N/C);return d.formatDistance("xMonths",T,u)}var D=p%12,L=Math.floor(p/12);return D<3?d.formatDistance("aboutXYears",L,u):D<9?d.formatDistance("overXYears",L,u):d.formatDistance("almostXYears",L+1,u)}(e,Date.now(),t)}let j=1,M=[];const T=()=>{return 0===M.length?j++:M.splice(M.indexOf(Math.min(...M)),1)};class D{constructor(e,t,n,a){this._title=e,this._description=t,this._dueDate=n,this._id=T(),this._priority=a,this._toDos=[]}get title(){return this._title}set title(e){this._title=e}get description(){return this._description}set description(e){this._description=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get id(){return this._id}set id(e){this._id=e}get priority(){return this._priority}set priority(e){this._priority=e}get toDos(){return this._toDos}set toDos(e){this._toDos=e}addToDo(e){e instanceof a&&this._toDos.push(e)}deleteToDo(e){this._toDos.indexOf(e)>-1&&this._toDos.splice(this._toDos.indexOf(e,1))}get projectTimeLimit(){return N(new Date(this._dueDate))}get idToArray(){M.push(this._id)}}var L=D;var P=function(){let e,t,n=["airplane.png","box.png","cake.png","calculator.png","car.png","coffee-cup.png","dish.png","dog.png","drop.png","error.png","finish-flag.png","finish-line.png","fire.png","flag.png","forever.png","gift.png","group.png","headset.png","home.png","homework.png","loop-arrow.png","maintenance.png","management.png","map.png","map2.png","maps-and-flags.png","mountains.png","musical-note.png","notification.png","paper.png","paw-print-.png","pending.png","pond.png","priority.png","promotion.png","sea.png","settings.png","settings2.png","settings3.png","shop.png","start.png","startup.png","suitcase.png","team.png","technics.png","test.png","tools.png","users.png","visibility.png","winner.png","wrench.png"];const a=e=>{if(e instanceof Element)for(;e.firstChild;)e.removeChild(e.firstChild);else console.error("Argument has to be a NODE Element")},r=([...e],t)=>{for(var n of e)n.classList.remove(t)},i=(e,t,a)=>{if(e){let e=document.createElement("div");e.className="create-project-modal create-todo-modal";let o=document.createElement("div");o.className="create-project-container create-todo-container",e.appendChild(o);let c=document.createElement("h3");c.className="h3-modal-title",c.innerHTML="EDIT TODO",o.appendChild(c);let d=document.createElement("div");d.className="create-todo-row create-todo-row-title";let l=document.createElement("label");l.className="create-todo-row-title-label",l.setAttribute("for","todo-title"),l.innerHTML="Todo name:";let s=document.createElement("input");s.className="create-todo-row-title-input",s.type="text",s.name="todo-title",s.value=a.title,d.appendChild(l),d.appendChild(s),o.appendChild(d);let m=document.createElement("div");m.className="create-todo-row create-todo-row-description";let u=document.createElement("label");u.className="create-todo-row-description-label",u.setAttribute("for","todo-description"),u.innerHTML="Todo description:";let p=document.createElement("input");p.className="create-todo-row-description-input",p.type="text",p.name="todo-description",p.value=a.description,m.appendChild(u),m.appendChild(p),o.appendChild(m);let h=document.createElement("div");h.className="create-todo-row create-todo-row-priority";let f=document.createElement("label");f.className="create-todo-row-priority-label",f.setAttribute("for","todo-priority"),f.innerHTML="Todo Priority:";let g=document.createElement("input");g.className="create-todo-row-priority-input",g.type="range",g.min="1",g.max="10",g.name="todo-priority",g.value=a.priority,g.setAttribute("data-value","5"),g.addEventListener("input",(function(){event.target.setAttribute("data-value",g.value)})),h.appendChild(f),h.appendChild(g),o.appendChild(h);let v=document.createElement("div");v.className="icons-container";let y=document.createElement("label");y.className="icons-label",y.innerHTML="Todos Icon :",v.appendChild(y);let b=document.createElement("div");for(var i of(b.className="icons-grid",n)){let e=document.createElement("img");e.className="icon icon-container-img",e.src=`./assets/imgs/icons/${i}`,e.alt="icon",b.appendChild(e),e.src==a.icon&&(e.className="icon-container-img icon-container-img-checked"),e.addEventListener("click",(function(e){r(document.querySelectorAll(".icon-container-img"),"icon-container-img-checked"),this.classList.add("icon-container-img-checked")}))}v.appendChild(b),o.appendChild(v);let E=document.createElement("div");E.className="buttons-div";let C=document.createElement("button");C.className="buttons buttons-left",C.innerHTML="Create TODO";let w=document.createElement("button");w.className="buttons buttons-right",w.innerHTML="Close",E.appendChild(C),E.appendChild(w),o.appendChild(E),w.addEventListener("click",(function(){e.parentNode.removeChild(e)})),C.addEventListener("click",(function(){_(t,a),A(e),e.parentNode.removeChild(e)})),document.body.appendChild(e)}else{let e=document.createElement("div");e.className="create-project-modal create-todo-modal";let a=document.createElement("div");a.className="create-project-container create-todo-container",e.appendChild(a);let o=document.createElement("h3");o.className="h3-modal-title",o.innerHTML="CREATE TODO",a.appendChild(o);let c=document.createElement("div");c.className="create-todo-row create-todo-row-title";let d=document.createElement("label");d.className="create-todo-row-title-label",d.setAttribute("for","todo-title"),d.innerHTML="todo name:";let l=document.createElement("input");l.className="create-todo-row-title-input",l.type="text",l.name="todo-title",c.appendChild(d),c.appendChild(l),a.appendChild(c);let s=document.createElement("div");s.className="create-todo-row create-todo-row-description";let m=document.createElement("label");m.className="create-todo-row-description-label",m.setAttribute("for","todo-description"),m.innerHTML="todo description:";let u=document.createElement("input");u.className="create-todo-row-description-input",u.type="text",u.name="todo-description",s.appendChild(m),s.appendChild(u),a.appendChild(s);let p=document.createElement("div");p.className="create-todo-row create-todo-row-priority";let h=document.createElement("label");h.className="create-todo-row-priority-label",h.setAttribute("for","todo-priority"),h.innerHTML="todo Priority:";let f=document.createElement("input");f.className="create-todo-row-priority-input",f.type="range",f.min="1",f.max="10",f.value="5",f.name="todo-priority",f.setAttribute("data-value","5"),f.addEventListener("input",(function(){event.target.setAttribute("data-value",f.value)})),p.appendChild(h),p.appendChild(f),a.appendChild(p);let g=document.createElement("div");g.className="icons-container";let v=document.createElement("label");v.className="icons-label",v.innerHTML="Todos Icon :",g.appendChild(v);let y=document.createElement("div");for(var i of(y.className="icons-grid",n)){let e=document.createElement("img");e.className="icon icon-container-img",e.src=`./assets/imgs/icons/${i}`,e.alt="icon",y.appendChild(e),e.addEventListener("click",(function(e){r(document.querySelectorAll(".icon-container-img"),"icon-container-img-checked"),this.classList.add("icon-container-img-checked")}))}g.appendChild(y),a.appendChild(g);let b=document.createElement("div");b.className="buttons-div";let E=document.createElement("button");E.className="buttons buttons-left",E.innerHTML="Create TODO";let C=document.createElement("button");C.className="buttons buttons-right",C.innerHTML="Close",b.appendChild(E),b.appendChild(C),a.appendChild(b),C.addEventListener("click",(function(){e.parentNode.removeChild(e)})),E.addEventListener("click",(function(){_(t),A(e),e.parentNode.removeChild(e)})),document.body.appendChild(e)}},o=e=>{if(e){if(S.includes(e)){let t=document.createElement("div");t.className="create-project-modal";let n=document.createElement("div");n.className="create-project-container",t.appendChild(n);let a=document.createElement("h3");a.className="h3-modal-title",a.innerHTML="EDIT PROJECT",n.appendChild(a);let r=document.createElement("div");r.className="create-project-row create-project-row-title";let i=document.createElement("label");i.className="create-project-row-title-label",i.setAttribute("for","project-title"),i.innerHTML="Project name:";let o=document.createElement("input");o.className="create-project-row-title-input",o.type="text",o.name="project-title",o.value=e.title,r.appendChild(i),r.appendChild(o),n.appendChild(r);let c=document.createElement("div");c.className="create-project-row create-project-row-description";let d=document.createElement("label");d.className="create-project-row-description-label",d.setAttribute("for","project-description"),d.innerHTML="Project description:";let l=document.createElement("input");l.className="create-project-row-description-input",l.type="text",l.name="project-description",l.value=e.description,c.appendChild(d),c.appendChild(l),n.appendChild(c);let s=document.createElement("div");s.className="create-project-row create-project-row-date";let m=document.createElement("label");m.className="create-project-row-date-label",m.setAttribute("for","project-date"),m.innerHTML="Project Date:";let u=document.createElement("input");u.className="create-project-row-date-input",u.type="date",u.name="project-date",u.value=e.dueDate,s.appendChild(m),s.appendChild(u),n.appendChild(s);let p=document.createElement("div");p.className="create-project-row create-project-row-priority";let h=document.createElement("label");h.className="create-project-row-priority-label",h.setAttribute("for","project-priority"),h.innerHTML="Project Priority:";let f=document.createElement("input");f.className="create-project-row-priority-input",f.type="range",f.min="1",f.max="10",f.value=e.priority,f.name="project-priority",f.setAttribute("data-value","5"),f.addEventListener("input",(function(){event.target.setAttribute("data-value",f.value)})),p.appendChild(h),p.appendChild(f),n.appendChild(p);let g=document.createElement("div");g.className="buttons-div";let v=document.createElement("button");v.className="buttons buttons-left",v.innerHTML="Create Project";let y=document.createElement("button");y.className="buttons buttons-right",y.innerHTML="Close",g.appendChild(v),g.appendChild(y),n.appendChild(g),y.addEventListener("click",(function(){A(t),t.parentNode.removeChild(t)})),v.addEventListener("click",(function(){H(e),A(t),t.parentNode.removeChild(t)})),document.body.appendChild(t)}}else{let e=document.createElement("div");e.className="create-project-modal";let t=document.createElement("div");t.className="create-project-container",e.appendChild(t);let n=document.createElement("h3");n.className="h3-modal-title",n.innerHTML="CREATE PROJECT",t.appendChild(n);let a=document.createElement("div");a.className="create-project-row create-project-row-title";let r=document.createElement("label");r.className="create-project-row-title-label",r.setAttribute("for","project-title"),r.innerHTML="Project name:";let i=document.createElement("input");i.className="create-project-row-title-input",i.type="text",i.name="project-title",a.appendChild(r),a.appendChild(i),t.appendChild(a);let o=document.createElement("div");o.className="create-project-row create-project-row-description";let c=document.createElement("label");c.className="create-project-row-description-label",c.setAttribute("for","project-description"),c.innerHTML="Project description:";let d=document.createElement("input");d.className="create-project-row-description-input",d.type="text",d.name="project-description",o.appendChild(c),o.appendChild(d),t.appendChild(o);let l=document.createElement("div");l.className="create-project-row create-project-row-date";let s=document.createElement("label");s.className="create-project-row-date-label",s.setAttribute("for","project-date"),s.innerHTML="Project Date:";let m=document.createElement("input");m.className="create-project-row-date-input",m.type="date",m.name="project-date",l.appendChild(s),l.appendChild(m),t.appendChild(l);let u=document.createElement("div");u.className="create-project-row create-project-row-priority";let p=document.createElement("label");p.className="create-project-row-priority-label",p.setAttribute("for","project-priority"),p.innerHTML="Project Priority:";let h=document.createElement("input");h.className="create-project-row-priority-input",h.type="range",h.min="1",h.max="10",h.value="5",h.name="project-priority",h.setAttribute("data-value","5"),h.addEventListener("input",(function(){event.target.setAttribute("data-value",h.value)})),u.appendChild(p),u.appendChild(h),t.appendChild(u);let f=document.createElement("div");f.className="buttons-div";let g=document.createElement("button");g.className="buttons buttons-left",g.innerHTML="Create Project";let v=document.createElement("button");v.className="buttons buttons-right",v.innerHTML="Close",f.appendChild(g),f.appendChild(v),t.appendChild(f),v.addEventListener("click",(function(){A(e),e.parentNode.removeChild(e)})),g.addEventListener("click",(function(){H(),A(e),e.parentNode.removeChild(e)})),document.body.appendChild(e)}};function c(e,t){e.toDos.includes(t)?(e.toDos.splice(e.toDos.indexOf(t),1),O(S),m(e),event.stopImmediatePropagation()):console.error("Project does not include that toDo")}function d(e,t){i(!0,e,t)}const l=([...e],t,n)=>{for(var a of e){let e=document.createElement("div");e.className="to-do-row";let r=document.createElement("div");r.className="to-information-div";let i=document.createElement("div");i.className="to-do-icon-div";let o=document.createElement("img");o.className="icon to-do-icon",o.src=`${a.icon}`,o.innerHTML="toDo icon",i.appendChild(o),r.appendChild(i);let l=document.createElement("div");l.className="to-do-title-div";let s=document.createElement("div");s.className="to-do-title-text",s.innerHTML=a.title,l.appendChild(s),r.appendChild(l);let m=document.createElement("div");m.className="to-do-priority-div";let u=document.createElement("div");u.className="to-do-priority-instruction",u.innerHTML="priority:";let p=document.createElement("div");p.className="to-do-priority-text",p.innerHTML=a.priority,m.appendChild(u),m.appendChild(p),r.appendChild(m);let h=document.createElement("div");h.className="to-do-edit-div";let f=document.createElement("img");f.className="icon to-do-edit-icon",f.src="./assets/imgs/icons/edit.png",h.appendChild(f),r.appendChild(h),h.addEventListener("click",d.bind(this,n,a));let g=document.createElement("div");g.className="to-do-delete-div";let v=document.createElement("img");v.className="icon to-do-delete-icon",v.src="./assets/imgs/icons/delete.png",g.appendChild(v),r.appendChild(g),g.addEventListener("click",c.bind(this,n,a)),e.appendChild(r);let y=document.createElement("div");y.className="to-do-description-div";let b=document.createElement("div");b.className="to-do-description",b.innerHTML=a.description,y.appendChild(b),e.appendChild(y),t.appendChild(e)}};function s(e){e.target.parentNode.parentNode.parentNode.children[1].classList.toggle("d-none")}const m=e=>{if(t)if(a(t),e instanceof L&&t){let n=document.createElement("div");n.classList.add("project-div-shortcut"),n.setAttribute("data-project",e._id);let a=document.createElement("div");a.classList.add("project-name-container");let r=document.createElement("span");r.classList.add("project-name-container-span"),r.innerHTML=e.title,a.appendChild(r);let c=document.createElement("div");c.classList.add("project-time-container");let d=document.createElement("div");d.className="instruction instruction-time",d.innerHTML="remaining time:";let m=document.createElement("div");m.classList.add("project-time-container-span"),m.innerHTML=e.projectTimeLimit,c.appendChild(d),c.appendChild(m);let u=document.createElement("div");u.classList.add("project-priority-container");let p=document.createElement("div");p.className="instruction instruction-priority",p.innerHTML="priority:";let h=document.createElement("div");h.classList.add("project-priority-container-span"),h.innerHTML=e.priority,u.appendChild(p),u.appendChild(h);let f=document.createElement("div");f.classList.add("project-edit");let g=document.createElement("img");g.className="icon project-edit-icon",g.src="./assets/imgs/icons/edit.png",f.appendChild(g),f.addEventListener("click",(function(){o(e)}));let v=document.createElement("div");v.classList.add("project-more-details-container");let y=document.createElement("img");y.className="icon more-details-arrow",y.src="./assets/imgs/icons/arrow.png",v.appendChild(y),y.addEventListener("click",s),v.addEventListener("click",(function(e){y.classList.toggle("project-more-details-container-checked")})),n.appendChild(a),n.appendChild(f),n.appendChild(v),n.appendChild(c),n.appendChild(u);let b=document.createElement("div");b.classList.add("project-main");let E=document.createElement("div");E.className="project-more-details d-none";let C=document.createElement("div");C.className="more-details-text",C.innerHTML=e.description,E.appendChild(C),b.appendChild(n),b.appendChild(E);let w=document.createElement("div");w.className="to-do-container";let N=document.createElement("div");N.classList.add("to-do-add-div");let j=document.createElement("img");j.classList.add("icon"),j.classList.add("to-do-add-icon"),j.src="./assets/imgs/icons/plus.png";let M=document.createElement("div");M.classList.add("to-do-add-text-div");let T=document.createElement("div");T.classList.add("to-do-add-text"),T.innerHTML="ADD MORE TODOS",N.addEventListener("click",(function(){i(!1,e)})),l(e.toDos,w,e),N.appendChild(j),M.appendChild(T),N.appendChild(M),w.insertAdjacentElement("afterbegin",N),b.appendChild(w),t.appendChild(b)}else console.log("i is NOT an instance of Project, can not do shiet")};function u(e,t){S.includes(e)&&(e.idToArray,S.splice(S.indexOf(e),1),O(S),p(S)),t.stopImmediatePropagation()}const p=([...n])=>{if(e){for(var r of(a(e),a(t),n)){let t=document.createElement("div");t.className="project-shortcut-row";let n=document.createElement("div");n.className="project-shortcut-name",n.innerHTML=r.title,t.appendChild(n);let a=document.createElement("div");a.className="project-shortcut-time-div";let i=document.createElement("div");i.className="project-shortcut-time-instruction",i.innerHTML="remaining time:";let o=document.createElement("div");o.className="project-shortcut-time",o.innerHTML=r.projectTimeLimit,a.appendChild(i),a.appendChild(o),t.appendChild(a);let c=document.createElement("div");c.className="project-shortcut-priority-div";let d=document.createElement("div");d.className="project-shortcut-priority-instruction",d.innerHTML="priority:";let l=document.createElement("div");l.className="project-shortcut-priority",l.innerHTML=r.priority,c.appendChild(d),c.appendChild(l),t.appendChild(c);let s=document.createElement("div");s.className="trash-bin-div";let p=document.createElement("img");p.className="icon trash-bin-icon-div",p.src="./assets/imgs/icons/delete.png",p.addEventListener("click",u.bind(this,r)),s.appendChild(p),t.appendChild(s),e.appendChild(t),t.addEventListener("click",m.bind(this,r))}let i=document.createElement("DIV");i.className="more-projects-row";let c=document.createElement("img");c.className="more-projects-row-icon",c.src="./assets/imgs/icons/plus.png";let d=document.createElement("DIV");d.className="more-projects-row-text",d.innerHTML="ADD MORE PROJECTS",i.appendChild(c),i.appendChild(d),i.addEventListener("click",(function(){o()})),e.appendChild(i)}else console.error("Div for containing all project names has not been defined")};return{assignProjectNameContainer:t=>{t instanceof Element?e=t:console.error("You need to provide a NODE element")},assignProjectMainContainer:e=>{e instanceof Element?t=e:console.error("You need to provide a NODE element")},renderProjectMain:m,deleteAllChildNodes:a,createProjectNamesDiv:p,populate:()=>{let t=document.createElement("DIV");t.className="more-projects-row";let n=document.createElement("DIV");n.className="more-projects-row-icon";let a=document.createElement("DIV");a.className="more-projects-row-text",a.innerHTML="ADD MORE PROJECTS",t.appendChild(n),t.appendChild(a),t.addEventListener("click",(function(){o()})),e.appendChild(t)}}}();n.d(t,"projectsArray",(function(){return S})),n.d(t,"resetValue",(function(){return A})),n.d(t,"projectHandler",(function(){return H})),n.d(t,"toDoHandler",(function(){return _})),n.d(t,"saveToLocalStorage",(function(){return O})),n.d(t,"projectsIdLocalStorageSetup",(function(){return x}));let S=[];function A(...e){for(var t of e)t.value=""}function O(e){var t=JSON.stringify(e);localStorage.setItem("projectsArray",t);var n=JSON.stringify(M);localStorage.setItem("idArray",n);var a=JSON.stringify(j);localStorage.setItem("idCount",a)}P.assignProjectMainContainer(document.getElementsByClassName("container")[0]),P.assignProjectNameContainer(document.getElementsByClassName("names-container")[0]),P.populate();function x(e,t){localStorage.getItem("idArray")&&Array.from(JSON.parse(localStorage.getItem("idArray"))),localStorage.getItem("idCount")&&Number(JSON.parse(localStorage.getItem("idCount")))}function H(e){let t=document.querySelector('input[name="project-title"]'),n=document.querySelector("input[name='project-description']"),a=document.querySelector("input[name='project-date']"),r=document.querySelector("input[name='project-priority']");if(e)S[S.indexOf(e)].title=t.value,S[S.indexOf(e)].description=n.value,S[S.indexOf(e)].dueDate=a.value,S[S.indexOf(e)].priority=r.value,P.createProjectNamesDiv(S),P.renderProjectMain(S[S.indexOf(e)]),S[S.indexOf(e)];else if(t.value&&n.value&&a.value&&r.value){let e=new D(t.value,n.value,a.value,r.value);S.push(e),P.createProjectNamesDiv(S)}else console.error("You need to fill the fields to create a project");O(S)}function _(e,t){let n=document.querySelector('input[name="todo-title"]'),r=document.querySelector("input[name='todo-description']"),i=document.querySelector("input[name='todo-priority']"),o=document.querySelector(".icon-container-img-checked");if(t)e.toDos[e.toDos.indexOf(t)].title=n.value,e.toDos[e.toDos.indexOf(t)].description=r.value,e.toDos[e.toDos.indexOf(t)].priority=i.value,e.toDos[e.toDos.indexOf(t)].icon=o.src,P.renderProjectMain(e);else if(n.value&&r.value&&i.value)if(o){let t=new a(n.value,r.value,i.value,o.src);e.addToDo(t),P.renderProjectMain(e)}else{o="./assets/imgs/icons/notification.png";let t=new a(n.value,r.value,i.value,o);e.addToDo(t),P.renderProjectMain(e)}else console.error("You need to fill all the fields in order to create a toDo");O(S)}(()=>{if(localStorage.getItem("projectsArray")){for(var e=Array.from(JSON.parse(localStorage.getItem("projectsArray"))),t=0;t<e.length;t++){let r=new D(e[t]._title,e[t]._description,e[t]._dueDate,e[t]._id),i=Array.from(e[t]._toDos);for(var n of i){let e=new a(n._title,n._description,n._priority,n._icon);r.addToDo(e)}S.push(r)}P.createProjectNamesDiv(S)}})();t.default=S}]);