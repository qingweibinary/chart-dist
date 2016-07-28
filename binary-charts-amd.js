define("binary-charts", ["react"], function(__WEBPACK_EXTERNAL_MODULE_13__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var winPlotBand = exports.winPlotBand = function winPlotBand(from, to) {
	    return {
	        id: 'barrier-band',
	        from: from,
	        to: to,
	        color: 'rgba(0, 255, 0, 0.05)',
	        label: {
	            text: 'Win',
	            style: {
	                fontSize: '25px',
	                fontWeight: 'bold',
	                color: 'rgba(0, 255, 0, 0.5)'
	            }
	        }
	    };
	};
	
	var lossPlotBand = exports.lossPlotBand = function lossPlotBand(from, to) {
	    return {
	        id: 'barrier-band',
	        from: from,
	        to: to,
	        color: 'rgba(255, 0, 0, 0.05)',
	        label: {
	            text: 'Loss',
	            style: {
	                fontSize: '25px',
	                fontWeight: 'bold',
	                color: 'rgba(255, 0, 0, 0.5)'
	            }
	        }
	    };
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getAbsoluteBarrierFromContract = __webpack_require__(11);
	
	var _getAbsoluteBarrierFromContract2 = _interopRequireDefault(_getAbsoluteBarrierFromContract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (contract, lastTick) {
	    return (0, _getAbsoluteBarrierFromContract2.default)(contract, lastTick, 'barrier');
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (percentage) {
	    return "rgba(42, 48, 82, " + percentage + ")";
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getAbsoluteBarrierFromContract = __webpack_require__(11);
	
	var _getAbsoluteBarrierFromContract2 = _interopRequireDefault(_getAbsoluteBarrierFromContract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (contract, lastTick) {
	    return (0, _getAbsoluteBarrierFromContract2.default)(contract, lastTick, 'barrier2');
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	 Highstock JS v4.2.4 (2016-04-14)
	
	 (c) 2009-2016 Torstein Honsi
	
	 License: www.highcharts.com/license
	*/
	(function(J,ga){typeof module==="object"&&module.exports?module.exports=J.document?ga(J):ga:J.Highcharts=ga(J)})(typeof window!=="undefined"?window:this,function(J){function ga(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw Error(c);J.console&&console.log(c)}function yb(a,b,c){this.options=b;this.elem=a;this.prop=c}function C(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&
	Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function G(a,b){return parseInt(a,b||10)}function Da(a){return typeof a==="string"}function da(a){return a&&typeof a==="object"}function Ja(a){return Object.prototype.toString.call(a)==="[object Array]"}function ua(a){return typeof a==="number"}function Aa(a,b){for(var c=
	a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function s(a){return a!==t&&a!==null}function X(a,b,c){var d,e;if(Da(b))s(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(s(b)&&da(b))for(d in b)a.setAttribute(d,b[d]);return e}function va(a){return Ja(a)?a:[a]}function $a(a,b,c){if(b)return setTimeout(a,b,c);a.call(0,c)}function F(a,b){if(Ka&&!ja&&b&&b.opacity!==t)b.filter="alpha(opacity="+b.opacity*100+")";x(a.style,b)}function ea(a,b,c,d,e){a=B.createElement(a);b&&x(a,b);e&&
	F(a,{padding:0,border:"none",margin:0});c&&F(a,c);d&&d.appendChild(a);return a}function la(a,b){var c=function(){};c.prototype=new a;x(c.prototype,b);return c}function Na(a,b,c){return Array((b||2)+1-String(a).length).join(c||0)+a}function fb(a){return(gb&&gb(a)||zb||0)*6E4}function La(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=N.lang,i=
	void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=z.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=ma(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function Ab(a){return Y.pow(10,V(Y.log(a)/Y.LN10))}function Bb(a,b,c,d,e){var f,g=a,c=q(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function ob(a,b){var c=a.length,
	d,e;for(e=0;e<c;e++)a[e].safeI=e;a.sort(function(a,c){d=b(a,c);return d===0?a.safeI-c.safeI:d});for(e=0;e<c;e++)delete a[e].safeI}function Oa(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Ea(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Pa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Va(a){pb||(pb=ea(Wa));a&&pb.appendChild(a);pb.innerHTML=""}function na(a,b){return parseFloat(a.toPrecision(b||14))}function ab(a,
	b){b.renderer.globalAnimation=q(a,b.animation)}function hb(a){return da(a)?C(a):{duration:a?500:0}}function Ob(){var a=N.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";fa=a.Date||J.Date;zb=b&&a.timezoneOffset;gb=b&&a.getTimezoneOffset;qb=function(a,c,d,h,i,j){var k;b?(k=fa.UTC.apply(0,arguments),k+=fb(k)):k=(new fa(a,c,q(d,1),q(h,0),q(i,0),q(j,0))).getTime();return k};Cb=c+"Minutes";Db=c+"Hours";Eb=c+"Day";bb=c+"Date";ib=c+"Month";jb=c+"FullYear";Pb=d+"Milliseconds";Qb=d+"Seconds";Rb=d+"Minutes";
	Sb=d+"Hours";rb=d+"Date";Fb=d+"Month";Gb=d+"FullYear"}function wa(a){if(!(this instanceof wa))return new wa(a);this.init(a)}function Z(){}function cb(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Tb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||
	(f?"middle":c?"bottom":"top"),y:q(b.y,f?4:c?14:-6),x:q(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}function Hb(a){var b=a.options,c=b.navigator,d=c.enabled,b=b.scrollbar,e=b.enabled,f=d?c.height:0,g=e?b.height:0;this.handles=[];this.scrollbarButtons=[];this.elementsToDestroy=[];this.chart=a;this.setBaseSeries();this.height=f;this.scrollbarHeight=g;this.scrollbarEnabled=e;this.navigatorEnabled=d;this.navigatorOptions=c;this.scrollbarOptions=b;this.outlineHeight=f+g;this.init()}
	function Ib(a){this.init(a)}var t,B=J.document,Y=Math,y=Y.round,V=Y.floor,Fa=Y.ceil,v=Y.max,E=Y.min,S=Y.abs,ba=Y.cos,ka=Y.sin,Ba=Y.PI,pa=Ba*2/360,Ma=J.navigator&&J.navigator.userAgent||"",Ub=J.opera,Ka=/(msie|trident|edge)/i.test(Ma)&&!Ub,sb=B&&B.documentMode===8,tb=!Ka&&/AppleWebKit/.test(Ma),Xa=/Firefox/.test(Ma),kb=/(Mobile|Android|Windows Phone)/.test(Ma),Qa="http://www.w3.org/2000/svg",ja=B&&B.createElementNS&&!!B.createElementNS(Qa,"svg").createSVGRect,Zb=Xa&&parseInt(Ma.split("Firefox/")[1],
	10)<4,qa=B&&!ja&&!Ka&&!!B.createElement("canvas").getContext,Ya,db,Vb={},Jb=0,pb,N,ma,H,ra=function(){},$=[],lb=0,Wa="div",$b=/^[0-9]+$/,ub=["plotTop","marginRight","marginBottom","plotLeft"],fa,qb,zb,gb,Cb,Db,Eb,bb,ib,jb,Pb,Qb,Rb,Sb,rb,Fb,Gb,K={},z;z=J.Highcharts?ga(16,!0):{win:J};z.seriesTypes=K;var Ra=[],xa,sa,n,Sa,Kb,ta,D,T,M,eb,Ta;yb.prototype={dSetter:function(){var a=this.paths[0],b=this.paths[1],c=[],d=this.now,e=a.length,f;if(d===1)c=this.toD;else if(e===b.length&&d<1)for(;e--;)f=parseFloat(a[e]),
	c[e]=isNaN(f)?a[e]:d*parseFloat(b[e]-f)+f;else c=b;this.elem.attr("d",c)},update:function(){var a=this.elem,b=this.prop,c=this.now,d=this.options.step;if(this[b+"Setter"])this[b+"Setter"]();else a.attr?a.element&&a.attr(b,c):a.style[b]=c+this.unit;d&&d.call(a,c,this)},run:function(a,b,c){var d=this,e=function(a){return e.stopped?!1:d.step(a)},f;this.startTime=+new fa;this.start=a;this.end=b;this.unit=c;this.now=this.start;this.pos=0;e.elem=this.elem;if(e()&&Ra.push(e)===1)e.timerId=setInterval(function(){for(f=
	0;f<Ra.length;f++)Ra[f]()||Ra.splice(f--,1);Ra.length||clearInterval(e.timerId)},13)},step:function(a){var b=+new fa,c,d=this.options;c=this.elem;var e=d.complete,f=d.duration,g=d.curAnim,h;if(c.attr&&!c.element)c=!1;else if(a||b>=f+this.startTime){this.now=this.end;this.pos=1;this.update();a=g[this.prop]=!0;for(h in g)g[h]!==!0&&(a=!1);a&&e&&e.call(c);c=!1}else this.pos=d.easing((b-this.startTime)/f),this.now=this.start+(this.end-this.start)*this.pos,this.update(),c=!0;return c},initPath:function(a,
	b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h=a.isArea,i=h?2:1,j=function(a){for(g=a.length;g--;)(a[g]==="M"||a[g]==="L")&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=c.slice(0,f).concat(c),h&&(c=c.concat(c.slice(c.length-f)));a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=b.slice().splice(b.length/i-f,f*i),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),[].splice.apply(b,[b.length/i,0].concat(d));return[b,
	c]}};var x=z.extend=function(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a},q=z.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==t&&c!==null)return c},U=z.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};ma=function(a,b,c){if(!s(b)||isNaN(b))return N.lang.invalidDate||"";var a=q(a,"%Y-%m-%d %H:%M:%S"),d=new fa(b-fb(b)),e,f=d[Db](),g=d[Eb](),h=d[bb](),i=d[ib](),j=d[jb](),k=N.lang,l=k.weekdays,
	m=k.shortWeekdays,d=x({a:m?m[g]:l[g].substr(0,3),A:l[g],d:Na(h),e:Na(h,2," "),w:g,b:k.shortMonths[i],B:k.months[i],m:Na(i+1),y:j.toString().substr(2,2),Y:j,H:Na(f),k:f,I:Na(f%12||12),l:f%12||12,M:Na(d[Cb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Na(d.getSeconds()),L:Na(y(b%1E3),3)},z.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};H={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,
	week:6048E5,month:24192E5,year:314496E5};z.numberFormat=function(a,b,c,d){var a=+a||0,e=N.lang,f=(a.toString().split(".")[1]||"").length,g,h,i=Math.abs(a);b===-1?b=Math.min(f,20):isNaN(b)&&(b=2);g=String(G(i.toFixed(b)));h=g.length>3?g.length%3:0;c=q(c,e.decimalPoint);d=q(d,e.thousandsSep);a=a<0?"-":"";a+=h?g.substr(0,h)+d:"";a+=g.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+d);+b&&(d=Math.abs(i-g+Math.pow(10,-Math.max(b,f)-1)),a+=c+d.toFixed(b).slice(2));return a};Math.easeInOutSine=function(a){return-0.5*
	(Math.cos(Math.PI*a)-1)};xa=function(a,b){var c;if(b==="width")return Math.min(a.offsetWidth,a.scrollWidth)-xa(a,"padding-left")-xa(a,"padding-right");else if(b==="height")return Math.min(a.offsetHeight,a.scrollHeight)-xa(a,"padding-top")-xa(a,"padding-bottom");return(c=J.getComputedStyle(a,void 0))&&G(c.getPropertyValue(b))};sa=function(a,b){return b.indexOf?b.indexOf(a):[].indexOf.call(b,a)};Sa=function(a,b){return[].filter.call(a,b)};ta=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)c[d]=b.call(a[d],
	a[d],d,a);return c};Kb=function(a){var b=B.documentElement,a=a.getBoundingClientRect();return{top:a.top+(J.pageYOffset||b.scrollTop)-(b.clientTop||0),left:a.left+(J.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};Ta=function(a){for(var b=Ra.length;b--;)if(Ra[b].elem===a)Ra[b].stopped=!0};n=function(a,b){return Array.prototype.forEach.call(a,b)};D=function(a,b,c){function d(b){b.target=b.srcElement||J;c.call(a,b)}var e=a.hcEvents=a.hcEvents||{};if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){if(!a.hcEventsIE)a.hcEventsIE=
	{};a.hcEventsIE[c.toString()]=d;a.attachEvent("on"+b,d)}e[b]||(e[b]=[]);e[b].push(c)};T=function(a,b,c){function d(b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.attachEvent&&(c=a.hcEventsIE[c.toString()],a.detachEvent("on"+b,c))}function e(){var c,e,f;if(a.nodeName)for(f in b?(c={},c[b]=!0):c=g,c)if(g[f])for(e=g[f].length;e--;)d(f,g[f][e])}var f,g=a.hcEvents,h;if(g)b?(f=g[b]||[],c?(h=sa(c,f),h>-1&&(f.splice(h,1),g[b]=f),d(b,c)):(e(),g[b]=[])):(e(),a.hcEvents={})};M=function(a,b,c,d){var e;
	e=a.hcEvents;var f,g,c=c||{};if(B.createEvent&&(a.dispatchEvent||a.fireEvent))e=B.createEvent("Events"),e.initEvent(b,!0,!0),e.target=a,x(e,c),a.dispatchEvent?a.dispatchEvent(e):a.fireEvent(b,e);else if(e){e=e[b]||[];f=e.length;if(!c.preventDefault)c.preventDefault=function(){c.defaultPrevented=!0};c.target=a;if(!c.type)c.type=b;for(b=0;b<f;b++)g=e[b],g.call(a,c)===!1&&c.preventDefault()}d&&!c.defaultPrevented&&d(c)};eb=function(a,b,c){var d,e="",f,g,h;da(c)||(d=arguments,c={duration:d[2],easing:d[3],
	complete:d[4]});if(!ua(c.duration))c.duration=400;c.easing=typeof c.easing==="function"?c.easing:Math[c.easing]||Math.easeInOutSine;c.curAnim=C(b);for(h in b)g=new yb(a,c,h),f=null,h==="d"?(g.paths=g.initPath(a,a.d,b.d),g.toD=b.d,d=0,f=1):a.attr?d=a.attr(h):(d=parseFloat(xa(a,h))||0,h!=="opacity"&&(e="px")),f||(f=b[h]),f.match&&f.match("px")&&(f=f.replace(/px/g,"")),g.run(d,f,e)};if(J.jQuery)J.jQuery.fn.highcharts=function(){var a=[].slice.call(arguments);if(this[0])return a[0]?(new (z[Da(a[0])?a.shift():
	"Chart"])(this[0],a[0],a[1]),this):$[X(this[0],"data-highcharts-chart")]};B&&!B.defaultView&&(xa=function(a,b){var c;c={width:"clientWidth",height:"clientHeight"}[b];if(a.style[b])return G(a.style[b]);b==="opacity"&&(b="filter");if(c)return a.style.zoom=1,Math.max(a[c]-2*xa(a,"padding"),0);c=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];b==="filter"&&(c=c.replace(/alpha\(opacity=([0-9]+)\)/,function(a,b){return b/100}));return c===""?1:G(c)});Array.prototype.forEach||
	(n=function(a,b){for(var c=0,d=a.length;c<d;c++)if(b.call(a[c],a[c],c,a)===!1)return c});Array.prototype.indexOf||(sa=function(a,b){var c,d=0;if(b)for(c=b.length;d<c;d++)if(b[d]===a)return d;return-1});Array.prototype.filter||(Sa=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c});z.Fx=yb;z.inArray=sa;z.each=n;z.grep=Sa;z.offset=Kb;z.map=ta;z.addEvent=D;z.removeEvent=T;z.fireEvent=M;z.animate=eb;z.animObject=hb;z.stop=Ta;N={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
	symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,
	canvasToolsURL:"http://code.highcharts.com/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/stock/4.2.4/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",
	align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return this.y===null?"":z.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},
	verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",
	fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,textAlign:"center"}},tooltip:{enabled:!0,animation:ja,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",
	second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',shadow:!0,snap:kb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,text:"Highcharts.com",
	href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var W=N.plotOptions,ca=W.line;Ob();wa.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[G(a[1]),G(a[2]),G(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[G(a[1],16),G(a[2],16),G(a[3],16),1]}},
	{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[G(a[1]),G(a[2]),G(a[3]),1]}}],init:function(a){var b,c,d,e;if((this.input=a)&&a.stops)this.stops=ta(a.stops,function(a){return new wa(a[1])});else for(d=this.parsers.length;d--&&!c;)e=this.parsers[d],(b=e.regex.exec(a))&&(c=e.parse(b));this.rgba=c||[]},get:function(a){var b=this.input,c=this.rgba,d;this.stops?(d=C(b),d.stops=[].concat(d.stops),n(this.stops,function(b,c){d.stops[c]=[d.stops[c][0],b.get(a)]})):
	d=c&&!isNaN(c[0])?a==="rgb"||!a&&c[3]===1?"rgb("+c[0]+","+c[1]+","+c[2]+")":a==="a"?c[3]:"rgba("+c.join(",")+")":b;return d},brighten:function(a){var b,c=this.rgba;if(this.stops)n(this.stops,function(b){b.brighten(a)});else if(ua(a)&&a!==0)for(b=0;b<3;b++)c[b]+=G(a*255),c[b]<0&&(c[b]=0),c[b]>255&&(c[b]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};Z.prototype={opacity:1,textProps:"direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
	init:function(a,b){this.element=b==="span"?ea(b):B.createElementNS(Qa,b);this.renderer=a},animate:function(a,b,c){b=q(b,this.renderer.globalAnimation,!0);Ta(this);if(b){if(c)b.complete=c;eb(this,a,b)}else this.attr(a,null,c);return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,m,o,p,r=[],A;a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];i=d.gradients;k=a.stops;o=c.radialReference;Ja(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});
	f==="radialGradient"&&o&&!s(g.gradientUnits)&&(h=g,g=C(g,d.getRadialAttr(o,h),{gradientUnits:"userSpaceOnUse"}));for(p in g)p!=="id"&&r.push(p,g[p]);for(p in k)r.push(k[p]);r=r.join(",");i[r]?o=i[r].attr("id"):(g.id=o="highcharts-"+Jb++,i[r]=j=d.createElement(f).attr(g).add(d.defs),j.radAttr=h,j.stops=[],n(k,function(a){a[1].indexOf("rgba")===0?(e=wa(a[1]),l=e.get("rgb"),m=e.get("a")):(l=a[1],m=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":l,"stop-opacity":m}).add(j);j.stops.push(a)}));
	A="url("+d.url+"#"+o+")";c.setAttribute(b,A);c.gradient=r;a.toString=function(){return A}}},applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e={},f=this.renderer.forExport,g=f||b.style.textShadow!==t&&!Ka;if(d)e.textShadow=a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill));if(tb||f)e.textRendering="geometricPrecision";g?this.css(e):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),n(a.split(/\s?,\s?/g),function(a){var d=
	b.firstChild,e,f,a=a.split(" ");e=a[a.length-1];(f=a[a.length-2])&&n(c,function(a,c){var g;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));g=a.cloneNode(1);X(g,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/v(G(f),3),"stroke-width":f,"stroke-linejoin":"round"});b.insertBefore(g,d)})}))},attr:function(a,b,c){var d,e=this.element,f,g=this,h;typeof a==="string"&&b!==t&&(d=a,a={},a[d]=b);if(typeof a===
	"string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(d in a){b=a[d];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d)&&(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(d==="x"||d==="y"))this.doTransform=!0;h||(h=this[d+"Setter"]||this._defaultSetter,h.call(this,b,d,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,b,h))}if(this.doTransform)this.updateTransform(),this.doTransform=!1}c&&
	c();return g},updateShadows:function(a,b,c){for(var d=this.shadows,e=d.length;e--;)c.call(d[e],a==="height"?Math.max(b-(d[e].cutHeight||0),0):a==="d"?this.d:b,a,d[e])},addClass:function(a){var b=this.element,c=X(b,"class")||"";c.indexOf(a)===-1&&X(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;n("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=q(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",
	a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a){var b,c={},d,e=this.strokeWidth||0;d=y(e)%2/2;a.x=V(a.x||this.x||0)+d;a.y=V(a.y||this.y||0)+d;a.width=V((a.width||this.width||0)-2*d);a.height=V((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()===
	"text"&&G(a.width)||this.textWidth;b&&(a=x(b,c));this.styles=a;e&&(qa||!ja&&this.renderer.forExport)&&delete a.width;if(Ka&&!ja)F(this.element,a);else{b=function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";X(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;db&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=fa.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(Ma.indexOf("Android")===
	-1||fa.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,
	d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(s(c)||s(d))&&a.push("scale("+q(c,1)+" "+q(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;
	if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Da(c))this.alignTo=d=c||"renderer",Aa(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=q(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=y(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=y(g);this[this.placed?
	"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a,b){var c,d=this.renderer,e,f,g,h=this.element,i=this.styles;e=this.textStr;var j,k=h.style,l,m=d.cache,o=d.cacheKeys,p;f=q(b,this.rotation);g=f*pa;e!==t&&(p=["",f||0,i&&i.fontSize,h.style.width].join(","),p=e===""||$b.test(e)?"num:"+e.toString().length+p:e+p);p&&!a&&(c=m[p]);if(!c){if(h.namespaceURI===Qa||d.forExport){try{l=this.fakeTS&&function(a){n(h.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=
	a})},Xa&&k.textShadow?(j=k.textShadow,k.textShadow=""):l&&l("none"),c=h.getBBox?x({},h.getBBox()):{width:h.offsetWidth,height:h.offsetHeight},j?k.textShadow=j:l&&l("")}catch(r){}if(!c||c.width<0)c={width:0,height:0}}else c=this.htmlGetBBox();if(d.isSVG){d=c.width;e=c.height;if(Ka&&i&&i.fontSize==="11px"&&e.toPrecision(3)==="16.9")c.height=e=14;if(f)c.width=S(e*ka(g))+S(d*ba(g)),c.height=S(e*ba(g))+S(d*ka(g))}if(p){for(;o.length>250;)delete m[o.shift()];m[p]||o.push(p);m[p]=c}}return c},show:function(a){return this.attr({visibility:a?
	"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=
	a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=null;Ta(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&n(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,
	d=b;a.alignTo&&Aa(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=q(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?"(-1,-1)":"("+q(a.offsetX,1)+", "+q(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;X(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:"none"});if(c)X(f,"height",v(X(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):
	g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=q(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b,c=this["stroke-width"];c===
	"inherit"&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=G(a[b])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},
	opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=B.createElementNS(Qa,"title"),this.element.appendChild(b));b.appendChild(B.createTextNode(String(q(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},visibilitySetter:function(a,
	b,c){a==="inherit"?c.removeAttribute(b):c.setAttribute(b,a)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;if(s(a))g.zIndex=a,a=+a,this[b]===a&&(e=!1),this[b]=a;if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=d[i],f=e.zIndex,e!==g&&(G(f)>a||!s(a)&&s(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};Z.prototype.yGetter=
	Z.prototype.xGetter;Z.prototype.translateXSetter=Z.prototype.translateYSetter=Z.prototype.rotationSetter=Z.prototype.verticalAlignSetter=Z.prototype.scaleXSetter=Z.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};Z.prototype["stroke-widthSetter"]=Z.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&this["stroke-width"])this.strokeWidth=this["stroke-width"],Z.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),
	this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var ya=function(){this.init.apply(this,arguments)};ya.prototype={Element:Z,init:function(a,b,c,d,e,f){var g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);a.innerHTML.indexOf("xmlns")===-1&&X(g,"xmlns",Qa);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(Xa||tb)&&B.getElementsByTagName("base").length?J.location.href.replace(/#.*?$/,
	"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(B.createTextNode("Created with Highstock 4.2.4"));this.defs=this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);var h;if(Xa&&a.getBoundingClientRect)this.subPixelFix=b=function(){F(a,{left:0,top:0});h=a.getBoundingClientRect();F(a,{left:Fa(h.left)-h.left+"px",top:Fa(h.top)-h.top+"px"})},b(),
	D(J,"resize",b)},getStyle:function(a){return this.style=x({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Pa(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();this.subPixelFix&&T(J,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;
	b.init(this,a);return b},draw:function(){},getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=q(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j=X(b,"x"),k=a.styles,l=a.textWidth,m=k&&k.lineHeight,o=k&&k.textShadow,p=k&&k.textOverflow==="ellipsis",r=g.length,A=l&&!a.added&&this.box,P=function(a){return m?G(m):c.fontMetrics(/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:
	k&&k.fontSize||c.style.fontSize||12,a).h},u=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};r--;)b.removeChild(g[r]);!f&&!o&&!p&&e.indexOf(" ")===-1?b.appendChild(B.createTextNode(u(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,A&&A.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):[e],e[e.length-1]===
	""&&e.pop(),n(e,function(e,f){var g,m=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");n(g,function(e){if(e!==""||g.length===1){var o={},r=B.createElementNS(Qa,"tspan"),A;h.test(e)&&(A=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),X(r,"style",A));i.test(e)&&!d&&(X(r,"onclick",'location.href="'+e.match(i)[1]+'"'),F(r,{cursor:"pointer"}));e=u(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){r.appendChild(B.createTextNode(e));if(m)o.dx=0;else if(f&&j!==null)o.x=
	j;X(r,o);b.appendChild(r);!m&&f&&(!ja&&d&&F(r,{display:"block"}),X(r,"dy",P(r)));if(l){for(var o=e.replace(/([^\^])-/g,"$1- ").split(" "),q=g.length>1||f||o.length>1&&k.whiteSpace!=="nowrap",w,n,s,t=[],v=P(r),y=1,x=a.rotation,C=e,z=C.length;(q||p)&&(o.length||t.length);)a.rotation=0,w=a.getBBox(!0),s=w.width,!ja&&c.forExport&&(s=c.measureSpanWidth(r.firstChild.data,a.styles)),w=s>l,n===void 0&&(n=w),p&&n?(z/=2,C===""||!w&&z<0.5?o=[]:(w&&(n=!0),C=e.substring(0,C.length+(w?-1:1)*Fa(z)),o=[C+(l>3?"\u2026":
	"")],r.removeChild(r.firstChild))):!w||o.length===1?(o=t,t=[],o.length&&(y++,r=B.createElementNS(Qa,"tspan"),X(r,{dy:v,x:j}),A&&X(r,"style",A),b.appendChild(r)),s>l&&(l=s)):(r.removeChild(r.firstChild),t.unshift(o.pop())),o.length&&r.appendChild(B.createTextNode(o.join(" ").replace(/- /g,"-")));n&&a.attr("title",a.textStr);a.rotation=x}m++}}})}),A&&A.removeChild(b),o&&a.applyTextShadow&&a.applyTextShadow(o))},getContrast:function(a){a=wa(a).rgba;return a[0]+a[1]+a[2]>384?"#000000":"#FFFFFF"},button:function(a,
	b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,m,o,p,r,A,a={x1:0,y1:0,x2:0,y2:1},e=C({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);o=e.style;delete e.style;f=C(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);p=f.style;delete f.style;g=C(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);r=g.style;delete g.style;h=C(e,{style:{color:"#CCC"}},
	h);A=h.style;delete h.style;D(j.element,Ka?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(p)});D(j.element,Ka?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],m=[o,p,r][k],j.attr(l).css(m))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(r):a===3&&j.attr(h).css(A):j.attr(e).css(o)};return j.on("click",function(a){k!==3&&d.call(j,a)}).attr(e).css(x({cursor:"default"},o))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=y(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=y(a[2])+b%2/
	2);return a},path:function(a){var b={fill:"none"};Ja(a)?b.d=a:da(a)&&x(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=da(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,c){c.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(da(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});a.r=c;return a},rect:function(a,b,c,d,e,f){var e=da(a)?a.r:e,g=this.createElement("rect"),
	a=da(a)?a:a===t?{}:{x:a,y:b,width:v(c,0),height:v(d,0)};if(f!==t)g.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a,b,c){X(c,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[q(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return s(a)?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:"none"};arguments.length>
	1&&x(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g=this,h,i=this.symbols[a],i=i&&i(y(b),y(c),d,e,f),j=/^url\((.*?)\)$/,k,l;if(i)h=this.path(i),x(h,{symbolName:a,x:b,y:c,width:d,height:e}),f&&x(h,f);else if(j.test(a))l=function(a,b){a.element&&(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(y((d-
	b[0])/2),y((e-b[1])/2)))},k=a.match(j)[1],a=Vb[k]||f&&f.width&&f.height&&[f.width,f.height],h=this.image(k).attr({x:b,y:c}),h.isImg=!0,a?l(h,a):(h.attr({width:0,height:0}),ea("img",{onload:function(){this.width===0&&(F(this,{position:"absolute",top:"-999em"}),B.body.appendChild(this));l(h,Vb[k]=[this.width,this.height]);this.parentNode&&this.parentNode.removeChild(this);g.imgCount--;if(!g.imgCount&&$[g.chartIndex].onload)$[g.chartIndex].onload()},src:k}),this.imgCount++);return h},symbols:{circle:function(a,
	b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=ba(f),j=ka(f),
	k=ba(g),g=ka(g),e=e.end-f<Ba?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,b,c,d,e){var f=E(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,e=e&&e.anchorY,i;i=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&e>b+g&&e<b+d-g?i.splice(13,3,"L",a+c,e-6,a+c+6,e,a+c,e+6,a+c,b+d-f):h&&h<0&&e>b+g&&e<b+d-g?i.splice(33,3,
	"L",a,e+6,a-6,e,a,e-6,a,b+f):e&&e>d&&h>a+g&&h<a+c-g?i.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):e&&e<0&&h>a+g&&h<a+c-g&&i.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return i}},clipRect:function(a,b,c,d){var e="highcharts-"+Jb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=qa||!ja&&this.forExport,f={};if(d&&(this.allowHTML||!this.forExport))return this.html(a,b,c);f.x=Math.round(b||
	0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),m;for(m=0;m<d.length;m++)e=d[m],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){var c,d,a=a||this.style.fontSize;!a&&b&&J.getComputedStyle&&(b=b.element||b,a=(c=J.getComputedStyle(b,""))&&c.fontSize);a=/px/.test(a)?G(a):/em/.test(a)?parseFloat(a)*
	12:12;c=a<24?a+3:y(a*1.2);d=y(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=v(d*ba(b*pa),4));return{x:-a/3*ka(b*pa),y:d}},label:function(a,b,c,d,e,f,g,h,i){var j=this,k=j.g(i),l=j.text("",0,0,g).attr({zIndex:1}),m,o,p=0,r=3,A=0,q,u,w,O,R=0,ha={},v,z,L,E,B;L=function(){var a,b;a=l.element.style;o=(q===void 0||u===void 0||k.styles.textAlign)&&s(l.textStr)&&l.getBBox();k.width=(q||o.width||0)+2*r+A;k.height=(u||o.height||0)+2*r;v=r+j.fontMetrics(a&&a.fontSize,l).b;if(z){if(!m)a=
	R,b=(h?-v:0)+R,k.box=m=d?j.symbol(d,a,b,k.width,k.height,ha):j.rect(a,b,k.width,k.height,0,ha["stroke-width"]),m.isImg||m.attr("fill","none"),m.add(k);m.isImg||m.attr(x({width:y(k.width),height:y(k.height)},ha));ha=null}};E=function(){var a=k.styles,a=a&&a.textAlign,b=A+r,c;c=h?0:v;if(s(q)&&o&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(q-o.width);if(b!==l.x||c!==l.y)l.attr("x",b),c!==t&&l.attr("y",c);l.x=b;l.y=c};B=function(a,b){m?m.attr(a,b):ha[a]=b};k.onAdd=function(){l.add(k);k.attr({text:a||
	a===0?a:"",x:b,y:c});m&&s(e)&&k.attr({anchorX:e,anchorY:f})};k.widthSetter=function(a){q=a};k.heightSetter=function(a){u=a};k.paddingSetter=function(a){if(s(a)&&a!==r)r=k.padding=a,E()};k.paddingLeftSetter=function(a){s(a)&&a!==A&&(A=a,E())};k.alignSetter=function(a){a={left:0,center:0.5,right:1}[a];a!==p&&(p=a,o&&k.attr({x:w}))};k.textSetter=function(a){a!==t&&l.textSetter(a);L();E()};k["stroke-widthSetter"]=function(a,b){a&&(z=!0);R=a%2/2;B(b,a)};k.strokeSetter=k.fillSetter=k.rSetter=function(a,
	b){b==="fill"&&a&&(z=!0);B(b,a)};k.anchorXSetter=function(a,b){e=a;B(b,y(a)-R-w)};k.anchorYSetter=function(a,b){f=a;B(b,a-O)};k.xSetter=function(a){k.x=a;p&&(a-=p*((q||o.width)+2*r));w=y(a);k.attr("translateX",w)};k.ySetter=function(a){O=k.y=y(a);k.attr("translateY",O)};var D=k.css;return x(k,{css:function(a){if(a){var b={},a=C(a);n(k.textProps,function(c){a[c]!==t&&(b[c]=a[c],delete a[c])});l.css(b)}return D.call(k,a)},getBBox:function(){return{width:o.width+2*r,height:o.height+2*r,x:o.x-r,y:o.y-
	r}},shadow:function(a){m&&m.shadow(a);return k},destroy:function(){T(k.element,"mouseenter");T(k.element,"mouseleave");l&&(l=l.destroy());m&&(m=m.destroy());Z.prototype.destroy.call(k);k=j=L=E=B=null}})}};Ya=ya;x(Z.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=x(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=
	this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,j=this.styles;F(b,{marginLeft:c,marginTop:d});i&&n(i,function(a){F(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&n(b.childNodes,function(c){a.invertChild(c,
	b)});if(b.tagName==="SPAN"){var i=this.rotation,k=G(this.textWidth),l=j&&j.whiteSpace,m=[i,g,b.innerHTML,this.textWidth,this.textAlign].join(",");if(m!==this.cTT){j=a.fontMetrics(b.style.fontSize).b;s(i)&&this.setSpanRotation(i,h,j);if(b.offsetWidth>k&&/[ \-]/.test(b.textContent||b.innerText))F(b,{width:k+"px",display:"block",whiteSpace:l||"normal"}),this.hasTextWidth=!0;else if(this.hasTextWidth)F(b,{width:"",display:"",whiteSpace:l||"nowrap"}),this.hasTextWidth=!1;this.getSpanCorrection(this.hasTextWidth?
	k:b.offsetWidth,j,h,i,g)}F(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(tb)j=b.offsetHeight;this.cTT=m}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=Ka?"-ms-transform":tb?"-webkit-transform":Xa?"MozTransform":Ub?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";d[e+(Xa?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";F(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});x(ya.prototype,{html:function(a,b,c){var d=
	this.createElement("span"),e=d.element,f=d.renderer,g=f.isSVG,h=function(a,b){n(["opacity","visibility"],function(c){U(a,c+"Setter",function(a,c,d,e){a.call(this,c,d,e);b[d]=c})})};d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;d.htmlUpdateTransform()};g&&h(d,d.element.style);d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:y(b),y:y(c)}).css({position:"absolute",fontFamily:this.style.fontFamily,
	fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(g)d.add=function(a){var b,c=f.box.parentNode,g=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)g.push(a),a=a.parentGroup;n(g.reverse(),function(a){var d,e=X(a.element,"class");e&&(e={className:e});b=a.div=a.div||ea(Wa,e,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",opacity:a.opacity},b||c);d=b.style;x(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,
	c){d.top=b+"px";a[c]=b;a.doTransform=!0}});h(a,d)})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});var mb,aa;if(!ja&&!qa)aa={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Wa;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=ea(c);this.renderer=
	a},add:function(a){var b=this.renderer,c=this.element,d=b.box,e=a&&a.inverted,d=a?a.element||a:d;if(a)this.parentGroup=a;e&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:Z.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=ba(a*pa),c=ka(a*pa);F(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",
	b,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var f=d?ba(d*pa):1,g=d?ka(d*pa):0,h=q(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),F(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(ua(a[b]))c[b]=y(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=
	a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,Aa(c,b),c.push(b),b.destroyClip=function(){Aa(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:sb?"inherit":"rect(auto)"});return b.css(a)},css:Z.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Va(a)},destroy:function(){this.destroyClip&&this.destroyClip();return Z.prototype.destroy.apply(this)},
	on:function(a,b){this.element["on"+a]=function(){var a=J.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=G(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,m,o,p;k&&typeof k.value!=="string"&&(k="x");m=k;if(a){o=q(a.width,3);p=(a.opacity||0.15)/o;for(e=1;e<=3;e++){l=o*2+1-2*e;c&&(m=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',
	l,'" filled="false" path="',m,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=ea(g.prepVML(j),null,{left:G(i.left)+q(a.offsetX,1),top:G(i.top)+q(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',p*e,'"/>'];ea(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:ra,setAttr:function(a,b){sb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=
	a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||ea(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!=="none",this.setAttr("fillcolor",this.renderer.color(a,
	c,b,this))},"fill-opacitySetter":function(a,b,c){ea(this.renderer.prepVML(["<",b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:ra,rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-y(ka(a*pa)+1)+"px";c.top=y(ba(a*pa))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;ua(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},
	visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&n(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":0,sb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}},aa["stroke-opacitySetter"]=aa["fill-opacitySetter"],z.VMLElement=aa=la(Z,aa),aa.prototype.ySetter=
	aa.prototype.widthSetter=aa.prototype.heightSetter=aa.prototype.xSetter,aa={Element:aa,isIE8:Ma.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Wa).css(x(this.getStyle(d),{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!B.namespaces.hcv){B.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{B.createStyleSheet().cssText=
	"hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){B.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=da(a);return x(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,
	c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+y(a?e:d)+"px,"+y(a?f:b)+"px,"+y(a?b:f)+"px,"+y(a?d:e)+"px)"};!a&&sb&&c==="DIV"&&x(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){n(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j="none";a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,m=a.linearGradient||a.radialGradient,
	o,p,r,A,q,u="",a=a.stops,w,O=[],R=function(){h=['<fill colors="'+O.join(",")+'" opacity="',r,'" o:opacity2="',p,'" type="',i,'" ',u,'focus="100%" method="any" />'];ea(e.prepVML(h),null,null,b)};o=a[0];w=a[a.length-1];o[0]>0&&a.unshift([0,o[1]]);w[0]<1&&a.push([1,w[1]]);n(a,function(a,b){g.test(a[1])?(f=wa(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);O.push(a[0]*100+"% "+k);b?(r=l,A=k):(p=l,q=k)});if(c==="fill")if(i==="gradient")c=m.x1||m[0]||0,a=m.y1||m[1]||0,o=m.x2||m[2]||0,m=m.y2||m[3]||0,u=
	'angle="'+(90-Y.atan((m-a)/(o-c))*180/Ba)+'"',R();else{var j=m.r,ha=j*2,s=j*2,v=m.cx,t=m.cy,y=b.radialReference,x,j=function(){y&&(x=d.getBBox(),v+=(y[0]-x.x)/x.width-0.5,t+=(y[1]-x.y)/x.height-0.5,ha*=y[2]/x.width,s*=y[2]/x.height);u='src="'+N.global.VMLRadialGradientURL+'" size="'+ha+","+s+'" origin="0.5,0.5" position="'+v+","+t+'" color2="'+q+'" ';R()};d.added?j():d.onAdd=j;j=A}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=wa(a),d[c+"-opacitySetter"](f.get("a"),c,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);
	if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:ya.prototype.html,path:function(a){var b={coordsize:"10 10"};Ja(a)?b.d=a:da(a)&&x(b,a);return this.createElement("shape").attr(b)},
	circle:function(a,b,c){var d=this.symbol("circle");if(da(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Wa).attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):ya.prototype.createElement.call(this,a)},invertChild:function(a,
	b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;F(a,{flip:"x",left:G(d.width)-(e?G(e.top):1),top:G(d.height)-(e?G(e.left):1),rotation:-90});n(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||d,c=e.innerR,d=ba(f),i=ka(f),j=ba(g),k=ka(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,
	b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return ya.prototype.symbols[!s(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}},z.VMLRenderer=mb=function(){this.init.apply(this,arguments)},mb.prototype=C(ya.prototype,aa),Ya=mb;ya.prototype.measureSpanWidth=function(a,b){var c=B.createElement("span"),d;d=B.createTextNode(a);c.appendChild(d);F(c,b);this.box.appendChild(c);d=c.offsetWidth;Va(c);return d};var Wb;if(qa)z.CanVGRenderer=
	aa=function(){Qa="http://www.w3.org/1999/xhtml"},aa.prototype.symbols={},Wb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){if(b.length===0){var e=B.getElementsByTagName("head")[0],f=B.createElement("script");f.type="text/javascript";f.src=d;f.onload=a;e.appendChild(f)}b.push(c)}}}(),Ya=aa;cb.prototype={addLabel:function(){var a=this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],j=f===
	h[h.length-1],e=d?q(d[f],e[f],f):f,d=this.label,h=h.info,k;a.isDatetimeAxis&&h&&(k=b.dateTimeLabelFormats[h.higherRanks[f]||h.unitName]);this.isFirst=i;this.isLast=j;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:j,dateTimeLabelFormat:k,value:a.isLog?na(a.lin2log(e)):e});s(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=s(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(C(g.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?
	this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,e=b.chart.spacing,f=q(b.labelLeft,E(b.pos,e[3])),e=q(b.labelRight,v(b.pos+b.len,d-e[1])),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],j=g.getBBox().width,k=b.getSlotWidth(),l=k,m=1,o,p={};if(h)h<0&&c-i*j<f?o=y(c/ba(h*pa)-f):h>0&&c+i*j>e&&(o=y((d-c)/ba(h*pa)));else if(d=c+(1-i)*j,c-i*j<f?l=a.x+l*(1-i)-f:d>e&&(l=e-a.x+l*i,m=-1),l=E(k,l),l<k&&b.labelAlign===
	"center"&&(a.x+=m*(k-l-i*(k-E(j,l)))),j>l||b.autoRotation&&g.styles.width)o=l;if(o){p.width=o;if(!b.options.labels.style.textOverflow)p.textOverflow="ellipsis";g.css(p)}},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,
	b,c,d,e,f,g,h){var i=this.axis,j=i.transA,k=i.reversed,l=i.staggerLines,m=i.tickRotCorr||{x:0,y:0},o=e.y;s(o)||(o=i.side===0?c.rotation?-8:-c.getBBox().height:i.side===2?m.y+8:ba(c.rotation*pa)*(m.y-c.getBBox(!1,0).height/2));a=a+e.x+m.x-(f&&d?f*j*(k?-1:1):0);b=b+o-(f&&!d?f*j*(k?1:-1):0);l&&(c=g/(h||1)%l,i.opposite&&(c=l-c-1),b+=c*(i.labelOffset/l));return{x:a,y:y(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,
	e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,m=h?h+"Grid":"grid",o=h?h+"Tick":"tick",p=e[m+"LineWidth"],r=e[m+"LineColor"],A=e[m+"LineDashStyle"],m=d.tickSize(o),o=e[o+"Color"],P=this.mark,u=k.step,w=!0,n=d.tickmarkOffset,R=this.getPosition(g,j,n,b),ha=R.x,R=R.y,s=g&&ha===d.pos+d.len||!g&&R===d.pos?-1:1,c=q(c,1);this.isActive=!0;if(p){j=d.getPlotLinePath(j+n,p*s,b,!0);if(l===t){l={stroke:r,"stroke-width":p};if(A)l.dashstyle=A;if(!h)l.zIndex=
	1;if(b)l.opacity=0;this.gridLine=l=p?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?"attr":"animate"]({d:j,opacity:c})}if(m)d.opposite&&(m[0]=-m[0]),h=this.getMarkPath(ha,R,m[0],m[1]*s,g,f),P?P.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:o,"stroke-width":m[1],opacity:c}).add(d.axisGroup);if(i&&!isNaN(ha))i.xy=R=this.getLabelPosition(ha,R,i,g,k,n,a,u),this.isFirst&&!this.isLast&&!q(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!q(e.showLastLabel,1)?w=!1:g&&!d.isRadial&&
	!k.step&&!k.rotation&&!b&&c!==0&&this.handleOverflow(R),u&&a%u&&(w=!1),w&&!isNaN(R.y)?(R.opacity=c,i[this.isNew?"attr":"animate"](R),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Pa(this,this.axis)}};z.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};z.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,j=s(i)&&s(h),k=d.value,l=d.dashStyle,m=a.svgElem,o=[],p,r=d.color,A=q(d.zIndex,0),n=
	d.events,u={},w=b.chart.renderer,o=b.log2lin;b.isLog&&(i=o(i),h=o(h),k=o(k));if(g){if(o=b.getPlotLinePath(k,g),u={stroke:r,"stroke-width":g},l)u.dashstyle=l}else if(j){o=b.getPlotBandPath(i,h,d);if(r)u.fill=r;if(d.borderWidth)u.stroke=d.borderColor,u["stroke-width"]=d.borderWidth}else return;u.zIndex=A;if(m)if(o)m.show(),m.animate({d:o});else{if(m.hide(),f)a.label=f=f.destroy()}else if(o&&o.length&&(a.svgElem=m=w.path(o).attr(u).add(),n))for(p in d=function(b){m.on(b,function(c){n[b].apply(a,[c])})},
	n)d(p);e&&s(e.text)&&o&&o.length&&b.width>0&&b.height>0&&!o.flat?(e=C({align:c&&j&&"center",x:c?!j&&4:10,verticalAlign:!c&&j&&"middle",y:c?j?16:10:j?6:-4,rotation:c&&!j&&90},e),this.renderLabel(e,o,j,A)):f&&f.hide();return a},renderLabel:function(a,b,c,d){var e=this.label,f=this.axis.chart.renderer;if(!e)e={align:a.textAlign||a.align,rotation:a.rotation},e.zIndex=d,this.label=e=f.text(a.text,0,0,a.useHTML).attr(e).css(a.style).add();d=[b[1],b[4],c?b[6]:b[1]];b=[b[2],b[5],c?b[7]:b[2]];c=Oa(d);f=Oa(b);
	e.align(a,!1,{x:c,y:f,width:Ea(d)-c,height:Ea(b)-f});e.show()},destroy:function(){Aa(this.axis.plotLinesAndBands,this);delete this.axis;Pa(this)}};var I=z.Axis=function(){this.init.apply(this,arguments)};I.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0},lineColor:"#C0D0E0",
	lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},lineWidth:0,maxPadding:0.05,minPadding:0.05,
	startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return z.numberFormat(this.total,-1)},style:C(W.line.dataLabels.style,{color:"#000000"})}},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var c=b.isX;this.chart=
	a;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=d.visible!==!1;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=e==="logarithmic";
	this.isDatetimeAxis=e==="datetime";this.isLinked=s(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=q(d.crosshair,va(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;sa(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,
	0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===t)this.reversed=!0;this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(f in d)D(this,f,d[f]);if(this.isLog)this.val2lin=this.log2lin,this.lin2val=this.lin2log},setOptions:function(a){this.options=C(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
	C(N[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=N.lang.numericSymbols,f=e&&e.length,g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=La(h,this);else if(c)g=b;else if(d)g=ma(d,b);else if(f&&a>=1E3)for(;f--&&g===t;)c=Math.pow(1E3,f+1),a>=c&&b*10%c===0&&e[f]!==null&&(g=z.numberFormat(b/c,-1)+e[f]);g===t&&(g=S(b)>=1E4?z.numberFormat(b,-1):z.numberFormat(b,-1,t,""));return g},getSeriesExtremes:function(){var a=this,
	b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();n(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d=c.options,e=d.threshold,f;a.hasVisibleSeries=!0;a.isLog&&e<=0&&(e=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=E(q(a.dataMin,d[0]),Oa(d)),a.dataMax=v(q(a.dataMax,d[0]),Ea(d))}else{c.getExtremes();f=c.dataMax;c=c.dataMin;if(s(c)&&s(f))a.dataMin=E(q(a.dataMin,c),c),a.dataMax=v(q(a.dataMax,
	f),f);if(s(e))a.threshold=e;if(!d.softThreshold||a.isLog)a.softThreshold=!1}}})},translate:function(a,b,c,d,e,f){var g=this.linkedParent||this,h=1,i=0,j=d?g.oldTransA:g.transA,d=d?g.oldMin:g.min,k=g.minPixelPadding,e=(g.isOrdinal||g.isBroken||g.isLog&&e)&&g.lin2val;if(!j)j=g.transA;if(c)h*=-1,i=g.len;g.reversed&&(h*=-1,i-=h*(g.sector||g.len));b?(a=a*h+i,a-=k,a=a/j+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),f==="between"&&(f=0.5),a=h*(a-d)*j+i+h*k+(ua(f)?j*f*g.pointRange:0));return a},toPixels:function(a,
	b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,m;i=this.transB;var o=function(a,b,c){if(a<b||a>c)d?a=E(v(b,a),c):m=!0;return a},e=q(e,this.translate(a,null,null,c)),a=c=y(e+i);i=j=y(k-e-i);isNaN(e)?m=!0:this.horiz?(i=h,j=k-this.bottom,a=c=o(a,
	g,g+this.width)):(a=g,c=l-this.right,i=j=o(i,h,h+this.height));return m&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,b,c){var d,e=na(V(b/a)*a),f=na(Fa(c/a)*a),g=[];if(b===c&&ua(b))return[b];for(b=e;b<=f;){g.push(b);b=na(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.pointRangePadding||0;e=this.min-f;var f=this.max+f,g=f-e;if(g&&g/c<this.len/3)if(this.isLog){f=
	b.length;for(e=1;e<f;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),e,f,a.startOfWeek));else for(b=e+(b[0]-e)%c;b<=f;b+=c)d.push(b);d.length!==0&&this.trimTicks(d,a.startOnTick,a.endOnTick);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j,k;if(this.isXAxis&&this.minRange===t&&!this.isLog)s(a.min)||
	s(a.max)?this.minRange=null:(n(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===t||h<f)f=h}),this.minRange=E(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){k=this.minRange;d=(k-c+b)/2;d=[b-d,q(a.min,b-d)];if(e)d[2]=this.dataMin;b=Ea(d);c=[b+k,q(a.max,b+k)];if(e)c[2]=this.dataMax;c=Oa(c);c-b<k&&(d[0]=c-k,d[1]=q(a.min,c-k),b=Ea(d))}this.min=b;this.max=c},getClosest:function(){var a;n(this.series,function(b){var c=b.closestPointRange;!b.noSharedTooltip&&
	s(c)&&(a=s(a)?E(a,c):c)});return a},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA,k=b.isXAxis;if(k||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):(e=b.getClosest(),n(b.series,function(a){var c=i?1:k?q(a.options.pointRange,e,0):b.axisPointRange||0,a=a.options.pointPlacement;d=v(d,c);b.single||(f=v(f,Da(a)?0:c/2),g=v(g,a==="on"?0:c))})),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=
	g*=h,b.pointRange=E(d,c),k)b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.log2lin,g=b.isDatetimeAxis,h=b.isXAxis,i=b.isLinked,j=d.maxPadding,k=d.minPadding,l=d.tickInterval,m=d.tickPixelInterval,o=b.categories,p=b.threshold,r=b.softThreshold,A,P,u,w;!g&&!o&&!i&&this.getTickAmount();
	u=q(b.userMin,d.min);w=q(b.userMax,d.max);i?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=q(c.min,c.dataMin),b.max=q(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&ga(11,1)):(!r&&s(p)&&(b.dataMin>=p?(A=p,k=0):b.dataMax<=p&&(P=p,j=0)),b.min=q(u,A,b.dataMin),b.max=q(w,P,b.dataMax));if(e)!a&&E(b.min,q(b.dataMin,b.min))<=0&&ga(10,1),b.min=na(f(b.min),15),b.max=na(f(b.max),15);if(b.range&&s(b.max))b.userMin=b.min=u=v(b.min,b.minFromRange()),b.userMax=w=b.max,b.range=
	null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!o&&!b.axisPointRange&&!b.usePercentage&&!i&&s(b.min)&&s(b.max)&&(f=b.max-b.min))!s(u)&&k&&(b.min-=f*k),!s(w)&&j&&(b.max+=f*j);if(ua(d.floor))b.min=v(b.min,d.floor);if(ua(d.ceiling))b.max=E(b.max,d.ceiling);if(r&&s(b.dataMin))if(p=p||0,!s(u)&&b.min<p&&b.dataMin>=p)b.min=p;else if(!s(w)&&b.max>p&&b.dataMax<=p)b.max=p;b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:i&&!l&&m===b.linkedParent.options.tickPixelInterval?l=b.linkedParent.tickInterval:
	q(l,this.tickAmount?(b.max-b.min)/v(this.tickAmount-1,1):void 0,o?1:(b.max-b.min)*m/v(b.len,m));h&&!a&&n(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange&&!l)b.tickInterval=v(b.pointRange,b.tickInterval);a=q(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!l&&b.tickInterval<a)b.tickInterval=
	a;if(!g&&!e&&!l)b.tickInterval=Bb(b.tickInterval,null,Ab(b.tickInterval),q(d.allowDecimals,!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval===
	"auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=c&&c.slice();if(!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,
	[this.min,this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,f),this.min===this.max&&s(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;if(b)this.min=d;else for(;this.min-f>a[0];)a.shift();if(c)this.max=e;else for(;this.max+f<a[a.length-1];)a.pop();a.length===0&&s(d)&&a.push((e+d)/2)},alignToOthers:function(){var a={},b,c=this.options;this.chart.options.chart.alignTicks!==
	!1&&c.alignTicks!==!1&&n(this.chart[this.coll],function(c){var e=c.options,e=[c.horiz?e.left:e.top,e.width,e.height,e.pane].join(",");c.series.length&&(a[e]?b=!0:a[e]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!s(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Fa(this.len/c)+1);if(b<4)this.finalTickAmt=b,b=5;this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,
	b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(na(b[b.length-1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(s(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=t}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;n(this.series,function(b){if(b.isDirtyData||
	b.isDirty||b.xAxis.isDirty)a=!0});if(b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()){if(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,!this.isDirty)this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax}else this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,e){var f=this,g=f.chart,
	c=q(c,!0);n(f.series,function(a){delete a.kdTree});e=x(e,{min:a,max:b});M(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options,f=E(c,q(e.min,c)),e=v(d,q(e.max,d));this.allowZoomOutside||(s(c)&&a<=f&&(a=f),s(d)&&b>=e&&(b=e));this.displayBtn=a!==t||b!==t;this.setExtremes(a,b,!1,t,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||0,d=this.horiz,e=q(b.width,
	a.plotWidth-c+(b.offsetRight||0)),f=q(b.height,a.plotHeight),g=q(b.top,a.plotTop),b=q(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight));c.test(g)&&(g=Math.round(parseFloat(g)/100*a.plotHeight+a.plotTop));this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=v(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?na(b(this.min)):this.min,max:a?na(b(this.max)):this.max,
	dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,d=b?c(this.min):this.min,b=b?c(this.max):this.max;a===null?a=b<0?b:d:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(q(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],d=q(b[a+"Width"],a==="tick"&&this.isXAxis?1:0);if(d&&c)return b[a+
	"Position"]==="inside"&&(c=-c),[c,d]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,e=this.len/(((this.categories?1:0)+this.max-this.min)/c),f,g=a.rotation,h=this.labelMetrics(),i,j=Number.MAX_VALUE,k,l=function(a){a/=e||1;a=a>1?Fa(a):1;return a*c};b?(k=!a.staggerLines&&!a.step&&(s(g)?[g]:e<q(a.autoRotationLimit,80)&&a.autoRotation))&&
	n(k,function(a){var b;if(a===g||a&&a>=-90&&a<=90)i=l(S(h.h/ka(pa*a))),b=i+S(a/360),b<j&&(j=b,f=a,d=i)}):a.step||(d=l(h.h));this.autoRotation=k;this.labelRotation=q(f,g);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),e=a.margin[3];return b&&(c.step||0)<2&&!c.rotation&&(this.staggerLines||1)*a.plotWidth/d||!b&&(e&&e-a.spacing[3]||a.chartWidth*0.33)},renderUnsquish:function(){var a=this.chart,b=a.renderer,
	c=this.tickPositions,d=this.ticks,e=this.options.labels,f=this.horiz,g=this.getSlotWidth(),h=v(1,y(g-2*(e.padding||5))),i={},j=this.labelMetrics(),k=e.style.textOverflow,l,m=0,o,p;if(!Da(e.rotation))i.rotation=e.rotation||0;if(this.autoRotation)n(c,function(a){if((a=d[a])&&a.labelLength>m)m=a.labelLength}),m>h&&m>j.h?i.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(l={width:h+"px"},!k)){l.textOverflow="clip";for(o=c.length;!f&&o--;)if(p=c[o],h=d[p].label)if(h.styles.textOverflow==="ellipsis"?
	h.css({textOverflow:"clip"}):d[p].labelLength>g&&h.css({width:g+"px"}),h.getBBox().height>this.len/c.length-(j.h-j.f))h.specCss={textOverflow:"ellipsis"}}if(i.rotation&&(l={width:(m>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px"},!k))l.textOverflow="ellipsis";if(this.labelAlign=e.align||this.autoLabelAlign(this.labelRotation))i.align=this.labelAlign;n(c,function(a){var b=(a=d[a])&&a.label;if(b)b.attr(i),l&&b.css(C(l,b.specCss)),delete b.specCss,a.rotation=i.rotation});this.tickRotCorr=b.rotCorr(j.b,
	this.labelRotation||0,this.side!==0)},hasData:function(){return this.hasVisibleSeries||s(this.min)&&s(this.max)&&!!this.tickPositions},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,l=0,m,o=0,p=d.title,r=d.labels,A=0,P=a.opposite,u=b.axisOffset,b=b.clipOffset,w=[-1,1,1,-1][h],O,R=a.axisParent,ha=this.tickSize("tick");j=a.hasData();a.showAxis=k=j||q(d.showEmpty,!0);a.staggerLines=a.horiz&&r.staggerLines;
	if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(R),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).add(R),a.labelGroup=c.g("axis-labels").attr({zIndex:r.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add(R);if(j||a.isLinked){if(n(e,function(b){f[b]?f[b].addLabel():f[b]=new cb(a,b)}),a.renderUnsquish(),r.reserveSpace!==!1&&(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign||a.labelAlign==="center")&&n(e,function(a){A=v(f[a].getLabelSize(),A)}),a.staggerLines)A*=
	a.staggerLines,a.labelOffset=A*(a.opposite?-1:1)}else for(O in f)f[O].destroy(),delete f[O];if(p&&p.text&&p.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(p.text,0,0,p.useHTML).attr({zIndex:7,rotation:p.rotation||0,align:p.textAlign||{low:P?"right":"left",middle:"center",high:P?"left":"right"}[p.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(p.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)l=a.axisTitle.getBBox()[g?"height":"width"],m=p.offset,o=s(m)?0:q(p.margin,g?5:10);
	a.axisTitle[k?"show":"hide"](!0)}a.offset=w*q(d.offset,u[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===0?-a.labelMetrics().h:h===2?a.tickRotCorr.y:0;o=Math.abs(A)+o;A&&(o-=c,o+=w*(g?q(r.y,a.tickRotCorr.y+w*8):r.x));a.axisTitleMargin=q(m,o);u[h]=v(u[h],a.axisTitleMargin+l+w*a.offset,o,j&&e.length&&ha?ha[0]:0);d=d.offset?0:V(d.lineWidth/2)*2;b[i]=v(b[i],d)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-
	(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=e.x||0,j=e.y||0,k=G(e.style.fontSize||12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?k:0);return{x:a?d+i:b+(g?this.width:
	0)+h+i,y:a?b+j-(g?this.height:0)+h:d+j}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.lin2log,g=a.isLinked,h=a.tickPositions,i=a.axisTitle,j=a.ticks,k=a.minorTicks,l=a.alternateBands,m=d.stackLabels,o=d.alternateGridColor,p=a.tickmarkOffset,r=d.lineWidth,A,q=b.hasRendered&&s(a.oldMin)&&!isNaN(a.oldMin),u=a.showAxis,w=hb(c.globalAnimation),O,R;a.labelEdge.length=0;a.overlap=!1;n([j,k,l],function(a){for(var b in a)a[b].isActive=!1});if(a.hasData()||g){a.minorTickInterval&&
	!a.categories&&n(a.getMinorTickPositions(),function(b){k[b]||(k[b]=new cb(a,b,"minor"));q&&k[b].isNew&&k[b].render(null,!0);k[b].render(null,!1,1)});if(h.length&&(n(h,function(b,c){if(!g||b>=a.min&&b<=a.max)j[b]||(j[b]=new cb(a,b)),q&&j[b].isNew&&j[b].render(c,!0,0.1),j[b].render(c)}),p&&(a.min===0||a.single)))j[-1]||(j[-1]=new cb(a,-1,null,!0)),j[-1].render(-1);o&&n(h,function(c,d){R=h[d+1]!==t?h[d+1]+p:a.max-p;if(d%2===0&&c<a.max&&R<=a.max+(b.polar?-p:p))l[c]||(l[c]=new z.PlotLineOrBand(a)),O=c+
	p,l[c].options={from:e?f(O):O,to:e?f(R):R,color:o},l[c].render(),l[c].isActive=!0});if(!a._addedPlotLB)n((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0}n([j,k,l],function(a){var c,d,e=[],f=w.duration;for(c in a)if(!a[c].isActive)a[c].render(c,!1,0),a[c].isActive=!1,e.push(c);$a(function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])},a===l||!b.hasRendered||!f?0:f)});if(r)A=a.getLinePath(r),a.axisLine?a.axisLine.animate({d:A}):
	a.axisLine=c.path(A).attr({stroke:d.lineColor,"stroke-width":r,zIndex:7}).add(a.axisGroup),a.axisLine[u?"show":"hide"](!0);if(i&&u)i[i.isNew?"attr":"animate"](a.getTitlePosition()),i.isNew=!1;m&&m.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&(this.render(),n(this.plotLinesAndBands,function(a){a.render()}));n(this.series,function(a){a.isDirty=!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||T(b);for(d in c)Pa(c[d]),c[d]=null;n([b.ticks,b.minorTicks,
	b.alternateBands],function(a){Pa(a)});for(a=e.length;a--;)e[a].destroy();n("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e,f;if(!this.crosshair||(s(b)||!q(d.snap,!0))===!1)this.hideCrosshair();else if(q(d.snap,!0)?s(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?
	this.getPlotLinePath(this.isXAxis?b.x:q(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();else if(e=this.categories&&!this.isRadial,f=q(d.width,e?this.transA:1),this.cross)this.cross.attr({d:c,visibility:"visible","stroke-width":f});else{e={"stroke-width":f,stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),zIndex:q(d.zIndex,2)};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&
	this.cross.hide()}};x(I.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,!0);d&&c?(d.flat=d.toString()===c.toString(),d.push(c[4],c[5],c[1],c[2])):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(a,b){var c=(new z.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),
	this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();n([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&Aa(b,b[e])})}});I.prototype.getTimeTicks=function(a,b,c,d){var e=[],f={},g=N.global.useUTC,h,i=new fa(b-fb(b)),j=a.unitRange,k=a.count;if(s(b)){i[Pb](j>=H.second?0:k*V(i.getMilliseconds()/k));if(j>=H.second)i[Qb](j>=
	H.minute?0:k*V(i.getSeconds()/k));if(j>=H.minute)i[Rb](j>=H.hour?0:k*V(i[Cb]()/k));if(j>=H.hour)i[Sb](j>=H.day?0:k*V(i[Db]()/k));if(j>=H.day)i[rb](j>=H.month?1:k*V(i[bb]()/k));j>=H.month&&(i[Fb](j>=H.year?0:k*V(i[ib]()/k)),h=i[jb]());j>=H.year&&(h-=h%k,i[Gb](h));if(j===H.week)i[rb](i[bb]()-i[Eb]()+q(d,1));b=1;if(zb||gb)i=i.getTime(),i=new fa(i+fb(i));h=i[jb]();for(var d=i.getTime(),l=i[ib](),m=i[bb](),o=!g||!!gb,p=(H.day+(g?fb(i):i.getTimezoneOffset()*6E4))%H.day;d<c;)e.push(d),j===H.year?d=qb(h+
	b*k,0):j===H.month?d=qb(h,l+b*k):o&&(j===H.day||j===H.week)?d=qb(h,l,m+b*k*(j===H.day?1:7)):d+=j*k,b++;e.push(d);n(Sa(e,function(a){return j<=H.hour&&a%H.day===p}),function(a){f[a]="day"})}e.info=x(a,{higherRanks:f,totalRange:j*k});return e};I.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=
	c[c.length-1],e=H[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=H[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+H[c[g+1][0]])/2)break;e===H.year&&a<5*e&&(f=[1,2,5]);c=Bb(a/e,f,d[0]==="year"?v(Ab(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};I.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=this.lin2log,h=this.log2lin,i=[];if(!d)this._minorAutoInterval=null;if(a>=0.5)a=y(a),i=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=V(b),j,k,l,m,o,e=a>0.3?
	[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!o;f++){k=e.length;for(j=0;j<k&&!o;j++)l=h(g(f)*e[j]),l>b&&(!d||m<=c)&&m!==t&&i.push(m),m>c&&(o=!0),m=l}else if(b=g(b),c=g(c),a=e[d?"minorTickInterval":"tickInterval"],a=q(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=Bb(a,null,Ab(a)),i=ta(this.getLinearTickPositions(a,b,c),h),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return i};I.prototype.log2lin=function(a){return Y.log(a)/
	Y.LN10};I.prototype.lin2log=function(a){return Y.pow(10,a)};var Lb=z.Tooltip=function(){this.init.apply(this,arguments)};Lb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=G(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});
	qa||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(S(a-f.x)>1||S(b-f.y)>1),h=e.followPointer||e.len>1;x(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?t:g?(2*f.anchorX+c)/3:c,anchorY:h?t:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&
	e.move(a,b,c,d)},32)},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=q(a,this.options.hideDelay,500);if(!this.isHidden)this.hideTimer=$a(function(){b.label[a?"fadeOut":"hide"]();b.isHidden=!0},a)},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=d.plotLeft,h=0,i=0,j,k,a=va(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===t&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-f]);c||(n(a,function(a){j=a.series.yAxis;k=a.series.xAxis;h+=a.plotX+(!e&&k?
	k.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&j?j.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-h:i]);return ta(c,y)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g=c.h||0,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],j=["x",d.chartWidth,a,c.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],k=!this.followPointer&&q(c.ttBelow,!d.inverted===!!c.negative),l=function(a,
	b,c,d,h,i){var j=c<d-e,m=d+e+c<b,l=d-e-c;d+=e;if(k&&m)f[a]=d;else if(!k&&j)f[a]=l;else if(j)f[a]=E(i-c,l-g<0?l:l-g);else if(m)f[a]=v(h,d+g+c>b?d:d+g);else return!1},m=function(a,b,c,d){var g;d<e||d>b-e?g=!1:f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return g},o=function(a){var b=i;i=j;j=b;h=a},p=function(){l.apply(0,i)!==!1?m.apply(0,j)===!1&&!h&&(o(!0),p()):h?f.x=f.y=0:(o(!0),p())};(d.inverted||this.len>1)&&o();p();return f},defaultFormatter:function(a){var b=this.points||va(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];
	c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h,i={},j,k=[];j=e.formatter||this.defaultFormatter;var i=c.hoverPoints,l,m=this.shared;clearTimeout(this.hideTimer);this.followPointer=va(a)[0].series.tooltipOptions.followPointer;h=this.getAnchor(a,b);f=h[0];g=h[1];m&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,i&&n(i,function(a){a.setState()}),n(a,function(a){a.setState("hover");
	k.push(a.getLabelConfig())}),i={x:a[0].category,y:a[0].y},i.points=k,this.len=k.length,a=a[0]):i=a.getLabelConfig();j=j.call(i,this);i=a.series;this.distance=q(i.tooltipOptions.distance,16);j===!1?this.hide():(this.isHidden&&(Ta(d),d.attr("opacity",1).show()),d.attr({text:j}),l=e.borderColor||a.color||i.color||"#606060",d.attr({stroke:l}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:h[2]||0}),this.isHidden=!1);M(c,"tooltipRefresh",{text:j,x:f+c.plotLeft,y:g+c.plotTop,
	borderColor:l})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(y(c.x),y(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i="millisecond";if(e){h=ma("%m-%d %H:%M:%S.%L",a.x);for(f in H){if(e===H.week&&+ma("%w",a.x)===c.options.startOfWeek&&h.substr(6)==="00:00:00.000"){f=
	"week";break}if(H[f]>e){f=i;break}if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&ua(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return La(c,{point:a,series:d})},bodyFormatter:function(a){return ta(a,
	function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};var oa;db=B&&B.documentElement.ontouchstart!==t;var Za=z.Pointer=function(a,b){this.init(a,b)};Za.prototype={init:function(a,b){var c=b.chart,d=c.events,e=qa?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=
	[];this.lastValidTouch={};if(z.Tooltip&&b.tooltip.enabled)a.tooltip=new Lb(a,b.tooltip),this.followTouchMove=q(b.tooltip.followTouchMove,!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||J.event;if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Kb(this.chart.container);d.pageX===t?(c=v(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return x(a,{chartX:y(c),chartY:y(d)})},getCoordinates:function(a){var b=
	{xAxis:[],yAxis:[]};n(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:!1,f=b.hoverPoint,g=b.hoverSeries,h,i=[Number.MAX_VALUE,Number.MAX_VALUE],j,k,l=[],m=[],o;if(!e&&!g)for(h=0;h<c.length;h++)if(c[h].directTouch||!c[h].options.stickyTracking)c=[];g&&(e?g.noSharedTooltip:g.directTouch)&&f?m=[f]:(n(c,function(b){j=b.noSharedTooltip&&e;k=
	!e&&b.directTouch;b.visible&&!j&&!k&&q(b.options.enableMouseTracking,!0)&&(o=b.searchPoint(a,!j&&b.kdDimensions===1))&&l.push(o)}),n(l,function(a){a&&n(["dist","distX"],function(b,c){if(typeof a[b]==="number"){var d=a[b]===i[c]&&a.series.group.zIndex>=m[c].series.group.zIndex;if(a[b]<i[c]||d)i[c]=a[b],m[c]=a}})}));if(e)for(h=l.length;h--;)(l[h].clientX!==m[1].clientX||l[h].series.noSharedTooltip)&&l.splice(h,1);if(m[0]&&(m[0]!==this.prevKDPoint||d&&d.isHidden))if(e&&!m[0].series.noSharedTooltip)l.length&&
	d&&d.refresh(l,a),n(l,function(b){b.onMouseOver(a,b!==(g&&g.directTouch&&f||m[0]))}),this.prevKDPoint=m[1];else{d&&d.refresh(m[0],a);if(!g||!g.directTouch)m[0].onMouseOver(a);this.prevKDPoint=m[0]}else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if($[oa])$[oa].pointer.onDocumentMouseMove(a)},D(B,"mousemove",this._onDocumentMouseMove);n(e?l:[q(m[1],f)],function(c){n(b.axes,
	function(b){(!c||c.series[b.coll]===b)&&b.drawCrosshair(a,c)})})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.hoverPoints,g=c.tooltip,h=g&&g.shared?f:e;a&&h&&n(va(h),function(b){b.series.isCartesian&&b.plotX===void 0&&(a=!1)});if(a)g&&h&&(g.refresh(h),e&&(e.setState(e.state,!0),n(c.axes,function(a){q(a.crosshair&&a.crosshair.snap,!0)?a.drawCrosshair(null,e):a.hideCrosshair()})));else{if(e)e.onMouseOut();f&&n(f,function(a){a.setState()});if(d)d.onMouseOut();g&&g.hide(b);
	if(this._onDocumentMouseMove)T(B,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;n(c.axes,function(a){a.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;n(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=
	this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,m=this.selectionMarker,o=this.mouseDownX,p=this.mouseDownY,r=c.panKey&&a[c.panKey+"Key"];if(!m||!m.touch)if(d<h?d=h:d>h+j&&(d=h+j),e<i?e=i:e>i+k&&(e=i+k),this.hasDragged=Math.sqrt(Math.pow(o-d,2)+Math.pow(p-e,2)),this.hasDragged>
	10){l=b.isInsidePlot(o-h,p-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!r&&!m)this.selectionMarker=m=b.renderer.rect(h,i,f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();m&&f&&(d-=o,m.attr({width:S(d),x:(d>0?0:d)+o}));m&&g&&(d=e-p,m.attr({height:S(d),y:(d>0?0:d)+p}));l&&!m&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},f=this.selectionMarker,
	g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,j=f.attr?f.attr("height"):f.height,k;if(this.hasDragged||d)n(c.axes,function(c){if(c.zoomEnabled&&s(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var f=c.horiz,o=a.type==="touchend"?c.minPixelPadding:0,p=c.toValue((f?g:h)+o),f=c.toValue((f?g+i:h+j)-o);e[c.coll].push({axis:c,min:E(p,f),max:v(p,f)});k=!0}}),k&&M(c,"selection",e,function(a){c.zoom(x(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();
	d&&this.scaleGroups()}if(c)F(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){$[oa]&&$[oa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,
	a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(a){var b=$[oa];if(b&&(a.relatedTarget||a.toElement))b.pointer.reset(),b.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;if(!s(oa)||!$[oa]||!$[oa].mouseIsDown)oa=b.index;a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,
	b){for(var c;a;){if(c=X(a,"class")){if(c.indexOf(b)!==-1)return!0;if(c.indexOf("highcharts-container")!==-1)return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,a=a.relatedTarget||a.toElement;if(b&&a&&!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&!this.inClass(a,"highcharts-series-"+b.index))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,
	"highcharts-tracker")?(M(c.series,"click",x(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&M(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};D(b,"mouseleave",a.onContainerMouseLeave);lb===1&&D(B,"mouseup",a.onDocumentMouseUp);if(db)b.ontouchstart=function(b){a.onContainerTouchStart(b)},
	b.ontouchmove=function(b){a.onContainerTouchMove(b)},lb===1&&D(B,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;T(this.chart.container,"mouseleave",this.onContainerMouseLeave);lb||(T(B,"mouseup",this.onDocumentMouseUp),T(B,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};x(z.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&
	this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,m=a?"width":"height",o=i["plot"+(a?"Left":"Top")],p,r,A=h||1,q=i.inverted,n=i.bounds[a?"h":"v"],w=b.length===1,O=b[0][l],s=c[0][l],v=!w&&b[1][l],t=!w&&c[1][l],y,c=function(){!w&&S(O-v)>20&&(A=h||S(s-t)/S(O-v));r=(o-s)/A+O;p=i["plot"+(a?"Width":"Height")]/A};c();b=r;b<n.min?(b=n.min,y=!0):b+p>n.max&&(b=n.max-p,y=!0);y?(s-=0.8*(s-g[j][0]),w||(t-=0.8*(t-
	g[j][1])),c()):g[j]=[s,t];q||(f[j]=r-o,f[m]=p);f=q?1/A:A;e[m]=p;e[j]=b;d[q?a?"scaleY":"scaleX":"scale"+k]=A;d["translate"+k]=f*o+(s-f*O)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,j={},k=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};if(f>1)b.initiated=!0;h&&b.initiated&&!k&&a.preventDefault();ta(e,function(a){return b.normalize(a)});if(a.type==="touchstart")n(e,function(a,
	b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&d[1].chartY],n(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(q(a.options.min,a.dataMin)),f=a.toPixels(q(a.options.max,a.dataMax)),g=E(e,f),e=v(e,f);b.min=E(a.pos,g-d);b.max=v(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=x({destroy:ra,touch:!0},c.plotBox);b.pinchTranslate(d,e,j,i,l,g);b.hasPinched=h;b.scaleGroups(j,
	l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,0)}},touch:function(a,b){var c=this.chart,d;oa=c.index;if(a.touches.length===1)if(a=this.normalize(a),c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop)&&!c.openMenu){b&&this.runPointActions(a);if(a.type==="touchmove")c=this.pinchDown,d=Math.sqrt(Math.pow(c[0].chartX-a.chartX,2)+Math.pow(c[0].chartY-a.chartY,2))>=4;q(d,!0)&&this.pinch(a)}else b&&this.reset();else a.touches.length===2&&
	this.pinch(a)},onContainerTouchStart:function(a){this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(a){$[oa]&&$[oa].pointer.drop(a)}});if(J.PointerEvent||J.MSPointerEvent){var Ga={},Mb=!!J.PointerEvent,ac=function(){var a,b=[];b.item=function(a){return this[a]};for(a in Ga)Ga.hasOwnProperty(a)&&b.push({pageX:Ga[a].pageX,pageY:Ga[a].pageY,target:Ga[a].target});return b},Nb=function(a,b,c,d){if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&
	$[oa])d(a),d=$[oa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:ra,touches:ac()})};x(Za.prototype,{onContainerPointerDown:function(a){Nb(a,"onContainerTouchStart","touchstart",function(a){Ga[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Nb(a,"onContainerTouchMove","touchmove",function(a){Ga[a.pointerId]={pageX:a.pageX,pageY:a.pageY};if(!Ga[a.pointerId].target)Ga[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Nb(a,
	"onDocumentTouchEnd","touchend",function(a){delete Ga[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,Mb?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Mb?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(B,Mb?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});U(Za.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&F(b.container,{"-ms-touch-action":"none","touch-action":"none"})});U(Za.prototype,"setDOMEvents",function(a){a.apply(this);
	(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(D)});U(Za.prototype,"destroy",function(a){this.batchMSEvents(T);a.call(this)})}var vb=z.Legend=function(a,b){this.init(a,b)};vb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=C(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=d=q(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=q(b.symbolWidth,16),
	c.pages=[],c.render(),D(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=h,g=a.convertAttribs(g),g)d=g[j],d!==t&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,
	c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;n(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Va(a.checkbox)},destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||
	this.legendHeight,e=this.titleHeight;if(b)c=b.translateY,n(this.allItems,function(f){var g=f.checkbox,h;g&&(h=c+e+g.y+(a||0)+3,F(g,{left:b.translateX+f.checkboxOffset+g.x-20+"px",top:h+"px",display:h>c-6&&h<c+d-6?"":"none"}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=
	a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?La(b.labelFormat,a):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?q(d.itemDistance,20):0,l=!d.rtl,m=d.width,o=d.itemMarginBottom||0,p=this.itemMarginTop,r=this.initialItemX,A=a.legendItem,
	n=a.series&&a.series.drawLegendSymbol?a.series:a,u=n.options,u=this.createCheckboxForItem&&u&&u.showCheckbox,w=d.useHTML;if(!A){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=A=c.text("",l?f+g:-g,this.baseline||0,w).css(C(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,A),this.baseline=this.fontMetrics.f+3+p,A.attr("y",this.baseline);n.drawLegendSymbol(this,a);this.setItemEvents&&
	this.setItemEvents(a,A,w,h,i);u&&this.createCheckboxForItem(a)}this.colorizeItem(a,a.visible);this.setText(a);c=A.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(u?20:0);this.itemHeight=g=y(a.legendItemHeight||c.height);if(e&&this.itemX-r+f>(m||b.chartWidth-2*j-r-d.x))this.itemX=r,this.itemY+=p+this.lastLineHeight+o,this.lastLineHeight=0;this.maxItemWidth=v(this.maxItemWidth,f);this.lastItemY=p+this.itemY+o;this.lastLineHeight=v(g,this.lastLineHeight);a._legendItemPos=
	[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=p+g+o,this.lastLineHeight=g);this.offsetWidth=m||v((e?this.itemX-r-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];n(this.chart.series,function(b){var c=b.options;if(q(c.showInLegend,!s(c.linkedTo)?t:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align.charAt(0)+d.verticalAlign.charAt(0)+d.layout.charAt(0);this.display&&!d.floating&&n([/(lth|ct|rth)/,
	/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!s(a[g])&&(c[ub[g]]=v(c[ub[g]],c.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+q(d.margin,12)+b[g]))})},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,m=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),a.contentGroup=c.g().attr({zIndex:1}).add(d),
	a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();ob(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;n(e,function(b){a.renderItem(b)});g=(j.width||a.offsetWidth)+k;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=k;if(l||m){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,height:h})),i.isNew=!1}else a.box=i=c.rect(0,
	0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:m||"none"}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;n(e,function(b){a.positionItem(b)});f&&d.align(x({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=e.maxHeight,h,i=this.clipRect,j=e.navigation,
	k=q(j.animation,!0),l=j.arrowSize||12,m=this.nav,o=this.pages,p=this.padding,r,A=this.allItems,P=function(a){i.attr({height:a});if(b.contentGroup.div)b.contentGroup.div.style.clip="rect("+p+"px,9999px,"+(p+a)+"px,0)"};e.layout==="horizontal"&&(f/=2);g&&(f=E(f,g));o.length=0;if(a>f&&j.enabled!==!1){this.clipHeight=h=v(f-20-this.titleHeight-p,0);this.currentPage=q(this.currentPage,1);this.fullHeight=a;n(A,function(a,b){var c=a._legendItemPos[1],d=y(a.legendItem.getBBox().height),e=o.length;if(!e||c-
	o[e-1]>h&&(r||c)!==o[e-1])o.push(r||c),e++;b===A.length-1&&c+d-o[e-1]>h&&o.push(c);c!==r&&(r=c)});if(!i)i=b.clipRect=d.clipRect(0,p,9999,0),b.contentGroup.clip(i);P(h);if(!m)this.nav=m=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(m),this.pager=d.text("",15,10).css(j.style).add(m),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(m);b.scroll(0);a=f}else if(m)P(c.chartHeight),m.hide(),this.scrollGroup.attr({translateY:1}),
	this.clipHeight=0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==t&&ab(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===
	d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};aa=z.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,e=this.chart.renderer,f=this.legendGroup,a=a.baseline-
	y(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=c=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).add(f),c.isMarker=!0}};(/Trident\/7\.0/.test(Ma)||Xa)&&U(vb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});var Ca=z.Chart=function(){this.getArgs.apply(this,arguments)};z.chart=
	function(a,b,c){return new Ca(a,b,c)};Ca.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(Da(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(a,b){var c,d=a.series;a.series=null;c=C(N,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=
	d.showAxes;var f=this,g;f.index=$.length;$.push(f);lb++;d.reflow!==!1&&D(f,"load",function(){f.initReflow()});if(e)for(g in e)D(f,g,e[g]);f.xAxis=[];f.yAxis=[];f.animation=qa?!1:q(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=K[a.type||b.type||b.defaultSeriesType])||ga(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},
	redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,j=this.isDirtyBox,k=c.length,l=k,m=this.renderer,o=m.isHidden(),p=[];ab(a,this);o&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=k;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;n(c,function(a){a.isDirty&&a.options.legendType==="point"&&(a.updateTotals&&a.updateTotals(),f=!0)});if(f&&e.options.enabled)e.render(),
	this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=null,n(b,function(a){a.setScale()});this.getMargins();i&&(n(b,function(a){a.isDirty&&(j=!0)}),n(b,function(a){var b=a.min+","+a.max;if(a.extKey!==b)a.extKey=b,p.push(function(){M(a,"afterSetExtremes",x(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();n(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);m.draw();M(this,"redraw");o&&this.cloneRenderTo(!0);
	n(p,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=va(b.xAxis||{}),b=b.yAxis=va(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new I(a,
	b)})},getSelectedPoints:function(){var a=[];n(this.series,function(b){a=a.concat(Sa(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return Sa(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=C(e.title,a);g=e.subtitle=C(e.subtitle,b),e=g;n([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,
	"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||h)+"px"}).align(x({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h)+"px"}).align(x({y:b+(f.margin-13)+g.fontMetrics(e.style.fontSize,c).b},e),!1,"spacingBox"),
	!e.floating&&!e.verticalAlign&&(b=Fa(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&q(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!s(b))this.containerWidth=xa(c,"width");if(!s(a))this.containerHeight=xa(c,"height");this.chartWidth=v(0,b||this.containerWidth||600);this.chartHeight=v(0,q(a,this.containerHeight>19?this.containerHeight:
	400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Va(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),F(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),B.body.appendChild(b),c&&b.appendChild(c))},getContainer:function(){var a,b=this.options,c=b.chart,d,e;a=this.renderTo;
	var f="highcharts-"+Jb++;if(!a)this.renderTo=a=c.renderTo;if(Da(a))this.renderTo=a=B.getElementById(a);a||ga(13,!0);d=G(X(a,"data-highcharts-chart"));!isNaN(d)&&$[d]&&$[d].hasRendered&&$[d].destroy();X(a,"data-highcharts-chart",this.index);a.innerHTML="";!c.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();d=this.chartWidth;e=this.chartHeight;this.container=a=ea(Wa,{className:"highcharts-container"+(c.className?" "+c.className:""),id:f},x({position:"relative",overflow:"hidden",width:d+
	"px",height:e+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=new (z[c.renderer]||Ya)(a,d,e,c.style,c.forExport,b.exporting&&b.exporting.allowHTML);qa&&this.renderer.create(this,a,d,e);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!s(c[0]))this.plotTop=v(this.plotTop,d+this.options.title.margin+
	b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&n(a.axes,function(a){a.visible&&a.getOffset()});n(ub,function(d,e){s(c[e])||(a[d]+=b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||xa(d,"width"),f=c.height||xa(d,"height"),
	c=a?a.target:J;if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===J||c===B)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),b.reflowTimeout=$a(function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null},a?100:0);b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};D(J,"resize",b);D(a,"destroy",function(){T(J,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g=d.renderer;d.isResizing+=1;ab(c,d);d.oldChartHeight=d.chartHeight;
	d.oldChartWidth=d.chartWidth;if(s(a))d.chartWidth=e=v(0,y(a)),d.hasUserSize=!!e;if(s(b))d.chartHeight=f=v(0,y(b));a=g.globalAnimation;(a?eb:F)(d.container,{width:e+"px",height:f+"px"},a);d.setChartSize(!0);g.setSize(e,f,c);d.maxTicks=null;n(d.axes,function(a){a.isDirty=!0;a.setScale()});n(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;M(d,"resize");$a(function(){d&&M(d,"endResize",null,function(){d.isResizing-=
	1})},hb(a).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=y(this.plotLeft);this.plotTop=j=y(this.plotTop);this.plotWidth=k=v(0,y(d-i-this.marginRight));this.plotHeight=l=v(0,y(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};
	this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};d=2*V(this.plotBorderWidth/2);b=Fa(v(d,h[3])/2);c=Fa(v(d,h[0])/2);this.clipBox={x:b,y:c,width:V(this.plotSizeX-v(d,h[1])/2-b),height:v(0,V(this.plotSizeY-v(d,h[2])/2-c))};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;n(ub,function(b,c){a[b]=q(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,
	d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,m=a.plotBorderWidth||0,o,p=this.plotLeft,r=this.plotTop,A=this.plotWidth,q=this.plotHeight,n=this.plotBox,w=this.clipRect,O=this.clipBox;o=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-o,height:d-o}));else{e={fill:j||"none"};if(i)e.stroke=a.borderColor,e["stroke-width"]=i;this.chartBackground=b.rect(o/
	2,o/2,c-o,d-o,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(n):this.plotBackground=b.rect(p,r,A,q,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(n):this.plotBGImage=b.image(l,p,r,A,q).add();w?w.animate({width:O.width,height:O.height}):this.clipRect=b.clipRect(O);if(m)g?(g.strokeWidth=-m,g.animate(g.crisp({x:p,y:r,width:A,height:q}))):this.plotBorder=b.rect(p,r,A,q,0,-m).attr({stroke:a.plotBorderColor,"stroke-width":m,fill:"none",
	zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;n(["inverted","angular","polar"],function(g){c=K[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=K[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;n(b,function(a){a.linkedSeries.length=0});n(b,function(b){var d=b.options.linkedTo;if(Da(d)&&(d=d===":previous"?a.series[b.index-1]:a.get(d)))d.linkedSeries.push(b),
	b.linkedParent=d,b.visible=q(b.options.visible,d.options.visible,b.visible)})},renderSeries:function(){n(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&n(b.items,function(c){var d=x(b.style,c.style),e=G(d.left)+a.plotLeft,f=G(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=
	new vb(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=21;n(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.05;if(f||g)this.maxTicks=null,n(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&n(a,function(a){a.visible&&a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();
	this.renderSeries();this.renderLabels();this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)J.location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;M(a,"destroy");$[a.index]=t;lb--;a.renderTo.removeAttribute("data-highcharts-chart");T(a);for(e=b.length;e--;)b[e]=
	b[e].destroy();for(e=c.length;e--;)c[e]=c[e].destroy();n("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",T(d),f&&Va(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!ja&&J==J.top&&B.readyState!=="complete"||qa&&!J.canvg?(qa?Wb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):
	B.attachEvent("onreadystatechange",function(){B.detachEvent("onreadystatechange",a.firstRender);B.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();M(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();n(b.series||[],function(b){a.initSeries(b)});a.linkSeries();M(a,"beforeRender");if(z.Pointer)a.pointer=new Za(a,b);a.render();a.renderer.draw();if(!a.renderer.imgCount&&a.onload)a.onload();
	a.cloneRenderTo(!0)}},onload:function(){var a=this;n([this.callback].concat(this.callbacks),function(b){b&&a.index!==void 0&&b.apply(a,[a])});M(a,"load");this.onload=null},splashArray:function(a,b){var c=b[a],c=da(c)?c:[c,c,c,c];return[q(b[a+"Top"],c[0]),q(b[a+"Right"],c[1]),q(b[a+"Bottom"],c[2]),q(b[a+"Left"],c[3])]}};var bc=z.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[q(e[0],"50%"),q(e[1],"50%"),
	a.size||"100%",a.innerSize||0],f=E(d,b),g,h;for(g=0;g<4;++g)h=e[g],a=g<2||g===2&&/%$/.test(h),e[g]=(/%$/.test(h)?[d,b,f,e[2]][g]*parseFloat(h)/100:parseFloat(h))+(a?c:0);e[3]>e[2]&&(e[3]=e[2]);return e}},Ha=function(){};Ha.prototype={init:function(a,b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;
	return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ha.prototype.optionsToObject.call(this,a);x(this,a);this.options=this.options?x(this.options,a):a;if(d)this.y=this[d];this.isNull=this.y===null;if(this.x===void 0&&c)this.x=b===void 0?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(typeof a==="number"||a===null)b[e[0]]=a;else if(Ja(a)){if(!d&&a.length>
	f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;){if(!d||a[g]!==void 0)b[e[h]]=a[g];g++;h++}}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),Aa(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)T(this),this.destroyElements();this.legendItem&&
	a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=q(c.valueDecimals,""),
	e=c.valuePrefix||"",f=c.valueSuffix||"";n(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return La(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});M(this,a,b,c)},visible:!0};var Q=
	z.Series=function(){};Q.prototype={isCartesian:!0,type:"line",pointClass:Ha,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,g=function(a,b){return q(a.options.index,a._i)-q(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();x(c,{name:b.name,state:"",pointAttr:{},
	visible:b.visible!==!1,selected:b.selected===!0});if(qa)b.animation=!1;e=b.events;for(d in e)D(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();n(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=!0;f.push(c);c._i=f.length-1;ob(f,g);this.yAxis&&ob(this.yAxis.series,g);n(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=
	this,b=a.options,c=a.chart,d;n(a.axisTypes||[],function(e){n(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==t&&b[e]===d.id||b[e]===t&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&ga(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;n(c.parallelArrays,typeof b==="number"?function(d){var f=d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=
	this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=q(b,a.pointStart,0);this.pointInterval=c=q(this.pointInterval,a.pointInterval,1);d&&(a=new fa(b),d==="day"?a=+a[rb](a[bb]()+c):d==="month"?a=+a[Fb](a[ib]()+c):d==="year"&&(a=+a[Gb](a[jb]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=C(e,c.series,a);this.tooltipOptions=C(N.tooltip,N.plotOptions[this.type].tooltip,
	b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&s(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",
	f=a+"Counter";b||(s(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||W[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:aa.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||
	0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,m=l&&!!l.categories,o=i.turboThreshold,p=this.xData,r=this.yData,A=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=q(b,!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)n(a,function(a,b){f[b].update&&a!==i.data[b]&&f[b].update(a,!1,null,!1)});else{e.xIncrement=null;e.colorCounter=0;n(this.parallelArrays,function(a){e[a+"Data"].length=0});if(o&&h>o){for(c=0;k===null&&c<h;)k=a[c],c++;if(ua(k)){m=q(i.pointStart,0);k=q(i.pointInterval,1);for(c=
	0;c<h;c++)p[c]=m,r[c]=a[c],m+=k;e.xIncrement=m}else if(Ja(k))if(A)for(c=0;c<h;c++)k=a[c],p[c]=k[0],r[c]=k.slice(1,A+1);else for(c=0;c<h;c++)k=a[c],p[c]=k[0],r[c]=k[1];else ga(12)}else for(c=0;c<h;c++)if(a[c]!==t&&(k={series:e},e.pointClass.prototype.applyOptions.apply(k,[a[c]]),e.updateParallelArrays(k,c),m&&s(k.name)))l.names[k.x]=k.name;Da(r[0])&&ga(14,!0);e.data=[];e.options.data=e.userOptions.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=
	j.isDirtyBox=!0;c=!1}i.legendType==="point"&&(this.processData(),this.generatePoints());b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=this.getExtremesFromAll||j.getExtremesFromAll,l=this.isCartesian,j=h&&h.val2lin,m=h&&h.isLog,o,p;if(l&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),o=a.min,p=a.max;if(l&&this.sorted&&!k&&(!i||d>i||this.forceCrop))if(b[d-1]<o||
	b[0]>p)b=[],c=[];else if(b[0]<o||b[d-1]>p)e=this.cropData(this.xData,this.yData,o,p),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length||1;--i;)d=m?j(b[i])-j(b[i-1]):b[i]-b[i-1],d>0&&(g===t||d<g)?g=d:d<0&&this.requireSorting&&ga(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=q(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=v(0,i-h);break}for(c=i;c<e;c++)if(a[c]>d){g=c+h;break}return{xData:a.slice(f,
	g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],m;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(m=0;m<g;m++)i=h+m,j?(l[m]=(new f).init(this,[d[m]].concat(va(e[m]))),l[m].dataGroup=this.groupMap[m]):(b[i]?k=b[i]:a[i]!==t&&(b[i]=k=(new f).init(this,a[i],d[m])),l[m]=k),l[m].index=i;if(b&&(g!==(c=b.length)||j))for(m=0;m<
	c;m++)if(m===h&&!j&&(m+=g),b[m])b[m].destroyElements(),b[m].plotX=t;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==t&&(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&
	(e[f++]=k[i]);else e[f++]=k;this.dataMin=Oa(e);this.dataMax=Ea(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||ua(i),k=a.threshold,l=a.startFromThreshold?k:0,m,o,p,r,A=Number.MAX_VALUE,a=0;a<g;a++){var n=f[a],u=n.x,w=n.y;o=n.low;var O=b&&e.stacks[(this.negStacks&&w<(l?0:k)?"-":"")+this.stackKey];if(e.isLog&&
	w!==null&&w<=0)n.y=w=null,ga(10);n.plotX=m=E(v(-1E5,c.translate(u,0,0,0,1,i,this.type==="flags")),1E5);if(b&&this.visible&&!n.isNull&&O&&O[u])r=this.getStackIndicator(r,u,this.index),O=O[u],w=O.points[r.key],o=w[0],w=w[1],o===l&&(o=q(k,e.min)),e.isLog&&o<=0&&(o=null),n.total=n.stackTotal=O.total,n.percentage=O.total&&n.y/O.total*100,n.stackY=w,O.setOffset(this.pointXOffset||0,this.barW||0);n.yBottom=s(o)?e.translate(o,0,1,0,1):null;h&&(w=this.modifyValue(w,n));n.plotY=o=typeof w==="number"&&w!==Infinity?
	E(v(-1E5,e.translate(w,0,1,0,1)),1E5):t;n.isInside=o!==t&&o>=0&&o<=e.len&&m>=0&&m<=c.len;n.clientX=j?c.translate(u,0,0,0,1):m;n.negative=n.y<(k||0);n.category=d&&d[n.x]!==t?d[n.x]:n.x;n.isNull||(p!==void 0&&(A=E(A,S(m-p))),p=m)}this.closestPointRangePx=A},getValidPoints:function(a,b){var c=this.chart;return Sa(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,f=this.clipBox,
	g=f||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(","),i=b[h],j=b[h+"m"];if(!i){if(a)g.width=0,b[h+"m"]=j=d.clipRect(-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:b.chartHeight);b[h]=i=d.clipRect(g)}a&&(i.count+=1);if(c.clip!==!1)this.group.clip(a||f?i:b.clipRect),this.markerGroup.clip(j),this.sharedClipKey=h;a||(i.count-=1,i.count<=0&&h&&b[h]&&(f||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=
	this.chart,c=this.options.animation,d;if(c&&!da(c))c=W[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();M(this,"afterAnimate")},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,m=this.pointAttr[""],o,p,r,A=this.markerGroup,n=q(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);
	if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=V(g.plotX),e=g.plotY,k=g.graphic,o=g.marker||{},p=!!g.marker,a=n&&o.enabled===t||o.enabled,r=g.isInside,a&&e!==t&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||m,h=a.r,i=q(o.symbol,this.symbol),j=i.indexOf("url")===0,k)k[r?"show":"hide"](!0).attr(a).animate(x({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(r&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,p?o:l).attr(a).add(A)}else if(k)g.graphic=
	k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=q(a[g],b[f],c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=W[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor;f={stroke:g,fill:g};var i=a.points||[],j,k,l=[],m=a.pointAttrToOptions;j=a.hasPointSpecificOptions;var o=c.lineColor,p=c.fillColor;k=b.turboThreshold;var r=a.zones,A=a.zoneAxis||"y",P;b.marker?(e.radius=
	e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||wa(e.color||g).brighten(e.brightness).get(),e.negativeColor=e.negativeColor||wa(e.negativeColor||h).brighten(e.brightness).get());l[""]=a.convertAttribs(c,f);n(["hover","select"],function(b){l[b]=a.convertAttribs(d[b],l[""])});a.pointAttr=l;g=i.length;if(!k||g<k||j)for(;g--;){k=i[g];if((c=k.options&&k.options.marker||k.options)&&c.enabled===!1)c.radius=0;if(r.length){j=0;for(f=r[j];k[A]>=f.value;)f=
	r[++j];k.color=k.fillColor=q(f.color,a.color)}j=b.colorByPoint||k.color;if(k.options)for(P in m)s(c[m[P]])&&(j=!0);if(j){c=c||{};j=[];d=c.states||{};f=d.hover=d.hover||{};if(!b.marker||k.negative&&!f.fillColor&&!e.fillColor)f[a.pointAttrToOptions.fill]=f.color||!k.options.color&&e[k.negative&&h?"negativeColor":"color"]||wa(k.color).brighten(f.brightness||e.brightness).get();f={color:k.color};if(!p)f.fillColor=k.color;if(!o)f.lineColor=k.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;j[""]=
	a.convertAttribs(x(f,c),l[""]);j.hover=a.convertAttribs(d.hover,l.hover,j[""]);j.select=a.convertAttribs(d.select,l.select,j[""])}else j=l;k.pointAttr=j}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(Ma),d,e=a.data||[],f,g,h;M(a,"destroy");T(a);n(a.axisTypes||[],function(b){if(h=a[b])Aa(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof
	Z&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;Aa(b.series,a);for(g in a)delete a[g]},getGraphPath:function(a,b,c){var d=this,e=d.options,f=e.step,g,h=[],i,a=a||d.points;(g=a.reversed)&&a.reverse();(f={right:1,center:2}[f]||f&&3)&&g&&(f=4-f);e.connectNulls&&!b&&!c&&(a=this.getValidPoints(a));n(a,function(g,k){var l=g.plotX,m=g.plotY,o=a[k-1];if((g.leftCliff||o&&o.rightCliff)&&!c)i=!0;g.isNull&&!s(b)&&k>0?i=!e.connectNulls:g.isNull&&!b?i=!0:
	(k===0||i?o=["M",g.plotX,g.plotY]:d.getPointSpline?o=d.getPointSpline(a,g,k):f?(o=f===1?["L",o.plotX,m]:f===2?["L",(o.plotX+l)/2,o.plotY,"L",(o.plotX+l)/2,m]:["L",l,o.plotY],o.push("L",l,m)):o=["L",l,m],h.push.apply(h,o),i=!1)});return d.graphPath=h},drawGraph:function(){var a=this,b=this.options,c=[["graph",b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=(this.gappedPath||this.getGraphPath).call(this),g=this.fillGraph&&this.color||"none";n(this.zones,function(d,e){c.push(["zoneGraph"+
	e,d.color||a.color,d.dashStyle||b.dashStyle])});n(c,function(c,i){var j=c[0],k=a[j];if(k)k.animate({d:f});else if((d||g)&&f.length)k={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?k.dashstyle=c[2]:e&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),a[j]=a.chart.renderer.path(f).attr(k).add(a.group).shadow(i<2&&b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,j=this.area,k=v(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||
	"y")+"Axis"],m,o=l.reversed,p=b.inverted,r=l.horiz,A,P,u,w=!1;if(d.length&&(i||j)&&l.min!==t)i&&i.hide(),j&&j.hide(),m=l.getExtremes(),n(d,function(d,n){e=o?r?b.plotWidth:0:r?0:l.toPixels(m.min);e=E(v(q(f,e),0),k);f=E(v(y(l.toPixels(q(d.value,m.max),!0)),0),k);w&&(e=f=l.toPixels(m.max));A=Math.abs(e-f);P=E(e,f);u=v(e,f);if(l.isXAxis){if(h={x:p?u:P,y:0,width:A,height:k},!r)h.x=b.plotHeight-h.x}else if(h={x:0,y:p?u:P,width:k,height:A},r)h.y=b.plotWidth-h.y;b.inverted&&c.isVML&&(h=l.isXAxis?{x:0,y:o?
	P:u,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[n]?g[n].animate(h):(g[n]=c.clipRect(h),i&&a["zoneGraph"+n].clip(g[n]),j&&a["zoneArea"+n].clip(g[n]));w=d.value>m.max}),this.clips=g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};n(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}var b=this,c=b.chart;if(b.xAxis)D(c,"resize",a),D(b,"destroy",function(){T(c,"resize",a)}),a(),b.invertGroups=
	a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({zIndex:d||0.1}).add(e),f.addClass("highcharts-series-"+this.index));f.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&
	hb(d.animation).duration,f=a.visible?"inherit":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());n(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();
	d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)a.animationTimeout=$a(function(){a.afterAnimate()},e);a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.isDirty,d=this.group,e=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:q(e&&e.left,a.plotLeft),translateY:q(f&&f.top,a.plotTop)}));this.translate();this.render();b&&M(this,"updatedData");(c||b)&&delete this.kdTree},
	kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,e,f){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[e%f],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),e+1,f),right:a(c.slice(h+1),e+1,f)}}var b=this,c=b.kdDimensions;delete b.kdTree;
	$a(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c)},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,j,k){var l=b.point,m=d.kdAxisArray[j%k],o,p,r=l;p=s(a[e])&&s(l[e])?Math.pow(a[e]-l[e],2):null;o=s(a[f])&&s(l[f])?Math.pow(a[f]-l[f],2):null;o=(p||0)+(o||0);l.dist=s(o)?Math.sqrt(o):Number.MAX_VALUE;l.distX=s(p)?Math.sqrt(p):Number.MAX_VALUE;m=a[m]-l[m];o=m<0?"left":"right";p=m<0?"right":"left";b[o]&&(o=c(a,b[o],j+1,k),r=o[g]<r[g]?o:l);b[p]&&Math.sqrt(m*m)<r[g]&&(a=c(a,
	b[p],j+1,k),r=a[g]<r[g]?a:r);return r}var d=this,e=this.kdAxisArray[0],f=this.kdAxisArray[1],g=b?"distX":"dist";this.kdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Tb.prototype={destroy:function(){Pa(this,this.axis)},render:function(a){var b=this.options,c=b.format,c=c?La(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,
	rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=S(g-c),h=d.xAxis[0].translate(this.x)+a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};Ca.prototype.getStacks=
	function(){var a=this;n(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});n(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+q(b.options.stack,"")})};I.prototype.buildStacks=function(){var a=this.series,b,c=q(this.options.reversedStacks,!0),d=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=d;e--;)a[c?e:d-e-1].setStackedPoints();for(e=d;e--;)b=a[c?e:d-e-1],b.setStackCliffs&&b.setStackCliffs();if(this.usePercentage)for(e=
	0;e<d;e++)a[e].setPercentStacks()}};I.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};I.prototype.resetStacks=function(){var a=this.stacks,b,c;if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].touched<this.stacksTouched?(a[b][c].destroy(),delete a[b][c]):(a[b][c].total=
	null,a[b][c].cum=0)};I.prototype.cleanStacks=function(){var a,b,c;if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}};Q.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.startFromThreshold?f:0,h=e.stack,e=e.stacking,i=this.stackKey,j="-"+i,k=this.negStacks,
	l=this.yAxis,m=l.stacks,o=l.oldStacks,p,r,n,P,u,w,s;l.stacksTouched+=1;for(u=0;u<d;u++){w=a[u];s=b[u];p=this.getStackIndicator(p,w,this.index);P=p.key;n=(r=k&&s<(g?0:f))?j:i;m[n]||(m[n]={});if(!m[n][w])o[n]&&o[n][w]?(m[n][w]=o[n][w],m[n][w].total=null):m[n][w]=new Tb(l,l.options.stackLabels,r,w,h);n=m[n][w];if(s!==null)n.points[P]=n.points[this.index]=[q(n.cum,g)],n.touched=l.stacksTouched,p.index>0&&this.singleStacks===!1&&(n.points[P][0]=n.points[this.index+","+w+",0"][0]);e==="percent"?(r=r?i:
	j,k&&m[r]&&m[r][w]?(r=m[r][w],n.total=r.total=v(r.total,n.total)+S(s)||0):n.total=na(n.total+(S(s)||0))):n.total=na(n.total+(s||0));n.cum=q(n.cum,g)+(s||0);if(s!==null)n.points[P].push(n.cum),c[u]=n.cum}if(e==="percent")l.usePercentage=!0;this.stackedYData=c;l.oldStacks={}}};Q.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData,e;n([b,"-"+b],function(b){var f;for(var g=d.length,h,i;g--;)if(h=d[g],e=a.getStackIndicator(e,h,a.index),f=(i=c[b]&&c[b][h])&&
	i.points[e.key],h=f)i=i.total?100/i.total:0,h[0]=na(h[0]*i),h[1]=na(h[1]*i),a.stackedYData[g]=h[1]})};Q.prototype.getStackIndicator=function(a,b,c){!s(a)||a.x!==b?a={x:b,index:0}:a.index++;a.key=[c,b,a.index].join(",");return a};x(Ca.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=q(b,!0),M(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options,a=C(a,{index:this[e].length,
	isX:b});new I(this,a);f[e]=va(f[e]||{});f[e].push(a);q(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&F(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=d=ea(Wa,{className:"highcharts-loading"},x(e.style,{zIndex:10,display:"none"}),b.container),b.loadingSpan=ea("span",null,e.labelStyle,d),D(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)F(d,
	{opacity:0,display:""}),eb(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&eb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){F(b,{display:"none"})}});this.loadingShown=!1}});x(Ha.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(f.y===null&&h)f.graphic=h.destroy();if(da(a)&&!Ja(a))f.redraw=function(){if(h&&h.element&&a&&a.marker&&a.marker.symbol)f.graphic=h.destroy();
	if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(l&&f.name)l[f.x]=f.name;k.data[i]=da(k.data[i])&&!Ja(k.data[i])?f.options:a;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;if(k.legendType==="point")j.isDirtyLegend=!0;b&&j.redraw(c)}var f=this,g=f.series,h=f.graphic,i,j=g.chart,k=g.options,l=g.xAxis&&g.xAxis.names,b=q(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,
	b){this.series.removePoint(sa(this,this.series.data),a,b)}});x(Q.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,j=e.chart,k=e.xAxis&&e.xAxis.names,l=h&&h.shift||0,m=["graph","area"],h=f.data,o,p=e.xData;ab(d,j);if(c){for(d=e.zones.length;d--;)m.push("zoneGraph"+d,"zoneArea"+d);n(m,function(a){if(e[a])e[a].shift=l+(f.step?2:1)})}if(i)i.isArea=!0;b=q(b,!0);i={series:e};e.pointClass.prototype.applyOptions.apply(i,[a]);m=i.x;d=p.length;if(e.requireSorting&&m<
	p[d-1])for(o=!0;d&&p[d-1]>m;)d--;e.updateParallelArrays(i,"splice",d,0,0);e.updateParallelArrays(i,d);if(k&&i.name)k[m]=i.name;h.splice(d,0,a);o&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),j.redraw())},removePoint:function(a,b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){g&&g.length===e.length&&
	g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};ab(c,h);b=q(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart;M(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();q(a,!0)&&d.redraw(b)})},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=K[f].prototype,h=["group","markerGroup","dataLabelsGroup"],
	i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;n(h,function(a){h[a]=c[a];delete c[a]});a=C(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=t;x(this,K[a.type||f].prototype);n(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();q(b,!0)&&d.redraw(!1)}});x(I.prototype,{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=C(this.userOptions,a);this.destroy(!0);this._addedPlotLB=this.chart._labelPanes=
	t;this.init(c,x(a,{events:t}));c.isDirtyBox=!0;q(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);Aa(b.axes,this);Aa(b[c],this);b.options[c].splice(this.options.index,1);n(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;q(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}});var Ia=la(Q);K.line=Ia;W.area=C(ca,{softThreshold:!1,threshold:0});
	var za=la(Q,{type:"area",singleStacks:!1,getStackPoints:function(){var a=[],b=[],c=this.xAxis,d=this.yAxis,e=d.stacks[this.stackKey],f={},g=this.points,h=this.index,i=d.series,j=i.length,k,l=q(d.options.reversedStacks,!0)?1:-1,m,o;if(this.options.stacking){for(m=0;m<g.length;m++)f[g[m].x]=g[m];for(o in e)e[o].total!==null&&b.push(o);b.sort(function(a,b){return a-b});k=ta(i,function(){return this.visible});n(b,function(g,i){var o=0,q,u;if(f[g]&&!f[g].isNull)a.push(f[g]),n([-1,1],function(a){var c=
	a===1?"rightNull":"leftNull",d=0,o=e[b[i+a]];if(o)for(m=h;m>=0&&m<j;)q=o.points[m],q||(m===h?f[g][c]=!0:k[m]&&(u=e[g].points[m])&&(d-=u[1]-u[0])),m+=l;f[g][a===1?"rightCliff":"leftCliff"]=d});else{for(m=h;m>=0&&m<j;){if(q=e[g].points[m]){o=q[1];break}m+=l}o=d.toPixels(o,!0);a.push({isNull:!0,plotX:c.toPixels(g,!0),plotY:o,yBottom:o})}})}return a},getGraphPath:function(a){var b=Q.prototype.getGraphPath,c=this.options,d=c.stacking,e=this.yAxis,f,g,h=[],i=[],j=this.index,k,l=e.stacks[this.stackKey],
	m=c.threshold,o=e.getThreshold(c.threshold),p,c=c.connectNulls||d==="percent",r=function(b,c,f){var g=a[b],b=d&&l[g.x].points[j],p=g[f+"Null"]||0,f=g[f+"Cliff"]||0,r,n,g=!0;f||p?(r=(p?b[0]:b[1])+f,n=b[0]+f,g=!!p):!d&&a[c]&&a[c].isNull&&(r=n=m);r!==void 0&&(i.push({plotX:k,plotY:r===null?o:e.getThreshold(r),isNull:g}),h.push({plotX:k,plotY:n===null?o:e.getThreshold(n)}))},a=a||this.points;d&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,k=q(a[f].rectPlotX,a[f].plotX),p=q(a[f].yBottom,
	o),!g||c){c||r(f,f-1,"left");if(!g||d||!c)i.push(a[f]),h.push({x:f,plotX:k,plotY:p});c||r(f,f+1,"right")}f=b.call(this,i,!0,!0);h.reversed=!0;g=b.call(this,h,!0,!0);g.length&&(g[0]="L");f=f.concat(g);b=b.call(this,i,!1,c);this.areaPath=f;return b},drawGraph:function(){this.areaPath=[];Q.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];n(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});n(d,function(d){var f=
	d[0],g=a[f];g?g.animate({d:b}):(g={fill:d[2]||d[1],zIndex:0},d[2]||(g["fill-opacity"]=q(c.fillOpacity,0.75)),a[f]=a.chart.renderer.path(b).attr(g).add(a.group))})},drawLegendSymbol:aa.drawRectangle});K.area=za;W.spline=C(ca);Ia=la(Q,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],c=a[c+1],g,h,i,j;if(f&&!f.isNull&&c&&!c.isNull){a=f.plotY;i=c.plotX;var c=c.plotY,k=0;g=(1.5*d+f.plotX)/2.5;h=(1.5*e+a)/2.5;i=(1.5*d+i)/2.5;j=(1.5*e+c)/2.5;i!==g&&(k=(j-h)*(i-d)/(i-g)+e-j);
	h+=k;j+=k;h>a&&h>e?(h=v(a,e),j=2*e-h):h<a&&h<e&&(h=E(a,e),j=2*e-h);j>c&&j>e?(j=v(c,e),h=2*e-j):j<c&&j<e&&(j=E(c,e),h=2*e-j);b.rightContX=i;b.rightContY=j}b=["C",q(f.rightContX,f.plotX),q(f.rightContY,f.plotY),q(g,d),q(h,e),d,e];f.rightContX=f.rightContY=null;return b}});K.spline=Ia;W.areaspline=C(W.area);za=za.prototype;Ia=la(Ia,{type:"areaspline",getStackPoints:za.getStackPoints,getGraphPath:za.getGraphPath,setStackCliffs:za.setStackCliffs,drawGraph:za.drawGraph,drawLegendSymbol:aa.drawRectangle});
	K.areaspline=Ia;W.column=C(ca,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0});Ia=la(Q,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},
	cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){Q.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&n(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h=0;b.grouping===!1?h=1:n(a.chart.series,function(b){var c=b.options,e=b.yAxis,i;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===t&&
	(g[f]=h++),i=g[f]):c.grouping!==!1&&(i=h++),b.columnIndex=i});var i=E(S(c.transA)*(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=i*b.groupPadding,k=(i-2*j)/h,b=E(b.maxPointWidth||c.len,q(b.pointWidth,k*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(k-b)/2+(j+((a.columnIndex||0)+(e?1:0))*k-i/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,b,c,d){var e=this.chart,f=this.borderWidth,g=-(f%2?0.5:0),f=f%2?0.5:1;e.inverted&&e.renderer.isVML&&(f+=1);c=Math.round(a+
	c)+g;a=Math.round(a)+g;c-=a;d=Math.round(b+d)+f;g=S(b)<=0.5&&d>0.5;b=Math.round(b)+f;d-=b;g&&d&&(b-=1,d+=1);return{x:a,y:b,width:c,height:d}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=q(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=q(c.minPointLength,5),h=a.getColumnMetrics(),i=h.width,j=a.barW=v(i,1+2*d),k=a.pointXOffset=h.offset;b.inverted&&(f-=0.5);c.pointPadding&&(j=Fa(j));Q.prototype.translate.apply(a);
	n(a.points,function(c){var d=E(q(c.yBottom,f),9E4),h=999+S(d),h=E(v(-h,c.plotY),e.len+h),p=c.plotX+k,r=j,n=E(h,d),s,u=v(h,d)-n;S(u)<g&&g&&(u=g,s=!e.reversed&&!c.negative||e.reversed&&c.negative,n=S(n-f)>g?d-g:f-(s?g:0));c.barX=p;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-h,a.xAxis.len-p-r/2,u]:[p+r/2,h+e.pos-b.plotTop,u];c.shapeType="rect";c.shapeArgs=a.crispCol(p,n,r,u)})},getSymbol:ra,drawLegendSymbol:aa.drawRectangle,drawGraph:ra,drawPoints:function(){var a=this,b=this.chart,
	c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;n(a.points,function(h){var i=h.plotY,j=h.graphic;if(i!==t&&!isNaN(i)&&h.y!==null)f=h.shapeArgs,i=s(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":""]||a.pointAttr[""],j?(Ta(j),j.attr(i).attr(g)[b.pointCount<e?"animate":"attr"](C(f))):h.graphic=d[h.shapeType](f).attr(i).attr(g).add(h.group||a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(j)h.graphic=j.destroy()})},animate:function(a){var b=this,
	c=this.yAxis,d=b.options,e=this.chart.inverted,f={};if(ja)a?(f.scaleY=0.001,a=E(c.pos+c.len,v(c.pos,c.toPixels(d.threshold))),e?f.translateX=a-c.len:f.translateY=a,b.group.attr(f)):(f[e?"translateX":"translateY"]=c.pos,b.group.animate(f,x(hb(b.options.animation),{step:function(a,c){b.group.attr({scaleY:c.pos})}})),b.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&n(b.series,function(b){if(b.type===a.type)b.isDirty=!0});Q.prototype.remove.apply(a,arguments)}});K.column=Ia;W.bar=
	C(W.column);za=la(Ia,{type:"bar",inverted:!0});K.bar=za;W.scatter=C(ca,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});za=la(Q,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&
	Q.prototype.drawGraph.call(this)}});K.scatter=za;W.pie=C(ca,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.y===null?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});ca={type:"pie",isCartesian:!1,pointClass:la(Ha,{init:function(){Ha.prototype.init.apply(this,
	arguments);var a=this,b;a.name=q(a.name,"Slice");b=function(b){a.slice(b.type==="select")};D(a,"select",b);D(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint,b=q(b,f);if(a!==c.visible){c.visible=c.options.visible=a=a===t?!c.visible:a;d.options.data[sa(c,d.data)]=c.options;n(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)});c.legendItem&&e.legend.colorizeItem(c,a);!a&&c.state==="hover"&&
	c.setState("");if(f)d.isDirty=!0;b&&e.redraw()}},slice:function(a,b,c){var d=this.series;ab(c,d.chart);q(b,!0);this.sliced=this.options.sliced=a=s(a)?a:!this.sliced;d.options.data[sa(this,d.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,
	b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)n(c,function(a){var c=a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},
	updateTotals:function(){var a,b=0,c=this.points,d=c.length,e,f=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)e=c[a],b+=f&&!e.visible?0:e.y;this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){Q.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=Ba/180*(i-90),i=(this.endAngleRad=Ba/
	180*(q(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,c=c.ignoreHiddenPoint,m,o=k.length,p;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=Y.asin(E((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*ba(h)*(a[2]/2+l)};for(m=0;m<o;m++){p=k[m];f=j+b*i;if(!c||p.visible)b+=p.percentage/100;g=j+b*i;p.shapeType="arc";p.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:y(f*1E3)/1E3,end:y(g*1E3)/1E3};h=(g+f)/2;h>1.5*Ba?h-=2*Ba:h<-Ba/2&&(h+=2*Ba);p.slicedTranslation={translateX:y(ba(h)*
	d),translateY:y(ka(h)*d)};f=ba(h)*a[2]/2;g=ka(h)*a[2]/2;p.tooltipPos=[a[0]+f*0.7,a[1]+g*0.7];p.half=h<-Ba/2||h>Ba/2?1:0;p.angle=h;e=E(e,l/2);p.labelPos=[a[0]+f+ba(h)*l,a[1]+g+ka(h)*l,a[0]+f+ba(h)*e,a[1]+g+ka(h)*e,a[0]+f,a[1]+g,l<0?"center":p.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g,h,i;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);n(a.points,function(j){if(j.y!==null){d=j.graphic;h=j.shapeArgs;f=j.shadowGroup;
	g=j.pointAttr[j.selected?"select":""];if(!g.stroke)g.stroke=g.fill;if(e&&!f)f=j.shadowGroup=b.g("shadow").add(a.shadowGroup);c=j.sliced?j.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);if(d)d.setRadialReference(a.center).attr(g).animate(x(h,c));else{i={"stroke-linejoin":"round"};if(!j.visible)i.visibility="hidden";j.graphic=d=b[j.shapeType](h).setRadialReference(a.center).attr(g).attr(i).attr(c).add(a.group).shadow(e,f)}}})},searchPoint:ra,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==
	void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:aa.drawRectangle,getCenter:bc.getCenter,getSymbol:ra};ca=la(Q,ca);K.pie=ca;Q.prototype.drawDataLabels=function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,j,k=q(d.defer,!0),l=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),j=a.plotGroup("dataLabelsGroup","data-labels",k&&!h?"hidden":"visible",d.zIndex||6),k&&(j.attr({opacity:+h}),h||D(a,"afterAnimate",function(){a.visible&&
	j.show();j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,n(e,function(e){var h,k=e.dataLabel,r,n,P=e.connector,u=!0,w,v={};f=e.dlOptions||e.options&&e.options.dataLabels;h=q(f&&f.enabled,g.enabled)&&e.y!==null;if(k&&!h)e.dataLabel=k.destroy();else if(h){d=C(g,f);w=d.style;h=d.rotation;r=e.getLabelConfig();i=d.format?La(d.format,r):d.formatter.call(r,d);w.color=q(d.color,w.color,a.color,"black");if(k)if(s(i))k.attr({text:i}),u=!1;else{if(e.dataLabel=k=k.destroy(),P)e.connector=P.destroy()}else if(s(i)){k=
	{fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};if(w.color==="contrast")v.color=d.inside||d.distance<0||b.stacking?l.getContrast(e.color||a.color):"#000000";if(c)v.cursor=c;for(n in k)k[n]===t&&delete k[n];k=e.dataLabel=l[h?"text":"label"](i,0,-9999,d.shape,null,null,d.useHTML).attr(k).css(x(w,v)).add(j).shadow(d.shadow)}k&&a.alignDataLabel(e,k,d,null,u)}})};Q.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,
	g=f.inverted,h=q(a.plotX,-9999),i=q(a.plotY,-9999),j=b.getBBox(),k=f.renderer.fontMetrics(c.style.fontSize).b,l=c.rotation,m=c.align,o=this.visible&&(a.series.forceDL||f.isInsidePlot(h,y(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g)),p=q(c.overflow,"justify")==="justify";if(o)d=x({x:g?f.plotWidth-i:h,y:y(g?f.plotHeight-h:i),width:0,height:0},d),x(c,{width:j.width,height:j.height}),l?(p=!1,g=f.renderer.rotCorr(k,l),g={x:d.x+c.x+d.width/2+g.x,y:d.y+c.y+d.height/2},b[e?"attr":"animate"](g).attr({align:c.align}),
	h=(l+720)%360,h=h>180&&h<360,m==="left"?g.y-=h?j.height:0:m==="center"?(g.x-=j.width/2,g.y-=j.height/2):m==="right"&&(g.x-=j.width,g.y-=h?0:j.height)):(b.align(c,null,d),g=b.alignAttr),p?this.justifyDataLabel(b,c,g,j,d,e):q(c.crop,!0)&&(o=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+j.height)),c.shape&&!l&&b.attr({anchorX:a.plotX,anchorY:a.plotY});if(!o)Ta(b),b.attr({y:-9999}),b.placed=!1};Q.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,
	k,l=a.box?0:a.padding||0;j=c.x+l;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width-l;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y+l;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height-l;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(K.pie)K.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=q(e.connectorPadding,10),g=q(e.connectorWidth,
	1),h=d.plotWidth,i=d.plotHeight,j,k,l=q(e.softConnector,!0),m=e.distance,o=a.center,p=o[2]/2,r=o[1],A=m>0,s,u,w,t=[[],[]],x,z,C,B,L,D=[0,0,0,0],J=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){Q.prototype.drawDataLabels.apply(a);n(b,function(a){if(a.dataLabel&&a.visible)t[a.half].push(a),a.dataLabel._pos=null});for(B=2;B--;){var G=[],K=[],I=t[B],F=I.length,H;if(F){a.sortByAngle(I,B-0.5);for(L=b=0;!b&&I[L];)b=I[L]&&I[L].dataLabel&&(I[L].dataLabel.getBBox().height||21),
	L++;if(m>0){u=E(r+p+m,d.plotHeight);for(L=v(0,r-p-m);L<=u;L+=b)G.push(L);u=G.length;if(F>u){c=[].concat(I);c.sort(J);for(L=F;L--;)c[L].rank=L;for(L=F;L--;)I[L].rank>=u&&I.splice(L,1);F=I.length}for(L=0;L<F;L++){c=I[L];w=c.labelPos;c=9999;var M,N;for(N=0;N<u;N++)M=S(G[N]-w[1]),M<c&&(c=M,H=N);if(H<L&&G[L]!==null)H=L;else for(u<F-L+H&&G[L]!==null&&(H=u-F+L);G[H]===null;)H++;K.push({i:H,y:G[H]});G[H]=null}K.sort(J)}for(L=0;L<F;L++){c=I[L];w=c.labelPos;s=c.dataLabel;C=c.visible===!1?"hidden":"inherit";
	c=w[1];if(m>0){if(u=K.pop(),H=u.i,z=u.y,c>z&&G[H+1]!==null||c<z&&G[H-1]!==null)z=E(v(0,c),d.plotHeight)}else z=c;x=e.justify?o[0]+(B?-1:1)*(p+m):a.getX(z===r-p-m||z===r+p+m?c:z,B);s._attr={visibility:C,align:w[6]};s._pos={x:x+e.x+({left:f,right:-f}[w[6]]||0),y:z+e.y-10};s.connX=x;s.connY=z;if(this.options.size===null)u=s.width,x-u<f?D[3]=v(y(u-x+f),D[3]):x+u>h-f&&(D[1]=v(y(x+u-h+f),D[1])),z-b/2<0?D[0]=v(y(-z+b/2),D[0]):z+b/2>i&&(D[2]=v(y(z+b/2-i),D[2]))}}}if(Ea(D)===0||this.verifyDataLabelOverflow(D))this.placeDataLabels(),
	A&&g&&n(this.points,function(b){j=b.connector;w=b.labelPos;if((s=b.dataLabel)&&s._pos&&b.visible)C=s._attr.visibility,x=s.connX,z=s.connY,k=l?["M",x+(w[6]==="left"?5:-5),z,"C",x,z,2*w[2]-w[4],2*w[3]-w[5],w[2],w[3],"L",w[4],w[5]]:["M",x+(w[6]==="left"?5:-5),z,"L",w[2],w[3],"L",w[4],w[5]],j?(j.animate({d:k}),j.attr("visibility",C)):b.connector=j=a.chart.renderer.path(k).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:C}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},
	K.pie.prototype.placeDataLabels=function(){n(this.points,function(a){var b=a.dataLabel;if(b&&a.visible)(a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999})})},K.pie.prototype.alignDataLabel=ra,K.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=c.minSize||80,f=e,g;d[0]!==null?f=v(b[2]-v(a[1],a[3]),e):(f=v(b[2]-a[1]-a[3],e),b[0]+=(a[3]-a[1])/2);d[1]!==null?f=v(E(f,b[2]-v(a[0],a[2])),e):(f=v(E(f,b[2]-a[0]-a[2]),e),
	b[1]+=(a[0]-a[2])/2);f<b[2]?(b[2]=f,b[3]=Math.min(/%$/.test(c.innerSize||0)?f*parseFloat(c.innerSize||0)/100:parseFloat(c.innerSize||0),f),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):g=!0;return g};if(K.column)K.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=q(a.below,a.plotY>q(this.translatedThreshold,g.yAxis.len)),j=q(c.inside,!!this.options.stacking);if(h){d=C(h);if(d.y<0)d.height+=d.y,d.y=0;h=d.y+d.height-g.yAxis.len;
	h>0&&(d.height-=h);f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width});if(!j)f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0)}c.align=q(c.align,!f||j?"center":i?"right":"left");c.verticalAlign=q(c.verticalAlign,f||j?"middle":i?"top":"bottom");Q.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,d=a.pick,e=a.addEvent;b.prototype.callbacks.push(function(a){function b(){var e=[];c(a.series,function(a){var b=a.options.dataLabels,
	f=a.dataLabelCollections||["dataLabel"];(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(f,function(b){c(a.points,function(a){if(a[b])a[b].labelrank=d(a.labelrank,a.shapeArgs&&a.shapeArgs.height),e.push(a[b])})})});a.hideOverlappingLabels(e)}b();e(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,d,e,j,k,l,m,o,p,n;for(e=0;e<b;e++)if(d=a[e])d.oldOpacity=d.opacity,d.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(e=0;e<b;e++){j=
	a[e];for(d=e+1;d<b;++d)if(k=a[d],j&&k&&j.placed&&k.placed&&j.newOpacity!==0&&k.newOpacity!==0&&(l=j.alignAttr,m=k.alignAttr,o=j.parentGroup,p=k.parentGroup,n=2*(j.box?0:j.padding),l=!(m.x+p.translateX>l.x+o.translateX+(j.width-n)||m.x+p.translateX+(k.width-n)<l.x+o.translateX||m.y+p.translateY>l.y+o.translateY+(j.height-n)||m.y+p.translateY+(k.height-n)<l.y+o.translateY)))(j.labelrank<k.labelrank?j:k).newOpacity=0}c(a,function(a){var b,c;if(a){c=a.newOpacity;if(a.oldOpacity!==c&&a.placed)c?a.show(!0):
	b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b);a.isOld=!0}})}})(z);var nb=z.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==t&&d!==b.hoverPoint)d.onMouseOver(a)};n(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)n(a.trackerGroups,function(b){if(a[b]&&
	(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),db))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},m=function(){if(f.hoverSeries!==a)a.onMouseOver()},o="rgba(192,192,192,"+(ja?1.0E-4:0.002)+")";if(e&&!c)for(k=e+1;k--;)d[k]===
	"M"&&d.splice(k+1,0,d[k+1]-i,d[k+2],"L"),(k&&d[k]==="M"||k===e)&&d.splice(k,0,"L",d[k-2]+i,d[k-1]);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:o,fill:c?o:"none","stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),n([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if(db)a.on("touchstart",m)}))}};if(K.column)Ia.prototype.drawTracker=
	nb.drawTrackerPoint;if(K.pie)K.pie.prototype.drawTracker=nb.drawTrackerPoint;if(K.scatter)za.prototype.drawTracker=nb.drawTrackerPoint;x(vb.prototype,{setItemEvents:function(a,b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):
	M(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=ea("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);D(a.checkbox,"click",function(b){M(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});N.legend.itemStyle.cursor="pointer";x(Ca.prototype,{showResetZoom:function(){var a=this,b=N.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?
	null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=this;M(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?n(this.axes,function(a){b=a.zoom()}):n(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=
	e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&da(e))this.resetZoomButton=e.destroy();b&&this.redraw(q(this.options.chart.animation,a&&a.animation,this.pointCount<100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&n(d,function(a){a.setState()});n(b==="xy"?[1,0]:[1],function(b){var b=c[b?"xAxis":"yAxis"][0],d=b.horiz,h=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",i=c[d],j=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(i-
	h,!0)+j,j=b.toValue(i+b.len-h,!0)-j,i=i>h;if(b.series.length&&(i||l>E(k.dataMin,k.min))&&(!i||j<v(k.dataMax,k.max)))b.setExtremes(l,j,!1,!1,{trigger:"pan"}),e=!0;c[d]=h});e&&c.redraw(!1);F(c.container,{cursor:"move"})}});x(Ha.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=q(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[sa(c,d.data)]=c.options;c.setState(a&&"select");b||n(e.getSelectedPoints(),function(a){if(a.selected&&
	a!==c)a.selected=a.options.selected=!1,d.options.data[sa(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a,b){var c=this.series,d=c.chart,e=d.tooltip,f=d.hoverPoint;if(d.hoverSeries!==c)c.onMouseOver();if(f&&f!==this)f.onMouseOut();if(this.series&&(this.firePointEvent("mouseOver"),e&&(!e.shared||c.noSharedTooltip)&&e.refresh(this,a),this.setState("hover"),!b))d.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");
	if(!b||sa(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=C(this.series.options.point,this.options).events,b;this.events=a;for(b in a)D(this,b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=V(this.plotX),d=this.plotY,e=this.series,f=e.options.states,g=W[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,l=this.marker||{},m=e.chart,o=e.halo,p,a=a||"";p=this.pointAttr[a]||
	e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&p.r,this.graphic.attr(C(p,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=k=m.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(p).add(e.markerGroup),
	k.currentSymbol=l;if(k)k[a&&m.isInsidePlot(c,d,m.inverted)?"show":"hide"](),k.element.point=this}if((c=f[a]&&f[a].halo)&&c.size){if(!o)e.halo=o=m.renderer.path().add(m.seriesGroup);o.attr(x({fill:this.color||e.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else o&&o.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted,f=Math.floor(this.plotX);return c.renderer.symbols.circle(d.translateX+
	(e?b.yAxis.len-this.plotY:f)-a,d.translateY+(e?b.xAxis.len-f:this.plotY)-a,a*2,a*2)}});x(Q.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&M(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&M(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&
	c.hide();this.setState()},setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===t?!h:a)?"show":
	"hide";n(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&n(d.series,function(a){if(a.options.stacking&&a.visible)a.isDirty=!0});n(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();M(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=
	a=a===t?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;M(this,a?"select":"unselect")},drawTracker:nb.drawTrackerGraph});U(Q.prototype,"init",function(a){var b;a.apply(this,Array.prototype.slice.call(arguments,1));(b=this.xAxis)&&b.options.ordinal&&D(this,"updatedData",function(){delete b.ordinalIndex})});U(I.prototype,"getTimeTicks",function(a,b,c,d,e,f,g,h){var i=0,j,k,l={},m,o,p,n=[],q=-Number.MAX_VALUE,v=this.options.tickPixelInterval;if(!this.options.ordinal&&!this.options.breaks||
	!f||f.length<3||c===t)return a.call(this,b,c,d,e);o=f.length;for(j=0;j<o;j++){p=j&&f[j-1]>d;f[j]<c&&(i=j);if(j===o-1||f[j+1]-f[j]>g*5||p){if(f[j]>q){for(k=a.call(this,b,f[i],f[j],e);k.length&&k[0]<=q;)k.shift();k.length&&(q=k[k.length-1]);n=n.concat(k)}i=j+1}if(p)break}a=k.info;if(h&&a.unitRange<=H.hour){j=n.length-1;for(i=1;i<j;i++)ma("%d",n[i])!==ma("%d",n[i-1])&&(l[n[i]]="day",m=!0);m&&(l[n[0]]="day");a.higherRanks=l}n.info=a;if(h&&s(v)){h=a=n.length;j=[];var u;for(m=[];h--;)i=this.translate(n[h]),
	u&&(m[h]=u-i),j[h]=u=i;m.sort();m=m[V(m.length/2)];m<v*0.6&&(m=null);h=n[a-1]>d?a-1:a;for(u=void 0;h--;)i=j[h],d=u-i,u&&d<v*0.8&&(m===null||d<m*0.8)?(l[n[h]]&&!l[n[h+1]]?(d=h+1,u=i):d=h,n.splice(d,1)):u=i}return n});x(I.prototype,{beforeSetTickPositions:function(){var a,b=[],c=!1,d,e=this.getExtremes(),f=e.min,g=e.max,h,i=this.isXAxis&&!!this.options.breaks;if((e=this.options.ordinal)||i){n(this.series,function(c,d){if(c.visible!==!1&&(c.takeOrdinalPosition!==!1||i))if(b=b.concat(c.processedXData),
	a=b.length,b.sort(function(a,b){return a-b}),a)for(d=a-1;d--;)b[d]===b[d+1]&&b.splice(d,1)});a=b.length;if(a>2){d=b[1]-b[0];for(h=a-1;h--&&!c;)b[h+1]-b[h]!==d&&(c=!0);if(!this.options.keepOrdinalPadding&&(b[0]-f>d||g-b[b.length-1]>d))c=!0}c?(this.ordinalPositions=b,d=this.val2lin(v(f,b[0]),!0),h=v(this.val2lin(E(g,b[b.length-1]),!0),1),this.ordinalSlope=g=(g-f)/(h-d),this.ordinalOffset=f-d*g):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=t}this.isOrdinal=e&&c;this.groupIntervalFactor=
	null},val2lin:function(a,b){var c=this.ordinalPositions,d;if(c){var e=c.length,f;for(d=e;d--;)if(c[d]===a){f=d;break}for(d=e-1;d--;)if(a>c[d]||d===0){c=(a-c[d])/(c[d+1]-c[d]);f=d+c;break}d=b?f:this.ordinalSlope*(f||0)+this.ordinalOffset}else d=a;return d},lin2val:function(a,b){var c=this.ordinalPositions;if(c){var d=this.ordinalSlope,e=this.ordinalOffset,f=c.length-1,g,h;if(b)a<0?a=c[0]:a>f?a=c[f]:(f=V(a),h=a-f);else for(;f--;)if(g=d*f+e,a>=g){d=d*(f+1)+e;h=(a-g)/(d-g);break}c=h!==t&&c[f]!==t?c[f]+
	(h?h*(c[f+1]-c[f]):0):a}else c=a;return c},getExtendedPositions:function(){var a=this.chart,b=this.series[0].currentDataGrouping,c=this.ordinalIndex,d=b?b.count+b.unitName:"raw",e=this.getExtremes(),f,g;if(!c)c=this.ordinalIndex={};if(!c[d])f={series:[],getExtremes:function(){return{min:e.dataMin,max:e.dataMax}},options:{ordinal:!0},val2lin:I.prototype.val2lin},n(this.series,function(c){g={xAxis:f,xData:c.xData,chart:a,destroyGroupedData:ra};g.options={dataGrouping:b?{enabled:!0,forced:!0,approximation:"open",
	units:[[b.unitName,[b.count]]]}:{enabled:!1}};c.processData.apply(g);f.series.push(g)}),this.beforeSetTickPositions.apply(f),c[d]=f.ordinalPositions;return c[d]},getGroupIntervalFactor:function(a,b,c){var d,c=c.processedXData,e=c.length,f=[];d=this.groupIntervalFactor;if(!d){for(d=0;d<e-1;d++)f[d]=c[d+1]-c[d];f.sort(function(a,b){return a-b});f=f[V(e/2)];a=v(a,c[0]);b=E(b,c[e-1]);this.groupIntervalFactor=d=e*f/(b-a)}return d},postProcessTickInterval:function(a){var b=this.ordinalSlope;return b?this.options.breaks?
	this.closestPointRange:a/(b/this.closestPointRange):a}});U(Ca.prototype,"pan",function(a,b){var c=this.xAxis[0],d=b.chartX,e=!1;if(c.options.ordinal&&c.series.length){var f=this.mouseDownX,g=c.getExtremes(),h=g.dataMax,i=g.min,j=g.max,k=this.hoverPoints,l=c.closestPointRange,f=(f-d)/(c.translationSlope*(c.ordinalSlope||l)),m={ordinalPositions:c.getExtendedPositions()},l=c.lin2val,o=c.val2lin,p;if(m.ordinalPositions){if(S(f)>1)k&&n(k,function(a){a.setState()}),f<0?(k=m,p=c.ordinalPositions?c:m):(k=
	c.ordinalPositions?c:m,p=m),m=p.ordinalPositions,h>m[m.length-1]&&m.push(h),this.fixedRange=j-i,f=c.toFixedRange(null,null,l.apply(k,[o.apply(k,[i,!0])+f,!0]),l.apply(p,[o.apply(p,[j,!0])+f,!0])),f.min>=E(g.dataMin,i)&&f.max<=v(h,j)&&c.setExtremes(f.min,f.max,!0,!1,{trigger:"pan"}),this.mouseDownX=d,F(this.container,{cursor:"move"})}else e=!0}else e=!0;e&&a.apply(this,Array.prototype.slice.call(arguments,1))});Q.prototype.gappedPath=function(){var a=this.options.gapSize,b=this.points.slice(),c=b.length-
	1;if(a&&c>0)for(;c--;)b[c+1].x-b[c].x>this.closestPointRange*a&&b.splice(c+1,0,{isNull:!0});return this.getGraphPath(b)};(function(a){a(z)})(function(a){function b(){return Array.prototype.slice.call(arguments,1)}function c(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,d(this.pointArrayMap,["y"]))}var d=a.pick,e=a.wrap,f=a.each,g=a.extend,h=a.fireEvent,i=a.Axis,j=a.Series;g(i.prototype,{isInBreak:function(a,b){var c=a.repeat||Infinity,d=a.from,e=a.to-a.from,c=b>=d?
	(b-d)%c:c-(d-b)%c;return a.inclusive?c<=e:c<e&&c!==0},isInAnyBreak:function(a,b){var c=this.options.breaks,e=c&&c.length,f,g,h;if(e){for(;e--;)this.isInBreak(c[e],a)&&(f=!0,g||(g=d(c[e].showPoints,this.isXAxis?!1:!0)));h=f&&b?f&&!g:f}return h}});e(i.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var b=this.tickPositions,c=this.tickPositions.info,d=[],e;for(e=0;e<b.length;e++)this.isInAnyBreak(b[e])||d.push(b[e]);this.tickPositions=
	d;this.tickPositions.info=c}});e(i.prototype,"init",function(a,b,c){if(c.breaks&&c.breaks.length)c.ordinal=!1;a.call(this,b,c);if(this.options.breaks){var d=this;d.isBroken=!0;this.val2lin=function(a){var b=a,c,e;for(e=0;e<d.breakArray.length;e++)if(c=d.breakArray[e],c.to<=a)b-=c.len;else if(c.from>=a)break;else if(d.isInBreak(c,a)){b-=a-c.from;break}return b};this.lin2val=function(a){var b,c;for(c=0;c<d.breakArray.length;c++)if(b=d.breakArray[c],b.from>=a)break;else b.to<a?a+=b.len:d.isInBreak(b,
	a)&&(a+=b.len);return a};this.setExtremes=function(a,b,c,d,e){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange;i.prototype.setExtremes.call(this,a,b,c,d,e)};this.setAxisTranslation=function(a){i.prototype.setAxisTranslation.call(this,a);var b=d.options.breaks,a=[],c=[],e=0,f,g,k=d.userMin||d.min,j=d.userMax||d.max,l,m;for(m in b)g=b[m],f=g.repeat||Infinity,d.isInBreak(g,k)&&(k+=g.to%f-k%f),d.isInBreak(g,j)&&(j-=j%f-g.from%f);for(m in b){g=b[m];
	l=g.from;for(f=g.repeat||Infinity;l-f>k;)l-=f;for(;l<k;)l+=f;for(;l<j;l+=f)a.push({value:l,move:"in"}),a.push({value:l+(g.to-g.from),move:"out",size:g.breakSize})}a.sort(function(a,b){return a.value===b.value?(a.move==="in"?0:1)-(b.move==="in"?0:1):a.value-b.value});b=0;l=k;for(m in a){g=a[m];b+=g.move==="in"?1:-1;if(b===1&&g.move==="in")l=g.value;b===0&&(c.push({from:l,to:g.value,len:g.value-l-(g.size||0)}),e+=g.value-l-(g.size||0))}d.breakArray=c;h(d,"afterBreaks");d.transA*=(j-d.min)/(j-k-e);d.min=
	k;d.max=j}}});e(j.prototype,"generatePoints",function(a){a.apply(this,b(arguments));var c=this.xAxis,d=this.yAxis,e=this.points,f,g=e.length,h=this.options.connectNulls,i;if(c&&d&&(c.options.breaks||d.options.breaks))for(;g--;)if(f=e[g],i=f.y===null&&h===!1,!i&&(c.isInAnyBreak(f.x,!0)||d.isInAnyBreak(f.y,!0)))e.splice(g,1),this.data[g]&&this.data[g].destroyElements()});a.Series.prototype.drawBreaks=function(a,b){var c=this,e=c.points,g,i,j,n;f(b,function(b){g=a.breakArray||[];i=a.isXAxis?a.min:d(c.options.threshold,
	a.min);f(e,function(c){n=d(c["stack"+b.toUpperCase()],c[b]);f(g,function(b){j=!1;if(i<b.from&&n>b.to||i>b.from&&n<b.from)j="pointBreak";else if(i<b.from&&n>b.from&&n<b.to||i>b.from&&n>b.to&&n<b.from)j="pointInBreak";j&&h(a,j,{point:c,brk:b})})})})};e(a.seriesTypes.column.prototype,"drawPoints",c);e(a.Series.prototype,"drawPoints",c)});var ia=Q.prototype,cc=ia.processData,dc=ia.generatePoints,ec=ia.destroy,fc={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L",
	"%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},Xb={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},
	areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},Yb=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],Ua={sum:function(a){var b=a.length,c;if(!b&&a.hasNulls)c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var b=
	a.length,a=Ua.sum(a);typeof a==="number"&&b&&(a/=b);return a},open:function(a){return a.length?a[0]:a.hasNulls?null:t},high:function(a){return a.length?Ea(a):a.hasNulls?null:t},low:function(a){return a.length?Oa(a):a.hasNulls?null:t},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:t},ohlc:function(a,b,c,d){a=Ua.open(a);b=Ua.high(b);c=Ua.low(c);d=Ua.close(d);if(typeof a==="number"||typeof b==="number"||typeof c==="number"||typeof d==="number")return[a,b,c,d]},range:function(a,b){a=
	Ua.low(a);b=Ua.high(b);if(typeof a==="number"||typeof b==="number")return[a,b]}};ia.groupData=function(a,b,c,d){var e=this.data,f=this.options.data,g=[],h=[],i=[],j=a.length,k,l,m=!!b,o=[[],[],[],[]],d=typeof d==="function"?d:Ua[d],p=this.pointArrayMap,n=p&&p.length,q,s=0;for(q=0;q<=j;q++)if(a[q]>=c[0])break;for(;q<=j;q++){for(;c[1]!==t&&a[q]>=c[1]||q===j;)if(k=c.shift(),l=d.apply(0,o),l!==t&&(g.push(k),h.push(l),i.push({start:s,length:o[0].length})),s=q,o[0]=[],o[1]=[],o[2]=[],o[3]=[],q===j)break;
	if(q===j)break;if(p){k=this.cropStart+q;k=e&&e[k]||this.pointClass.prototype.applyOptions.apply({series:this},[f[k]]);var u;for(l=0;l<n;l++)if(u=k[p[l]],typeof u==="number")o[l].push(u);else if(u===null)o[l].hasNulls=!0}else if(k=m?b[q]:null,typeof k==="number")o[0].push(k);else if(k===null)o[0].hasNulls=!0}return[g,h,i]};ia.processData=function(){var a=this.chart,b=this.options.dataGrouping,c=this.allowDG!==!1&&b&&q(b.enabled,a.options._stock),d;this.forceCrop=c;this.groupPixelWidth=null;this.hasProcessed=
	!0;if(cc.apply(this,arguments)!==!1&&c){this.destroyGroupedData();var e=this.processedXData,f=this.processedYData,g=a.plotSizeX,a=this.xAxis,h=a.options.ordinal,i=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(i){d=!0;this.points=null;var j=a.getExtremes(),c=j.min,j=j.max,h=h&&a.getGroupIntervalFactor(c,j,this)||1,g=i*(j-c)/g*h,i=a.getTimeTicks(a.normalizeTimeTickInterval(g,b.units||Yb),Math.min(c,e[0]),Math.max(j,e[e.length-1]),a.options.startOfWeek,e,this.closestPointRange),
	e=ia.groupData.apply(this,[e,f,i,b.approximation]),f=e[0],h=e[1];if(b.smoothed){b=f.length-1;for(f[b]=Math.min(f[b],j);b--&&b>0;)f[b]+=g/2;f[0]=Math.max(f[0],c)}this.currentDataGrouping=i.info;this.closestPointRange=i.info.totalRange;this.groupMap=e[2];if(s(f[0])&&f[0]<a.dataMin){if(a.min===a.dataMin)a.min=f[0];a.dataMin=f[0]}this.processedXData=f;this.processedYData=h}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=d}};ia.destroyGroupedData=function(){var a=this.groupedData;
	n(a||[],function(b,c){b&&(a[c]=b.destroy?b.destroy():null)});this.groupedData=null};ia.generatePoints=function(){dc.apply(this);this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};U(Lb.prototype,"tooltipFooterHeaderFormatter",function(a,b,c){var d=b.series,e=d.tooltipOptions,f=d.options.dataGrouping,g=e.xDateFormat,h,i=d.xAxis;return i&&i.options.type==="datetime"&&f&&ua(b.key)?(a=d.currentDataGrouping,f=f.dateTimeLabelFormats,a?(i=f[a.unitName],a.count===1?g=i[0]:(g=
	i[1],h=i[2])):!g&&f&&(g=this.getXDateFormat(b,e,i)),g=ma(g,b.key),h&&(g+=ma(h,b.key+a.totalRange-1)),La(e[(c?"footer":"header")+"Format"],{point:x(b,{key:g}),series:d})):a.call(this,b,c)});ia.destroy=function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();ec.apply(this)};U(ia,"setOptions",function(a,b){var c=a.call(this,b),d=this.type,e=this.chart.options.plotOptions,f=W[d].dataGrouping;if(Xb[d])f||(f=C(fc,Xb[d])),c.dataGrouping=C(f,e.series&&e.series.dataGrouping,e[d].dataGrouping,
	b.dataGrouping);if(this.chart.options._stock)this.requireSorting=!0;return c});U(I.prototype,"setScale",function(a){a.call(this);n(this.series,function(a){a.hasProcessed=!1})});I.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,c,d=0,e=!1,f;for(c=b;c--;)(f=a[c].options.dataGrouping)&&(d=v(d,f.groupPixelWidth));for(c=b;c--;)if((f=a[c].options.dataGrouping)&&a[c].hasProcessed)if(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/d||b&&f.forced)e=
	!0;return e?d:0};I.prototype.setDataGrouping=function(a,b){var c,b=q(b,!0);a||(a={forced:!1,units:null});if(this instanceof I)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else n(this.chart.options.series,function(b){b.dataGrouping=a},!1);b&&this.chart.redraw()};W.ohlc=C(W.column,{lineWidth:1,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'},
	states:{hover:{lineWidth:3}},threshold:null});ca=la(K.column,{type:"ohlc",pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,a.high,a.low,a.close]},pointValKey:"high",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},upColorProp:"stroke",getAttribs:function(){K.column.prototype.getAttribs.apply(this,arguments);var a=this.options,b=a.states,a=a.upColor||this.color,c=C(this.pointAttr),d=this.upColorProp;c[""][d]=a;c.hover[d]=b.hover.upColor||a;c.select[d]=b.select.upColor||
	a;n(this.points,function(a){if(a.open<a.close&&!a.options.color)a.pointAttr=c})},translate:function(){var a=this.yAxis;K.column.prototype.translate.apply(this);n(this.points,function(b){if(b.open!==null)b.plotOpen=a.translate(b.open,0,1,0,1);if(b.close!==null)b.plotClose=a.translate(b.close,0,1,0,1)})},drawPoints:function(){var a=this,b=a.chart,c,d,e,f,g,h,i,j;n(a.points,function(k){if(k.plotY!==t)i=k.graphic,c=k.pointAttr[k.selected?"selected":""]||a.pointAttr[""],f=c["stroke-width"]%2/2,j=y(k.plotX)-
	f,g=y(k.shapeArgs.width/2),h=["M",j,y(k.yBottom),"L",j,y(k.plotY)],k.open!==null&&(d=y(k.plotOpen)+f,h.push("M",j,d,"L",j-g,d)),k.close!==null&&(e=y(k.plotClose)+f,h.push("M",j,e,"L",j+g,e)),i?i.attr(c).animate({d:h}):k.graphic=b.renderer.path(h).attr(c).add(a.group)})},animate:null});K.ohlc=ca;W.candlestick=C(W.column,{lineColor:"black",lineWidth:1,states:{hover:{lineWidth:2}},tooltip:W.ohlc.tooltip,threshold:null,upColor:"white"});ca=la(ca,{type:"candlestick",pointAttrToOptions:{fill:"color",stroke:"lineColor",
	"stroke-width":"lineWidth"},upColorProp:"fill",getAttribs:function(){K.ohlc.prototype.getAttribs.apply(this,arguments);var a=this.options,b=a.states,c=a.upLineColor||a.lineColor,d=b.hover.upLineColor||c,e=b.select.upLineColor||c;n(this.points,function(a){if(a.open<a.close){if(a.lineColor)a.pointAttr=C(a.pointAttr),c=a.lineColor;a.pointAttr[""].stroke=c;a.pointAttr.hover.stroke=d;a.pointAttr.select.stroke=e}})},drawPoints:function(){var a=this,b=a.chart,c,d=a.pointAttr[""],e,f,g,h,i,j,k,l,m,o,p;n(a.points,
	function(n){m=n.graphic;if(n.plotY!==t)c=n.pointAttr[n.selected?"selected":""]||d,k=c["stroke-width"]%2/2,l=y(n.plotX)-k,e=n.plotOpen,f=n.plotClose,g=Y.min(e,f),h=Y.max(e,f),p=y(n.shapeArgs.width/2),i=y(g)!==y(n.plotY),j=h!==n.yBottom,g=y(g)+k,h=y(h)+k,o=["M",l-p,h,"L",l-p,g,"L",l+p,g,"L",l+p,h,"Z","M",l,g,"L",l,i?y(n.plotY):g,"M",l,h,"L",l,j?y(n.yBottom):h],m?m.attr(c).animate({d:o}):n.graphic=b.renderer.path(o).attr(c).add(a.group).shadow(a.options.shadow)})}});K.candlestick=ca;var wb=ya.prototype.symbols;
	W.flags=C(W.column,{fillColor:"white",lineWidth:1,pointRange:0,shape:"flag",stackDistance:12,states:{hover:{lineColor:"black",fillColor:"#FCFFC5"}},style:{fontSize:"11px",fontWeight:"bold",textAlign:"center"},tooltip:{pointFormat:"{point.text}<br/>"},threshold:null,y:-30});K.flags=la(K.column,{type:"flags",sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:Q.prototype.init,pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth",
	r:"radius"},translate:function(){K.column.prototype.translate.apply(this);var a=this.options,b=this.chart,c=this.points,d=c.length-1,e,f,g=a.onSeries;e=g&&b.get(g);var a=a.onKey||"y",g=e&&e.options.step,h=e&&e.points,i=h&&h.length,j=this.xAxis,k=j.getExtremes(),l,m,o;if(e&&e.visible&&i){e=e.currentDataGrouping;m=h[i-1].x+(e?e.totalRange:0);c.sort(function(a,b){return a.x-b.x});for(a="plot"+a[0].toUpperCase()+a.substr(1);i--&&c[d];)if(e=c[d],l=h[i],l.x<=e.x&&l[a]!==void 0){if(e.x<=m)e.plotY=l[a],l.x<
	e.x&&!g&&(o=h[i+1])&&o[a]!==t&&(e.plotY+=(e.x-l.x)/(o.x-l.x)*(o[a]-l[a]));d--;i++;if(d<0)break}}n(c,function(a,d){var e;if(a.plotY===t)a.x>=k.min&&a.x<=k.max?a.plotY=b.chartHeight-j.bottom-(j.opposite?j.height:0)+j.offset-b.plotTop:a.shapeArgs={};if((f=c[d-1])&&f.plotX===a.plotX){if(f.stackIndex===t)f.stackIndex=0;e=f.stackIndex+1}a.stackIndex=e})},drawPoints:function(){var a,b=this.pointAttr[""],c=this.points,d=this.chart,e=d.renderer,f,g,h=this.options,i=h.y,j,k,l,m,o,n,r=this.yAxis;for(k=c.length;k--;)if(l=
	c[k],a=l.plotX>this.xAxis.len,f=l.plotX,f>0&&(f-=q(l.lineWidth,h.lineWidth)%2),m=l.stackIndex,j=l.options.shape||h.shape,g=l.plotY,g!==t&&(g=l.plotY+i-(m!==t&&m*h.stackDistance)),o=m?t:l.plotX,n=m?t:l.plotY,m=l.graphic,g!==t&&f>=0&&!a)a=l.pointAttr[l.selected?"select":""]||b,m?m.attr({x:f,y:g,r:a.r,anchorX:o,anchorY:n}):l.graphic=e.label(l.options.title||h.title||"A",f,g,j,o,n,h.useHTML).css(C(h.style,l.style)).attr(a).attr({align:j==="flag"?"left":"center",width:h.width,height:h.height}).add(this.markerGroup).shadow(h.shadow),
	l.tooltipPos=d.inverted?[r.len+r.pos-d.plotLeft-g,this.xAxis.len-f]:[f,g];else if(m)l.graphic=m.destroy()},drawTracker:function(){var a=this.points;nb.drawTrackerPoint.apply(this);n(a,function(b){var c=b.graphic;c&&D(c.element,"mouseover",function(){if(b.stackIndex>0&&!b.raised)b._y=c.y,c.attr({y:b._y-8}),b.raised=!0;n(a,function(a){if(a!==b&&a.raised&&a.graphic)a.graphic.attr({y:a._y}),a.raised=!1})})})},animate:ra,buildKDTree:ra,setClip:ra});wb.flag=function(a,b,c,d,e){return["M",e&&e.anchorX||
	a,e&&e.anchorY||b,"L",a,b+d,a,b,a+c,b,a+c,b+d,a,b+d,"Z"]};n(["circle","square"],function(a){wb[a+"pin"]=function(b,c,d,e,f){var g=f&&f.anchorX,f=f&&f.anchorY;a==="circle"&&e>d&&(b-=y((e-d)/2),d=e);b=wb[a](b,c,d,e);g&&f&&b.push("M",g,c>f?c:c+e,"L",g,f);return b}});Ya===z.VMLRenderer&&n(["flag","circlepin","squarepin"],function(a){mb.prototype.symbols[a]=wb[a]});var ca=[].concat(Yb),xb=function(a){var b=Sa(arguments,function(a){return typeof a==="number"});if(b.length)return Math[a].apply(0,b)};ca[4]=
	["day",[1,2,3,4]];ca[5]=["week",[1,2,3]];x(N,{navigator:{handles:{backgroundColor:"#ebe7e8",borderColor:"#b2b1b6"},height:40,margin:25,maskFill:"rgba(128,179,236,0.3)",maskInside:!0,outlineColor:"#b2b1b6",outlineWidth:1,series:{type:K.areaspline===t?"line":"areaspline",color:"#4572A7",compare:null,fillOpacity:0.05,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:ca},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",lineColor:null,lineWidth:1,marker:{enabled:!1},
	pointRange:0,shadow:!1,threshold:null},xAxis:{tickWidth:0,lineWidth:0,gridLineColor:"#EEE",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#888"},x:3,y:-4},crosshair:!1},yAxis:{gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:0.1,maxPadding:0.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickWidth:0}},scrollbar:{height:kb?20:14,barBackgroundColor:"#bfc8d1",barBorderRadius:0,barBorderWidth:1,barBorderColor:"#bfc8d1",buttonArrowColor:"#666",buttonBackgroundColor:"#ebe7e8",
	buttonBorderColor:"#bbb",buttonBorderRadius:0,buttonBorderWidth:1,minWidth:6,rifleColor:"#666",trackBackgroundColor:"#eeeeee",trackBorderColor:"#eeeeee",trackBorderWidth:1,liveRedraw:ja&&!kb}});Hb.prototype={drawHandle:function(a,b){var c=this.chart,d=c.renderer,e=this.elementsToDestroy,f=this.handles,g=this.navigatorOptions.handles,g={fill:g.backgroundColor,stroke:g.borderColor,"stroke-width":1},h;this.rendered||(f[b]=d.g("navigator-handle-"+["left","right"][b]).css({cursor:"ew-resize"}).attr({zIndex:10-
	b}).add(),h=d.rect(-4.5,0,9,16,0,1).attr(g).add(f[b]),e.push(h),h=d.path(["M",-1.5,4,"L",-1.5,12,"M",0.5,4,"L",0.5,12]).attr(g).add(f[b]),e.push(h));f[b][c.isResizing?"animate":"attr"]({translateX:this.scrollerLeft+this.scrollbarHeight+parseInt(a,10),translateY:this.top+this.height/2-8})},drawScrollbarButton:function(a){var b=this.chart.renderer,c=this.elementsToDestroy,d=this.scrollbarButtons,e=this.scrollbarHeight,f=this.scrollbarOptions,g;this.rendered||(d[a]=b.g().add(this.scrollbarGroup),g=b.rect(-0.5,
	-0.5,e+1,e+1,f.buttonBorderRadius,f.buttonBorderWidth).attr({stroke:f.buttonBorderColor,"stroke-width":f.buttonBorderWidth,fill:f.buttonBackgroundColor}).add(d[a]),c.push(g),g=b.path(["M",e/2+(a?-1:1),e/2-3,"L",e/2+(a?-1:1),e/2+3,e/2+(a?2:-2),e/2]).attr({fill:f.buttonArrowColor}).add(d[a]),c.push(g));a&&d[a].attr({translateX:this.scrollerWidth-e})},render:function(a,b,c,d){var e=this.chart,f=e.renderer,g,h,i,j,k=this.scrollbarGroup,l=this.navigatorGroup,m=this.scrollbar,l=this.xAxis,o=this.scrollbarTrack,
	n=this.scrollbarHeight,r=this.scrollbarEnabled,A=this.navigatorOptions,t=this.scrollbarOptions,u=t.minWidth,w=this.height,x=this.top,z=this.navigatorEnabled,C=A.outlineWidth,B=C/2,D=0,G=this.outlineHeight,I=t.barBorderRadius,H=t.barBorderWidth,F=x+B,J;if(s(a)&&!isNaN(a)&&s(b)&&!(isNaN(b)||this.hasDragged&&!s(c))){this.navigatorLeft=g=q(l.left,e.plotLeft+n);this.navigatorWidth=h=q(l.len,e.plotWidth-2*n);this.scrollerLeft=i=g-n;this.scrollerWidth=j=j=h+2*n;l.getExtremes&&(J=this.getUnionExtremes(!0))&&
	(J.dataMin!==l.min||J.dataMax!==l.max)&&l.setExtremes(J.dataMin,J.dataMax,!0,!1);c=q(c,l.translate(a));d=q(d,l.translate(b));if(isNaN(c)||S(c)===Infinity)c=0,d=j;if(!(l.translate(d,!0)-l.translate(c,!0)<e.xAxis[0].minRange)){this.zoomedMax=E(v(c,d,0),h);this.zoomedMin=E(v(this.fixedWidth?this.zoomedMax-this.fixedWidth:E(c,d),0),h);this.range=this.zoomedMax-this.zoomedMin;c=y(this.zoomedMax);b=y(this.zoomedMin);a=c-b;if(!this.rendered){if(z)this.navigatorGroup=l=f.g("navigator").attr({zIndex:3}).add(),
	this.leftShade=f.rect().attr({fill:A.maskFill}).add(l),A.maskInside?this.leftShade.css({cursor:"ew-resize"}):this.rightShade=f.rect().attr({fill:A.maskFill}).add(l),this.outline=f.path().attr({"stroke-width":C,stroke:A.outlineColor}).add(l);if(r)this.scrollbarGroup=k=f.g("scrollbar").add(),m=t.trackBorderWidth,this.scrollbarTrack=o=f.rect().attr({x:0,y:-m%2/2,fill:t.trackBackgroundColor,stroke:t.trackBorderColor,"stroke-width":m,r:t.trackBorderRadius||0,height:n}).add(k),this.scrollbar=m=f.rect().attr({y:-H%
	2/2,height:n,fill:t.barBackgroundColor,stroke:t.barBorderColor,"stroke-width":H,r:I}).add(k),this.scrollbarRifles=f.path().attr({stroke:t.rifleColor,"stroke-width":1}).add(k)}e=e.isResizing?"animate":"attr";if(z){this.leftShade[e](A.maskInside?{x:g+b,y:x,width:c-b,height:w}:{x:g,y:x,width:b,height:w});if(this.rightShade)this.rightShade[e]({x:g+c,y:x,width:h-c,height:w});this.outline[e]({d:["M",i,F,"L",g+b-B,F,g+b-B,F+G,"L",g+c-B,F+G,"L",g+c-B,F,i+j,F].concat(A.maskInside?["M",g+b+B,F,"L",g+c-B,F]:
	[])});this.drawHandle(b+B,0);this.drawHandle(c+B,1)}if(r&&k)this.drawScrollbarButton(0),this.drawScrollbarButton(1),k[e]({translateX:i,translateY:y(F+w)}),o[e]({width:j}),g=n+b,h=a-H,h<u&&(D=(u-h)/2,h=u,g-=D),this.scrollbarPad=D,m[e]({x:V(g)+H%2/2,width:h}),u=n+b+a/2-0.5,this.scrollbarRifles.attr({visibility:a>12?"visible":"hidden"})[e]({d:["M",u-3,n/4,"L",u-3,2*n/3,"M",u,n/4,"L",u,2*n/3,"M",u+3,n/4,"L",u+3,2*n/3]});this.scrollbarPad=D;this.rendered=!0}}},addEvents:function(){var a=this.chart.container,
	b=this.mouseDownHandler,c=this.mouseMoveHandler,d=this.mouseUpHandler,e;e=[[a,"mousedown",b],[a,"mousemove",c],[B,"mouseup",d]];db&&e.push([a,"touchstart",b],[a,"touchmove",c],[B,"touchend",d]);n(e,function(a){D.apply(null,a)});this._events=e},removeEvents:function(){n(this._events,function(a){T.apply(null,a)});this._events=t;this.navigatorEnabled&&this.baseSeries&&T(this.baseSeries,"updatedData",this.updatedDataHandler)},init:function(){var a=this,b=a.chart,c,d,e=a.scrollbarHeight,f=a.navigatorOptions,
	g=a.height,h=a.top,i,j=a.baseSeries;a.mouseDownHandler=function(d){var d=b.pointer.normalize(d),e=a.zoomedMin,f=a.zoomedMax,h=a.top,j=a.scrollbarHeight,k=a.scrollerLeft,l=a.scrollerWidth,n=a.navigatorLeft,q=a.navigatorWidth,s=a.scrollbarPad,t=a.range,v=d.chartX,x=d.chartY,d=b.xAxis[0],y,z=kb?10:7;if(x>h&&x<h+g+j)if((h=!a.scrollbarEnabled||x<h+g)&&Y.abs(v-e-n)<z)a.grabbedLeft=!0,a.otherHandlePos=f,a.fixedExtreme=d.max,b.fixedRange=null;else if(h&&Y.abs(v-f-n)<z)a.grabbedRight=!0,a.otherHandlePos=e,
	a.fixedExtreme=d.min,b.fixedRange=null;else if(v>n+e-s&&v<n+f+s)a.grabbedCenter=v,a.fixedWidth=t,i=v-e;else if(v>k&&v<k+l){f=h?v-n-t/2:v<n?e-t*0.2:v>k+l-j?e+t*0.2:v<n+e?e-t:f;if(f<0)f=0;else if(f+t>=q)f=q-t,y=a.getUnionExtremes().dataMax;if(f!==e)a.fixedWidth=t,e=c.toFixedRange(f,f+t,null,y),d.setExtremes(e.min,e.max,!0,!1,{trigger:"navigator"})}};a.mouseMoveHandler=function(c){var d=a.scrollbarHeight,e=a.navigatorLeft,f=a.navigatorWidth,g=a.scrollerLeft,h=a.scrollerWidth,j=a.range,k,l;if(!c.touches||
	c.touches[0].pageX!==0)c=b.pointer.normalize(c),k=c.chartX,k<e?k=e:k>g+h-d&&(k=g+h-d),a.grabbedLeft?(l=!0,a.render(0,0,k-e,a.otherHandlePos)):a.grabbedRight?(l=!0,a.render(0,0,a.otherHandlePos,k-e)):a.grabbedCenter&&(l=!0,k<i?k=i:k>f+i-j&&(k=f+i-j),a.render(0,0,k-i,k-i+j)),l&&a.scrollbarOptions.liveRedraw&&setTimeout(function(){a.mouseUpHandler(c)},0),a.hasDragged=l};a.mouseUpHandler=function(d){var e,f;if(a.hasDragged){if(a.zoomedMin===a.otherHandlePos)e=a.fixedExtreme;else if(a.zoomedMax===a.otherHandlePos)f=
	a.fixedExtreme;if(a.zoomedMax===a.navigatorWidth)f=a.getUnionExtremes().dataMax;e=c.toFixedRange(a.zoomedMin,a.zoomedMax,e,f);s(e.min)&&b.xAxis[0].setExtremes(e.min,e.max,!0,!1,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:d})}if(d.type!=="mousemove")a.grabbedLeft=a.grabbedRight=a.grabbedCenter=a.fixedWidth=a.fixedExtreme=a.otherHandlePos=a.hasDragged=i=null};var k=b.xAxis.length,l=b.yAxis.length;b.extraBottomMargin=a.outlineHeight+f.margin;a.navigatorEnabled?(a.xAxis=c=new I(b,C({breaks:j&&
	j.xAxis.options.breaks,ordinal:j&&j.xAxis.options.ordinal},f.xAxis,{id:"navigator-x-axis",isX:!0,type:"datetime",index:k,height:g,offset:0,offsetLeft:e,offsetRight:-e,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1})),a.yAxis=d=new I(b,C(f.yAxis,{id:"navigator-y-axis",alignTicks:!1,height:g,offset:0,index:l,zoomEnabled:!1})),j||f.series.data?a.addBaseSeries():b.series.length===0&&U(b,"redraw",function(c,d){if(b.series.length>0&&!a.series)a.setBaseSeries(),
	b.redraw=c;c.call(b,d)})):a.xAxis=c={translate:function(a,c){var d=b.xAxis[0],f=d.getExtremes(),g=b.plotWidth-2*e,h=xb("min",d.options.min,f.dataMin),d=xb("max",d.options.max,f.dataMax)-h;return c?a*d/g+h:g*(a-h)/d},toFixedRange:I.prototype.toFixedRange};U(b,"getMargins",function(b){var e=this.legend,f=e.options;b.apply(this,[].slice.call(arguments,1));a.top=h=a.navigatorOptions.top||this.chartHeight-a.height-a.scrollbarHeight-this.spacing[2]-(f.verticalAlign==="bottom"&&f.enabled&&!f.floating?e.legendHeight+
	q(f.margin,10):0);if(c&&d)c.options.top=d.options.top=h,c.setAxisSize(),d.setAxisSize()});a.addEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;if(!a||b.dataMin!==null)f={dataMin:q(d&&d.min,xb("min",e.min,b.dataMin,c.dataMin)),dataMax:q(d&&d.max,xb("max",e.max,b.dataMax,c.dataMax))};return f},setBaseSeries:function(a){var b=this.chart,a=a||b.options.navigator.baseSeries;this.series&&this.series.remove();this.baseSeries=b.series[a]||typeof a===
	"string"&&b.get(a)||b.series[0];this.xAxis&&this.addBaseSeries()},addBaseSeries:function(){var a=this.baseSeries,b=a?a.options:{},c=b.data,d=this.navigatorOptions.series,e;e=d.data;this.hasNavigatorData=!!e;b=C(b,d,{enableMouseTracking:!1,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",name:"Navigator",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0});b.data=e||c.slice(0);this.series=this.chart.initSeries(b);if(a&&this.navigatorOptions.adaptToUpdatedData!==!1)D(a,"updatedData",
	this.updatedDataHandler),a.userOptions.events=x(a.userOptions.event,{updatedData:this.updatedDataHandler})},updatedDataHandler:function(){var a=this.chart.scroller,b=a.baseSeries,c=b.xAxis,d=c.getExtremes(),e=d.min,f=d.max,g=d.dataMin,d=d.dataMax,h=f-e,i,j,k,l,m,o=a.series;i=o.xData;var n=!!c.setExtremes;j=f>=i[i.length-1]-(this.closestPointRange||0);i=e<=g;if(!a.hasNavigatorData)o.options.pointStart=b.xData[0],o.setData(b.options.data,!1),m=!0;i&&(l=g,k=l+h);j&&(k=d,i||(l=v(k-h,o.xData[0])));n&&
	(i||j)?isNaN(l)||c.setExtremes(l,k,!0,!1,{trigger:"updatedData"}):(m&&this.chart.redraw(!1),a.render(v(e,g),E(f,d)))},destroy:function(){this.removeEvents();n([this.xAxis,this.yAxis,this.leftShade,this.rightShade,this.outline,this.scrollbarTrack,this.scrollbarRifles,this.scrollbarGroup,this.scrollbar],function(a){a&&a.destroy&&a.destroy()});this.xAxis=this.yAxis=this.leftShade=this.rightShade=this.outline=this.scrollbarTrack=this.scrollbarRifles=this.scrollbarGroup=this.scrollbar=null;n([this.scrollbarButtons,
	this.handles,this.elementsToDestroy],function(a){Pa(a)})}};z.Scroller=Hb;U(I.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,g=e.navigator,e=e.rangeSelector,h;if(this.isXAxis&&(g&&g.enabled||e&&e.enabled))if(f==="x")d.resetZoomButton="blocked";else if(f==="y")h=!1;else if(f==="xy")d=this.previousZoom,s(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom);return h!==t?h:a.call(this,b,c)});U(Ca.prototype,"init",function(a,b,c){D(this,
	"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=new Hb(this)});a.call(this,b,c)});U(Q.prototype,"addPoint",function(a,b,c,d,e){var f=this.options.turboThreshold;f&&this.xData.length>f&&da(b)&&!Ja(b)&&this.chart.scroller&&ga(20,!0);a.call(this,b,c,d,e)});x(N,{rangeSelector:{buttonTheme:{width:28,height:18,fill:"#f7f7f7",padding:2,r:0,"stroke-width":0,style:{color:"#444",cursor:"pointer",fontWeight:"normal"},zIndex:7,states:{hover:{fill:"#e7e7e7"},
	select:{fill:"#e7f0f9",style:{color:"black",fontWeight:"bold"}}}},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666"}}});N.lang=C(N.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});Ib.prototype={clickButton:function(a,b){var c=this,d=c.selected,e=c.chart,f=c.buttons,g=c.buttonOptions[a],h=e.xAxis[0],i=e.scroller&&e.scroller.getUnionExtremes()||h||{},j=i.dataMin,k=i.dataMax,l,m=h&&y(E(h.max,q(k,h.max))),o=g.type,p,i=g._range,r,s,x,u=g.dataGrouping;if(!(j===
	null||k===null||a===c.selected)){e.fixedRange=i;if(u)this.forcedDataGrouping=!0,I.prototype.setDataGrouping.call(h||{chart:this.chart},u,!1);if(o==="month"||o==="year")if(h){if(o={range:g,max:m,dataMin:j,dataMax:k},l=h.minFromRange.call(o),typeof o.newMax==="number")m=o.newMax}else i=g;else if(i)l=v(m-i,j),m=E(l+i,k);else if(o==="ytd")if(h){if(k===t)j=Number.MAX_VALUE,k=Number.MIN_VALUE,n(e.series,function(a){a=a.xData;j=E(a[0],j);k=v(a[a.length-1],k)}),b=!1;m=new fa(k);l=m.getFullYear();l=r=v(j||
	0,fa.UTC(l,0,1));m=m.getTime();m=E(k||m,m)}else{D(e,"beforeRender",function(){c.clickButton(a)});return}else o==="all"&&h&&(l=j,m=k);f[d]&&f[d].setState(0);if(f[a])f[a].setState(2),c.lastSelected=a;h?(h.setExtremes(l,m,q(b,1),0,{trigger:"rangeSelectorButton",rangeSelectorButton:g}),c.setSelected(a)):(p=e.options.xAxis[0],x=p.range,p.range=i,s=p.min,p.min=r,c.setSelected(a),D(e,"load",function(){p.range=x;p.min=s}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",
	count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,d=c.buttons||[].concat(b.defaultButtons),e=c.selected,f=b.blurInputs=function(){var a=b.minInput,c=b.maxInput;a&&a.blur&&M(a,"blur");c&&c.blur&&M(c,"blur")};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=d;D(a.container,"mousedown",f);D(a,"resize",f);
	n(d,b.computeButtonRange);e!==t&&d[e]&&this.clickButton(e,!1);D(a,"load",function(){D(a.xAxis[0],"setExtremes",function(c){this.max-this.min!==a.fixedRange&&c.trigger!=="rangeSelectorButton"&&c.trigger!=="updatedData"&&b.forcedDataGrouping&&this.setDataGrouping(!1,!1)});D(a.xAxis[0],"afterSetExtremes",function(){b.updateButtonStates(!0)})})},updateButtonStates:function(a){var b=this,c=this.chart,d=c.xAxis[0],e=c.scroller&&c.scroller.getUnionExtremes()||d,f=e.dataMin,g=e.dataMax,h=b.selected,i=b.options.allButtonsEnabled,
	j=b.buttons;a&&c.fixedRange!==y(d.max-d.min)&&(j[h]&&j[h].setState(0),b.setSelected(null));n(b.buttonOptions,function(a,e){var m=y(d.max-d.min),o=a._range,n=a.type,q=a.count||1,s=o>g-f,t=o<d.minRange,u=a.type==="all"&&d.max-d.min>=g-f&&j[e].state!==2,w=a.type==="ytd"&&ma("%Y",f)===ma("%Y",g),v=c.renderer.forExport&&e===h,o=o===m,x=!d.hasVisibleSeries;if((n==="month"||n==="year")&&m>={month:28,year:365}[n]*864E5*q&&m<={month:31,year:366}[n]*864E5*q)o=!0;v||o&&e!==h&&e===b.lastSelected?(b.setSelected(e),
	j[e].setState(2)):!i&&(s||t||u||w||x)?j[e].setState(3):j[e].state===3&&j[e].setState(0)})},computeButtonRange:function(a){var b=a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if(b==="month"||b==="year")a._range={month:30,year:365}[b]*864E5*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector;if(s(b))this[a+"Input"].HCTime=b;this[a+"Input"].value=ma(c.inputEditDateFormat||"%Y-%m-%d",this[a+"Input"].HCTime);this[a+
	"DateBox"].attr({text:ma(c.inputDateFormat||"%b %e, %Y",this[a+"Input"].HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];F(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){F(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function b(){var a=j.value,b=(g.inputDateParser||fa.parse)(a),e=d.xAxis[0],f=e.dataMin,h=e.dataMax;
	if(b!==j.previousValue)j.previousValue=b,isNaN(b)&&(b=a.split("-"),b=fa.UTC(G(b[0]),G(b[1])-1,G(b[2]))),isNaN(b)||(N.global.useUTC||(b+=(new fa).getTimezoneOffset()*6E4),i?b>c.maxInput.HCTime?b=t:b<f&&(b=f):b<c.minInput.HCTime?b=t:b>h&&(b=h),b!==t&&d.xAxis[0].setExtremes(i?b:e.min,i?e.max:b,t,t,{trigger:"rangeSelectorInput"}))}var c=this,d=c.chart,e=d.renderer.style,f=d.renderer,g=d.options.rangeSelector,h=c.div,i=a==="min",j,k,l=this.inputGroup;this[a+"Label"]=k=f.label(N.lang[i?"rangeSelectorFrom":
	"rangeSelectorTo"],this.inputGroup.offset).attr({padding:2}).css(C(e,g.labelStyle)).add(l);l.offset+=k.width+5;this[a+"DateBox"]=f=f.label("",l.offset).attr({padding:2,width:g.inputBoxWidth||90,height:g.inputBoxHeight||17,stroke:g.inputBoxBorderColor||"silver","stroke-width":1}).css(C({textAlign:"center",color:"#444"},e,g.inputStyle)).on("click",function(){c.showInput(a);c[a+"Input"].focus()}).add(l);l.offset+=f.width+(i?10:0);this[a+"Input"]=j=ea("input",{name:a,className:"highcharts-range-selector",
	type:"text"},x({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:e.fontSize,fontFamily:e.fontFamily,left:"-9em",top:d.plotTop+"px"},g.inputStyle),h);j.onfocus=function(){c.showInput(a)};j.onblur=function(){c.hideInput(a)};j.onchange=b;j.onkeypress=function(a){a.keyCode===13&&b()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=q((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},render:function(a,
	b){var c=this,d=c.chart,e=d.renderer,f=d.container,g=d.options,h=g.exporting&&g.exporting.enabled!==!1&&g.navigation&&g.navigation.buttonOptions,i=g.rangeSelector,j=c.buttons,g=N.lang,k=c.div,k=c.inputGroup,l=i.buttonTheme,m=i.buttonPosition||{},o=i.inputEnabled,p=l&&l.states,r=d.plotLeft,t,v=this.getPosition(),u=c.group,w=c.rendered;if(!w&&(c.group=u=e.g("range-selector-buttons").add(),c.zoomText=e.text(g.rangeSelectorZoom,q(m.x,r),15).css(i.labelStyle).add(u),t=q(m.x,r)+c.zoomText.getBBox().width+
	5,n(c.buttonOptions,function(a,b){j[b]=e.button(a.text,t,0,function(){c.clickButton(b);c.isActive=!0},l,p&&p.hover,p&&p.select,p&&p.disabled).css({textAlign:"center"}).add(u);t+=j[b].width+q(i.buttonSpacing,5);c.selected===b&&j[b].setState(2)}),c.updateButtonStates(),o!==!1))c.div=k=ea("div",null,{position:"relative",height:0,zIndex:1}),f.parentNode.insertBefore(k,f),c.inputGroup=k=e.g("input-group").add(),k.offset=0,c.drawInput("min"),c.drawInput("max");u[w?"animate":"attr"]({translateY:v.buttonTop});
	o!==!1&&(k.align(x({y:v.inputTop,width:k.offset,x:h&&v.inputTop<(h.y||0)+h.height-d.spacing[0]?-40:0},i.inputPosition),!0,d.spacingBox),s(o)||(d=u.getBBox(),k[k.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b));c.rendered=!0},destroy:function(){var a=this.minInput,b=this.maxInput,c=this.chart,d=this.blurInputs,e;T(c.container,"mousedown",d);T(c,"resize",d);Pa(this.buttons);if(a)a.onfocus=a.onblur=a.onchange=null;if(b)b.onfocus=b.onblur=b.onchange=null;
	for(e in this)this[e]&&e!=="chart"&&(this[e].destroy?this[e].destroy():this[e].nodeType&&Va(this[e])),this[e]=null}};I.prototype.toFixedRange=function(a,b,c,d){var e=this.chart&&this.chart.fixedRange,a=q(c,this.translate(a,!0)),b=q(d,this.translate(b,!0)),c=e&&(b-a)/e;c>0.7&&c<1.3&&(d?a=b-e:b=a+e);isNaN(a)&&(a=b=void 0);return{min:a,max:b}};I.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],c,d=this.max,e,f,g=function(a,c){var d=new fa(a);d["set"+b](d["get"+
	b]()+c);return d.getTime()-a};typeof a==="number"?(c=this.max-a,f=a):c=d+g(d,-a.count);e=q(this.dataMin,Number.MIN_VALUE);isNaN(c)&&(c=e);if(c<=e)c=e,f===void 0&&(f=g(c,a.count)),this.newMax=E(c+f,this.dataMax);isNaN(d)&&(c=void 0);return c};U(Ca.prototype,"init",function(a,b,c){D(this,"init",function(){if(this.options.rangeSelector.enabled)this.rangeSelector=new Ib(this)});a.call(this,b,c)});z.RangeSelector=Ib;Ca.prototype.callbacks.push(function(a){function b(){f=a.xAxis[0].getExtremes();g.render(f.min,
	f.max)}function c(){f=a.xAxis[0].getExtremes();isNaN(f.min)||h.render(f.min,f.max)}function d(a){a.triggerOp!=="navigator-drag"&&g.render(a.min,a.max)}function e(a){h.render(a.min,a.max)}var f,g=a.scroller,h=a.rangeSelector;g&&(D(a.xAxis[0],"afterSetExtremes",d),U(a,"drawChartBox",function(a){var c=this.isDirtyBox;a.call(this);c&&b()}),b());h&&(D(a.xAxis[0],"afterSetExtremes",e),D(a,"resize",c),c());D(a,"destroy",function(){g&&T(a.xAxis[0],"afterSetExtremes",d);h&&(T(a,"resize",c),T(a.xAxis[0],"afterSetExtremes",
	e))})});z.StockChart=z.stockChart=function(a,b,c){var d=Da(a)||a.nodeName,e=arguments[d?1:0],f=e.series,g,h=q(e.navigator&&e.navigator.enabled,!0)?{startOnTick:!1,endOnTick:!1}:null,i={marker:{enabled:!1,radius:2}},j={shadow:!1,borderWidth:0};e.xAxis=ta(va(e.xAxis||{}),function(a){return C({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},a,{type:"datetime",categories:null},h)});e.yAxis=ta(va(e.yAxis||{}),function(a){g=q(a.opposite,!0);return C({labels:{y:-2},
	opposite:g,showLastLabel:!1,title:{text:null}},a)});e.series=null;e=C({chart:{panning:!0,pinchType:"x"},navigator:{enabled:!0},scrollbar:{enabled:!0},rangeSelector:{enabled:!0},title:{text:null,style:{fontSize:"16px"}},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:i,spline:i,area:i,areaspline:i,arearange:i,areasplinerange:i,column:j,columnrange:j,candlestick:j,ohlc:j}},e,{_stock:!0,chart:{inverted:!1}});e.series=f;return d?new Ca(a,e,c):new Ca(e,b)};U(Za.prototype,"init",
	function(a,b,c){var d=c.chart.pinchType||"";a.call(this,b,c);this.pinchX=this.pinchHor=d.indexOf("x")!==-1;this.pinchY=this.pinchVert=d.indexOf("y")!==-1;this.hasZoom=this.hasZoom||this.pinchHor||this.pinchVert});U(I.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;if(this.chart.options._stock&&this.coll==="yAxis"&&(c=c.top+","+c.height,!b[c]&&d.enabled)){if(d.x===15)d.x=0;if(d.align===void 0)d.align="right";b[c]=1;return"right"}return a.call(this,
	[].slice.call(arguments,1))});U(I.prototype,"getPlotLinePath",function(a,b,c,d,e,f){var g=this,h=this.isLinked&&!this.series?this.linkedParent.series:this.series,i=g.chart,j=i.renderer,k=g.left,l=g.top,m,o,p,r,t=[],x=[],u,w;if(g.coll==="colorAxis")return a.apply(this,[].slice.call(arguments,1));x=g.isXAxis?s(g.options.yAxis)?[i.yAxis[g.options.yAxis]]:ta(h,function(a){return a.yAxis}):s(g.options.xAxis)?[i.xAxis[g.options.xAxis]]:ta(h,function(a){return a.xAxis});n(g.isXAxis?i.yAxis:i.xAxis,function(a){if(s(a.options.id)?
	a.options.id.indexOf("navigator")===-1:1){var b=a.isXAxis?"yAxis":"xAxis",b=s(a.options[b])?i[b][a.options[b]]:i[b][0];g===b&&x.push(a)}});u=x.length?[]:[g.isXAxis?i.yAxis[0]:i.xAxis[0]];n(x,function(a){sa(a,u)===-1&&u.push(a)});w=q(f,g.translate(b,null,null,d));isNaN(w)||(g.horiz?n(u,function(a){var b;o=a.pos;r=o+a.len;m=p=y(w+g.transB);if(m<k||m>k+g.width)e?m=p=E(v(k,m),k+g.width):b=!0;b||t.push("M",m,o,"L",p,r)}):n(u,function(a){var b;m=a.pos;p=m+a.len;o=r=y(l+g.height-w);if(o<l||o>l+g.height)e?
	o=r=E(v(l,o),g.top+g.height):b=!0;b||t.push("M",m,o,"L",p,r)}));return t.length>0?j.crispPolyLine(t,c||1):null});I.prototype.getPlotBandPath=function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,!0),e=[],f;if(d&&c&&d.toString()!==c.toString())for(f=0;f<d.length;f+=6)e.push("M",d[f+1],d[f+2],"L",d[f+4],d[f+5],c[f+4],c[f+5],c[f+1],c[f+2]);else e=null;return e};ya.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=
	y(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=y(a[c+2])+b%2/2);return a};if(Ya===z.VMLRenderer)mb.prototype.crispPolyLine=ya.prototype.crispPolyLine;U(I.prototype,"hideCrosshair",function(a,b){a.call(this,b);if(this.crossLabel)this.crossLabel=this.crossLabel.hide()});U(I.prototype,"drawCrosshair",function(a,b,c){var d,e;a.call(this,b,c);if(s(this.crosshair.label)&&this.crosshair.label.enabled){var a=this.chart,f=this.options.crosshair.label,g=this.horiz,h=this.opposite,i=this.left,j=this.top,k=
	this.crossLabel,l,m=f.format,n="",p=this.options.tickPosition==="inside",r=this.crosshair.snap!==!1;l=g?"center":h?this.labelAlign==="right"?"right":"left":this.labelAlign==="left"?"left":"center";if(!k)k=this.crossLabel=a.renderer.label(null,null,null,f.shape||"callout").attr({align:f.align||l,zIndex:12,fill:f.backgroundColor||this.series[0]&&this.series[0].color||"gray",padding:q(f.padding,8),stroke:f.borderColor||"","stroke-width":f.borderWidth||0,r:q(f.borderRadius,3)}).css(x({color:"white",fontWeight:"normal",
	fontSize:"11px",textAlign:"center"},f.style)).add();g?(l=r?c.plotX+i:b.chartX,j+=h?0:this.height):(l=h?this.width+i:0,j=r?c.plotY+j:b.chartY);!m&&!f.formatter&&(this.isDatetimeAxis&&(n="%b %d, %Y"),m="{value"+(n?":"+n:"")+"}");b=r?c[this.isXAxis?"x":"y"]:this.toValue(g?b.chartX:b.chartY);k.attr({text:m?La(m,{value:b}):f.formatter.call(this,b),anchorX:g?l:this.opposite?0:a.chartWidth,anchorY:g?this.opposite?a.chartHeight:0:j,x:l,y:j,visibility:"visible"});b=k.getBBox();if(g){if(p&&!h||!p&&h)j=k.y-
	b.height}else j=k.y-b.height/2;g?(d=i-b.x,e=i+this.width-b.x):(d=this.labelAlign==="left"?i:0,e=this.labelAlign==="right"?i+this.width:a.chartWidth);k.translateX<d&&(l+=d-k.translateX);k.translateX+b.width>=e&&(l-=k.translateX+b.width-e);k.attr({x:l,y:j,visibility:"visible"})}});var gc=ia.init,hc=ia.processData,ic=Ha.prototype.tooltipFormatter;ia.init=function(){gc.apply(this,arguments);this.setCompare(this.options.compare)};ia.setCompare=function(a){this.modifyValue=a==="value"||a==="percent"?function(b,
	c){var d=this.compareValue;if(b!==t&&(b=a==="value"?b-d:b=100*(b/d)-100,c))c.change=b;return b}:null;if(this.chart.hasRendered)this.isDirty=!0};ia.processData=function(){var a,b=-1,c,d,e,f;hc.apply(this,arguments);if(this.xAxis&&this.processedYData){c=this.processedXData;d=this.processedYData;e=d.length;this.pointArrayMap&&(b=sa(this.pointValKey||"y",this.pointArrayMap));for(a=0;a<e;a++)if(f=b>-1?d[a][b]:d[a],typeof f==="number"&&c[a]>=this.xAxis.min&&f!==0){this.compareValue=f;break}}};U(ia,"getExtremes",
	function(a){var b;a.apply(this,[].slice.call(arguments,1));if(this.modifyValue)b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=Oa(b),this.dataMax=Ea(b)});I.prototype.setCompare=function(a,b){this.isXAxis||(n(this.series,function(b){b.setCompare(a)}),q(b,!0)&&this.chart.redraw())};Ha.prototype.tooltipFormatter=function(a){a=a.replace("{point.change}",(this.change>0?"+":"")+z.numberFormat(this.change,q(this.series.tooltipOptions.changeDecimals,2)));return ic.apply(this,
	[a])};U(Q.prototype,"render",function(a){if(this.chart.options._stock&&this.xAxis)!this.clipBox&&this.animate?(this.clipBox=C(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]&&(Ta(this.chart[this.sharedClipKey]),this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}));a.call(this)});x(z,{Color:wa,Point:Ha,Tick:cb,Renderer:Ya,SVGElement:Z,SVGRenderer:ya,arrayMin:Oa,arrayMax:Ea,charts:$,correctFloat:na,
	dateFormat:ma,error:ga,format:La,pathAnim:void 0,getOptions:function(){return N},hasBidiBug:Zb,isTouchDevice:kb,setOptions:function(a){N=C(!0,N,a);Ob();return N},addEvent:D,removeEvent:T,createElement:ea,discardElement:Va,css:F,each:n,map:ta,merge:C,splat:va,stableSort:ob,extendClass:la,pInt:G,svg:ja,canvas:qa,vml:!ja&&!qa,product:"Highstock",version:"4.2.4"});return z});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reset = __webpack_require__(27);
	
	var _reset2 = _interopRequireDefault(_reset);
	
	var _plotOptions = __webpack_require__(25);
	
	var _plotOptions2 = _interopRequireDefault(_plotOptions);
	
	var _navigator = __webpack_require__(24);
	
	var _navigator2 = _interopRequireDefault(_navigator);
	
	var _rangeSelector = __webpack_require__(26);
	
	var _rangeSelector2 = _interopRequireDefault(_rangeSelector);
	
	var _yAxis = __webpack_require__(30);
	
	var _yAxis2 = _interopRequireDefault(_yAxis);
	
	var _xAxis = __webpack_require__(29);
	
	var _xAxis2 = _interopRequireDefault(_xAxis);
	
	var _seriesLine = __webpack_require__(28);
	
	var _seriesLine2 = _interopRequireDefault(_seriesLine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import events from '../parts/events';
	
	exports.default = function (_ref) {
	    var _ref$pipSize = _ref.pipSize;
	    var pipSize = _ref$pipSize === undefined ? 0 : _ref$pipSize;
	    var rangeChange = _ref.rangeChange;
	    return _extends({}, (0, _reset2.default)(), {
	        plotOptions: (0, _plotOptions2.default)(),
	        navigator: (0, _navigator2.default)(),
	        rangeSelector: (0, _rangeSelector2.default)(),
	        xAxis: (0, _xAxis2.default)({ rangeChange: rangeChange }),
	        yAxis: _extends({}, (0, _yAxis2.default)({ pipSize: pipSize }), {
	            spotIndicator: {
	                enabled: true,
	                pipSize: pipSize
	            }
	        }),
	        series: (0, _seriesLine2.default)({ data: [], pipSize: pipSize })
	    });
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _shallowEqual = __webpack_require__(56);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _areTickArraysEqual = __webpack_require__(50);
	
	var _areTickArraysEqual2 = _interopRequireDefault(_areTickArraysEqual);
	
	var _updateTicks = __webpack_require__(20);
	
	var _updateTicks2 = _interopRequireDefault(_updateTicks);
	
	var _updateContract = __webpack_require__(18);
	
	var _updateContract2 = _interopRequireDefault(_updateContract);
	
	var _updateTradingTimes = __webpack_require__(21);
	
	var _updateTradingTimes2 = _interopRequireDefault(_updateTradingTimes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ticksAreEqual = function ticksAreEqual(prevProps, nextProps) {
	    return prevProps.symbol === nextProps.symbol && (0, _areTickArraysEqual2.default)(prevProps.ticks, nextProps.ticks);
	};
	
	var contractsAreEqual = function contractsAreEqual(prevProps, nextProps) {
	    return (0, _shallowEqual2.default)(prevProps.contract, nextProps.contract) && (0, _shallowEqual2.default)(prevProps.trade, nextProps.trade);
	};
	
	var tradingTimesAreEqual = function tradingTimesAreEqual(prevProps, nextProps) {
	    return (0, _shallowEqual2.default)(nextProps.tradingTimes, prevProps.tradingTimes);
	};
	
	exports.default = function (chart, prevProps, nextProps) {
	    var ticksDiffer = !ticksAreEqual(prevProps, nextProps);
	    var contractsDiffer = !contractsAreEqual(prevProps, nextProps);
	    var tradingTimesDiffer = !tradingTimesAreEqual(prevProps, nextProps);
	
	    if (ticksDiffer) {
	        (0, _updateTicks2.default)(chart, prevProps, nextProps);
	    }
	
	    if (contractsDiffer || ticksDiffer) {
	        var contract = nextProps.contract;
	        var trade = nextProps.trade;
	        var ticks = nextProps.ticks;
	
	        (0, _updateContract2.default)({ chart: chart, contract: contract || trade, ticks: ticks });
	    }
	
	    if (tradingTimesDiffer) {
	        var tradingTimes = nextProps.tradingTimes;
	
	        (0, _updateTradingTimes2.default)({ chart: chart, tradingTimes: tradingTimes });
	    }
	
	    if (nextProps.pipSize && prevProps.pipSize !== nextProps.pipSize) {
	        chart.yAxis[0].update({
	            labels: {
	                formatter: function formatter() {
	                    return this.value.toFixed(nextProps.pipSize);
	                }
	            }
	        });
	        chart.series[0].update({
	            tooltip: {
	                valueDecimals: nextProps.pipSize
	            }
	        });
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _commonPlotBands = __webpack_require__(0);
	
	var _barrierFromContract = __webpack_require__(1);
	
	var _barrierFromContract2 = _interopRequireDefault(_barrierFromContract);
	
	var _barrier2FromContract = __webpack_require__(3);
	
	var _barrier2FromContract2 = _interopRequireDefault(_barrier2FromContract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (contract, lastSpot) {
	    return [(0, _commonPlotBands.lossPlotBand)(0, (0, _barrier2FromContract2.default)(contract, lastSpot)), (0, _commonPlotBands.winPlotBand)((0, _barrierFromContract2.default)(contract, lastSpot), (0, _barrier2FromContract2.default)(contract, lastSpot)), (0, _commonPlotBands.lossPlotBand)((0, _barrierFromContract2.default)(contract, lastSpot), Number.MAX_VALUE)];
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _commonPlotBands = __webpack_require__(0);
	
	var _barrierFromContract = __webpack_require__(1);
	
	var _barrierFromContract2 = _interopRequireDefault(_barrierFromContract);
	
	var _barrier2FromContract = __webpack_require__(3);
	
	var _barrier2FromContract2 = _interopRequireDefault(_barrier2FromContract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (contract, lastSpot) {
	    return [(0, _commonPlotBands.winPlotBand)(0, (0, _barrier2FromContract2.default)(contract, lastSpot)), (0, _commonPlotBands.lossPlotBand)((0, _barrierFromContract2.default)(contract, lastSpot), (0, _barrier2FromContract2.default)(contract, lastSpot)), (0, _commonPlotBands.winPlotBand)((0, _barrierFromContract2.default)(contract, lastSpot), Number.MAX_VALUE)];
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.timePlotLines = undefined;
	
	var _brandColor = __webpack_require__(2);
	
	var _brandColor2 = _interopRequireDefault(_brandColor);
	
	var _vertPlotLine = __webpack_require__(10);
	
	var _vertPlotLine2 = _interopRequireDefault(_vertPlotLine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lineColor = (0, _brandColor2.default)(0.5);
	
	var timePlotLines = exports.timePlotLines = [{ id: 'date_start', name: 'Start Time', position: 'left' }, { id: 'date_expiry', name: 'Time of Expiry', position: 'left' }, { id: 'date_settlement', name: 'Settlement Time', position: 'right' }, { id: 'purchase_time', name: 'Purchase Time', position: 'left' }, { id: 'entry_tick_time', name: 'Entry Spot', position: 'right' }, { id: 'expiry_time', name: 'End Time', position: 'right' }, { id: 'exit_tick_time', name: 'Exit Time', position: 'left' }, { id: 'sell_spot_time', name: 'Sell Spot Time', position: 'right' }, { id: 'sell_time', name: 'Sell Time', position: 'right' }];
	
	exports.default = function (contract) {
	    if (!contract) {
	        return [];
	    }
	
	    return timePlotLines.filter(function (param) {
	        return contract[param.id];
	    }).filter(function (param) {
	        return param.id !== 'purchase_time' || contract.purchase_time !== contract.date_start;
	    }).filter(function (param) {
	        return param.id !== 'exit_tick_time' || contract.exit_tick_time !== contract.date_expiry;
	    }).filter(function (param) {
	        return param.id !== 'expiry_time' || contract.expiry_time < contract.sell_spot_time;
	    }).map(function (param) {
	        return (0, _vertPlotLine2.default)('time-line', contract[param.id], lineColor, param.name, param.position);
	    });
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _brandColor = __webpack_require__(2);
	
	var _brandColor2 = _interopRequireDefault(_brandColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (id, epoch, color, text, position) {
	    return {
	        id: id,
	        value: epoch * 1000,
	        color: (0, _brandColor2.default)(0.5),
	        //    dashStyle: 'longdash',
	        width: 1,
	        label: {
	            text: text,
	            rotation: position === 'left' ? 270 : 90,
	            x: position === 'left' ? -5 : 5,
	            textAlign: position === 'left' ? 'right' : 'left',
	            verticalAlign: 'top',
	            style: {
	                color: (0, _brandColor2.default)(1)
	            }
	        }
	    };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (contract, lastTick) {
	    var barrierEntryName = arguments.length <= 2 || arguments[2] === undefined ? 'barrier' : arguments[2];
	
	    var barrierValue = +contract[barrierEntryName];
	    if (!barrierValue) {
	        return lastTick;
	    }
	    if (contract.barrierType === 'absolute') {
	        return barrierValue;
	    }
	    return barrierValue + (+contract.entry_spot || lastTick);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (ticks) {
	    return ticks && ticks.length > 0 ? ticks[ticks.length - 1].quote : 0;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(13);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _highstock = __webpack_require__(4);
	
	var _highstock2 = _interopRequireDefault(_highstock);
	
	var _BinaryTypes = __webpack_require__(16);
	
	var BinaryTypes = _interopRequireWildcard(_BinaryTypes);
	
	var _initChart = __webpack_require__(5);
	
	var _initChart2 = _interopRequireDefault(_initChart);
	
	var _updateChart = __webpack_require__(6);
	
	var _updateChart2 = _interopRequireDefault(_updateChart);
	
	var _spotIndicator = __webpack_require__(48);
	
	var _spotIndicator2 = _interopRequireDefault(_spotIndicator);
	
	var _theme = __webpack_require__(49);
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import tradeMarker from './plugins/tradeMarker';
	
	
	// workaround for tests to work
	if (Object.keys(_highstock2.default).length > 0) {
	    (0, _spotIndicator2.default)();
	    //    tradeMarker();
	    _highstock2.default.setOptions(_theme2.default);
	}
	
	var BinaryChart = function (_Component) {
	    _inherits(BinaryChart, _Component);
	
	    function BinaryChart() {
	        _classCallCheck(this, BinaryChart);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BinaryChart).apply(this, arguments));
	    }
	
	    _createClass(BinaryChart, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var config = (0, _initChart2.default)(this.props);
	            config.chart.renderTo = this.refs.chart;
	            this.chart = new _highstock2.default.StockChart(config);
	            (0, _updateChart2.default)(this.chart, { ticks: [] }, this.props);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.chart.destroy();
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            (0, _updateChart2.default)(this.chart, this.props, nextProps);
	            return false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', _extends({}, this.props, { ref: 'chart' }));
	        }
	    }]);
	
	    return BinaryChart;
	}(_react.Component);
	
	BinaryChart.propTypes = {
	    symbol: _react.PropTypes.string,
	    ticks: BinaryTypes.tickArray,
	    contract: BinaryTypes.contractOrTrade,
	    rangeChange: _react.PropTypes.func,
	    pipSize: _react.PropTypes.number,
	    trade: BinaryTypes.contractOrTrade,
	    tradintTimes: BinaryTypes.tradingTimes
	};
	BinaryChart.defaultProps = {
	    ticks: []
	};
	exports.default = BinaryChart;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _highstock = __webpack_require__(4);
	
	var _highstock2 = _interopRequireDefault(_highstock);
	
	var _initChart = __webpack_require__(5);
	
	var _initChart2 = _interopRequireDefault(_initChart);
	
	var _updateChart = __webpack_require__(6);
	
	var _updateChart2 = _interopRequireDefault(_updateChart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (renderTo, params) {
	    var config = (0, _initChart2.default)(params);
	    config.chart.renderTo = renderTo;
	    var chart = new _highstock2.default.StockChart(config);
	    (0, _updateChart2.default)(chart, { ticks: [] }, params);
	
	    var currentParams = params;
	    var imperativeUpdate = function imperativeUpdate(newParams) {
	        (0, _updateChart2.default)(chart, currentParams, newParams);
	        currentParams = newParams;
	    };
	
	    return {
	        chart: chart,
	        updateChart: imperativeUpdate
	    };
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tradingTimes = exports.tickArray = exports.contractOrTrade = exports.stringOrNumber = undefined;
	
	var _react = __webpack_require__(13);
	
	var stringOrNumber = exports.stringOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);
	
	var contractOrTrade = exports.contractOrTrade = _react.PropTypes.shape({
	    barrier: stringOrNumber,
	    barrier2: stringOrNumber,
	    barrierType: _react.PropTypes.oneOf(['absolute', 'relative']),
	    contract_type: _react.PropTypes.string,
	    date_expiry: _react.PropTypes.number,
	    date_settlement: _react.PropTypes.number,
	    date_start: _react.PropTypes.number,
	    entry_spot: _react.PropTypes.number,
	    entry_tick_time: _react.PropTypes.number,
	    exit_tick_time: _react.PropTypes.number,
	    expiry_time: _react.PropTypes.number,
	    purchase_time: _react.PropTypes.number,
	    sell_spot_time: _react.PropTypes.number
	});
	
	var tickArray = exports.tickArray = _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    epoch: _react.PropTypes.number.isRequired,
	    quote: _react.PropTypes.number
	}));
	
	var tradingTimes = exports.tradingTimes = _react.PropTypes.shape({
	    open: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    close: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    settlement: _react.PropTypes.string.isRequired
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _plotBands = __webpack_require__(42);
	
	var confs = _interopRequireWildcard(_plotBands);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (contractOrTrade, lastTick) {
	    if (!contractOrTrade) return [];
	    var type = contractOrTrade.contract_type;
	    if (!type) return [];
	    var configFunc = confs[type.toLowerCase() + 'PlotBand'];
	
	    if (!configFunc) throw Error('Not a known type: ' + type);
	    return configFunc(contractOrTrade, lastTick);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _plotBandsForContractAndTrade = __webpack_require__(17);
	
	var _plotBandsForContractAndTrade2 = _interopRequireDefault(_plotBandsForContractAndTrade);
	
	var _dateEntryPlotLines = __webpack_require__(9);
	
	var _dateEntryPlotLines2 = _interopRequireDefault(_dateEntryPlotLines);
	
	var _getLastTickQuote = __webpack_require__(12);
	
	var _getLastTickQuote2 = _interopRequireDefault(_getLastTickQuote);
	
	var _updateZones = __webpack_require__(22);
	
	var _updateZones2 = _interopRequireDefault(_updateZones);
	
	var _updateExtremes = __webpack_require__(19);
	
	var _updateExtremes2 = _interopRequireDefault(_updateExtremes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var replacePlotBands = function replacePlotBands(axis, newPlotBands) {
	    axis.removePlotBand('barrier-band');
	    newPlotBands.forEach(function (band) {
	        return axis.addPlotBand(band);
	    });
	};
	
	var replacePlotLines = function replacePlotLines(axis, newPlotLines) {
	    axis.removePlotLine('time-line');
	    newPlotLines.forEach(function (line) {
	        axis.addPlotLine(line);
	    });
	};
	
	exports.default = function (_ref) {
	    var chart = _ref.chart;
	    var contract = _ref.contract;
	    var ticks = _ref.ticks;
	
	    var lastTick = (0, _getLastTickQuote2.default)(ticks);
	    var newPlotBands = (0, _plotBandsForContractAndTrade2.default)(contract, lastTick);
	    replacePlotBands(chart.yAxis[0], newPlotBands);
	
	    var newPlotLines = (0, _dateEntryPlotLines2.default)(contract);
	    replacePlotLines(chart.xAxis[0], newPlotLines);
	
	    (0, _updateZones2.default)(chart, newPlotLines);
	
	    (0, _updateExtremes2.default)(chart, ticks, contract);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getLastTickQuote = __webpack_require__(12);
	
	var _getLastTickQuote2 = _interopRequireDefault(_getLastTickQuote);
	
	var _barrierFromContract = __webpack_require__(1);
	
	var _barrierFromContract2 = _interopRequireDefault(_barrierFromContract);
	
	var _barrier2FromContract = __webpack_require__(3);
	
	var _barrier2FromContract2 = _interopRequireDefault(_barrier2FromContract);
	
	var _dateEntryPlotLines = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arrayMin = function arrayMin(arr) {
	    return Math.min.apply(Math, arr);
	};
	var arrayMax = function arrayMax(arr) {
	    return Math.max.apply(Math, arr);
	};
	
	var updateExtremesXAxis = function updateExtremesXAxis(axis, ticks, contract) {
	    var timeEntries = _dateEntryPlotLines.timePlotLines.filter(function (x) {
	        return contract[x.id];
	    }).map(function (x) {
	        return contract[x.id] * 1000;
	    });
	
	    if (timeEntries.length === 0) {
	        return;
	    }
	
	    var min = arrayMin(timeEntries) - 1000;
	    var max = arrayMax(timeEntries) + 1000;
	
	    var prevExtremes = axis.getExtremes();
	
	    // console.log(prevExtremes, min, max);
	    if (prevExtremes.min !== min || prevExtremes.max !== max) {
	        axis.setExtremes(min, max);
	    }
	};
	
	var updateExtremesYAxis = function updateExtremesYAxis(axis, ticks, contract) {
	    if (!contract.barrier && !contract.barrier2) {
	        return;
	    }
	
	    var lastTick = (0, _getLastTickQuote2.default)(ticks);
	    var maxBarrier = (0, _barrierFromContract2.default)(contract, lastTick) + 10;
	    var minBarrier = (0, _barrier2FromContract2.default)(contract, lastTick) + 10;
	
	    var prevExtremes = axis.getExtremes();
	    var minExtremes = [0, minBarrier, prevExtremes.dataMin].filter(function (x) {
	        return x;
	    });
	    var min = arrayMin(minExtremes);
	    var maxExtremes = [maxBarrier, prevExtremes.dataMax].filter(function (x) {
	        return x;
	    });
	    var max = arrayMax(maxExtremes);
	
	    // console.log('min', 0, minBarrier, prevExtremes.dataMin);
	    // console.log('max', 0, maxBarrier, prevExtremes.dataMax);
	    // console.log(prevExtremes, min, max);
	    if (prevExtremes.min !== min || prevExtremes.max !== max) {
	        axis.setExtremes(min > 0 ? min : 0, max);
	    }
	};
	
	exports.default = function (chart, ticks, contract) {
	    if (!contract) return;
	
	    updateExtremesXAxis(chart.xAxis[0], ticks, contract);
	    updateExtremesYAxis(chart.yAxis[0], ticks, contract);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _doTicksDifferJustOneEntry = __webpack_require__(52);
	
	var _doTicksDifferJustOneEntry2 = _interopRequireDefault(_doTicksDifferJustOneEntry);
	
	var _tickToData = __webpack_require__(55);
	
	var _tickToData2 = _interopRequireDefault(_tickToData);
	
	var _getLastTick = __webpack_require__(54);
	
	var _getLastTick2 = _interopRequireDefault(_getLastTick);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (chart, prevProps, nextProps) {
	    var oneTickDiff = (0, _doTicksDifferJustOneEntry2.default)(prevProps.ticks, nextProps.ticks);
	
	    if (oneTickDiff) {
	        var lastTick = (0, _getLastTick2.default)(nextProps.ticks);
	        chart.series[0].addPoint((0, _tickToData2.default)(lastTick));
	    } else {
	        chart.series[0].setData(nextProps.ticks.map(_tickToData2.default));
	        chart.redraw();
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tradingTimesToEpochs = exports.strTimePlusDayAsEpoch = undefined;
	
	var _dateToEpoch = __webpack_require__(51);
	
	var _dateToEpoch2 = _interopRequireDefault(_dateToEpoch);
	
	var _vertPlotLine = __webpack_require__(10);
	
	var _vertPlotLine2 = _interopRequireDefault(_vertPlotLine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var strToSeconds = function strToSeconds(timeStr) {
	    var parts = timeStr.split(':');
	    return +parts[0] * 60 * 60 + +parts[1] * 60 + +parts[2];
	};
	
	/**
	 * @param day   [Date]
	 * @param time  [String] -- "hh:mm:ss"
	 */
	var strTimePlusDayAsEpoch = exports.strTimePlusDayAsEpoch = function strTimePlusDayAsEpoch(day, time) {
	    return (0, _dateToEpoch2.default)(day) + strToSeconds(time);
	};
	
	var tradingTimesToEpochs = exports.tradingTimesToEpochs = function tradingTimesToEpochs(day, times) {
	    return !times ? [] : [].concat(_toConsumableArray(times.open), _toConsumableArray(times.close), [times.settlement]).map(function (x) {
	        return strTimePlusDayAsEpoch(day, x);
	    });
	};
	
	var plotLinesBandsForTradingTimes = function plotLinesBandsForTradingTimes(tradingTimes) {
	    return tradingTimesToEpochs(new Date(), tradingTimes).map(function (x) {
	        return (0, _vertPlotLine2.default)('trading-times-line', x, 'red', 'TT', 'left');
	    });
	};
	
	exports.default = function (_ref) {
	    var chart = _ref.chart;
	    var tradingTimes = _ref.tradingTimes;
	
	    var axis = chart.xAxis[0];
	    axis.removePlotLine('trading-times-line');
	    var newPlotLines = plotLinesBandsForTradingTimes(tradingTimes);
	    newPlotLines.forEach(function (x) {
	        return axis.addPlotLine(x);
	    });
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (chart, newPlotLines) {
	    var zones = newPlotLines.length < 2 ? [] : [{
	        value: newPlotLines[0].value,
	        dashStyle: 'dash',
	        fillColor: 'none'
	    }, {
	        value: newPlotLines[newPlotLines.length - 1].value,
	        dashStyle: 'solid'
	    }, {
	        dashStyle: 'dash',
	        fillColor: 'none'
	    }];
	
	    chart.series[0].update({ zones: zones });
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BinaryChart = exports.createChart = undefined;
	
	var _BinaryChart = __webpack_require__(14);
	
	var _BinaryChart2 = _interopRequireDefault(_BinaryChart);
	
	var _NonReactBinaryChart = __webpack_require__(15);
	
	var _NonReactBinaryChart2 = _interopRequireDefault(_NonReactBinaryChart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createChart = exports.createChart = _NonReactBinaryChart2.default;
	var BinaryChart = exports.BinaryChart = _BinaryChart2.default;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return {
	        height: 30,
	        margin: 10
	    };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return {
	        series: {
	            connectNulls: true,
	            marker: {
	                enabled: false
	            }
	        }
	    };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return {
	        buttons: [{
	            type: 'second',
	            count: 15,
	            text: 'TICK'
	        }, {
	            type: 'minute',
	            count: 1,
	            text: '1M'
	        }, {
	            type: 'minute',
	            count: 15,
	            text: '15M'
	        }, {
	            type: 'hour',
	            count: 1,
	            text: '1H'
	        }, {
	            type: 'hour',
	            count: 6,
	            text: '6H'
	        }, {
	            type: 'day',
	            count: 1,
	            text: '1D'
	        }, {
	            type: 'all',
	            count: 1,
	            text: 'MAX'
	        }],
	        allButtonsEnabled: true,
	        selected: 1,
	        inputEnabled: false,
	        labelStyle: { display: 'none' }
	    };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    return {
	        animation: true,
	        exporting: { enabled: false },
	        scrollbar: { enabled: false },
	        credits: { enabled: false },
	        legend: { enabled: false },
	        title: { text: null },
	        chart: {
	            spacingBottom: 0,
	            spacingTop: 0,
	            spacingLeft: 0,
	            spacingRight: 3
	        }
	    };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _brandColor = __webpack_require__(2);
	
	var _brandColor2 = _interopRequireDefault(_brandColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (_ref) {
	    var data = _ref.data;
	    var pipSize = _ref.pipSize;
	    return [{
	        name: 'Spot',
	        type: 'area',
	        data: data,
	        tooltip: {
	            valueDecimals: pipSize,
	            zIndex: 120
	        },
	        fillColor: (0, _brandColor2.default)(0.1),
	        lineWidth: 1.5,
	        fillOpacity: 0.1,
	        threshold: null,
	        zoneAxis: 'x'
	    }];
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (_ref) {
	    var _ref$rangeChange = _ref.rangeChange;
	    var rangeChange = _ref$rangeChange === undefined ? function () {
	        return undefined;
	    } : _ref$rangeChange;
	    return {
	        type: 'datetime',
	        ordinal: false,
	        tickWidth: 0,
	        startOnTick: false,
	        endOnTick: false,
	        events: {
	            setExtremes: function setExtremes(e) {
	                if (e.rangeSelectorButton) {
	                    var _e$rangeSelectorButto = e.rangeSelectorButton;
	                    var count = _e$rangeSelectorButto.count;
	                    var type = _e$rangeSelectorButto.type;
	
	                    rangeChange(count, type);
	                }
	            }
	        }
	    };
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (_ref) {
	    var pipSize = _ref.pipSize;
	    return {
	        // lineWidth: 1,
	        opposite: true,
	        labels: {
	            align: 'left',
	            formatter: function formatter() {
	                return this.value.toFixed(pipSize);
	            }
	        },
	        tickWidth: 0,
	        title: { text: null },
	        floor: 0
	    };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _commonPlotBands = __webpack_require__(0);
	
	// TODO: calculate average of N ticks
	
	exports.default = function (contract) {
	    return [(0, _commonPlotBands.winPlotBand)(0, contract.barrier), (0, _commonPlotBands.lossPlotBand)(contract.barrier, Number.MAX_VALUE)];
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _commonPlotBands = __webpack_require__(0);
	
	// TODO: calculate average of N ticks
	
	exports.default = function (contract) {
	    return [(0, _commonPlotBands.lossPlotBand)(0, contract.barrier), (0, _commonPlotBands.winPlotBand)(contract.barrier, Number.MAX_VALUE)];
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _commonPlotBands = __webpack_require__(0);
	
	var _barrierFromContract = __webpack_require__(1);
	
	var _barrierFromContract2 = _interopRequireDefault(_barrierFromContract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (contract, lastSpot) {
	    return [(0, _commonPlotBands.lossPlotBand)(0, (0, _barrierFromContract2.default)(contract, lastSpot)), (0, _commonPlotBands.winPlotBand)((0, _barrierFromContract2.default)(contract, lastSpot), Number.MAX_VALUE)];
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _upOrDownPlotBand = __webpack_require__(8);
	
	var _upOrDownPlotBand2 = _interopRequireDefault(_upOrDownPlotBand);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _upOrDownPlotBand2.default;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rangePlotBand = __webpack_require__(7);
	
	var _rangePlotBand2 = _interopRequireDefault(_rangePlotBand);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _rangePlotBand2.default;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.upordownPlotBand = exports.spreaduPlotBand = exports.spreaddPlotBand = exports.rangePlotBand = exports.putPlotBand = exports.onetouchPlotBand = exports.notouchPlotBand = exports.expiryrangePlotBand = exports.expirymissPlotBand = exports.digitunderPlotBand = exports.digitoverPlotBand = exports.digitoddPlotBand = exports.digitmatchPlotBand = exports.digitevenPlotBand = exports.digitdiffPlotBand = exports.callPlotBand = exports.asianuPlotBand = exports.asiandPlotBand = undefined;
	
	var _asiandPlotBand2 = __webpack_require__(31);
	
	var _asiandPlotBand3 = _interopRequireDefault(_asiandPlotBand2);
	
	var _asianuPlotBand2 = __webpack_require__(32);
	
	var _asianuPlotBand3 = _interopRequireDefault(_asianuPlotBand2);
	
	var _callPlotBand2 = __webpack_require__(33);
	
	var _callPlotBand3 = _interopRequireDefault(_callPlotBand2);
	
	var _digitDiffPlotBand = __webpack_require__(34);
	
	var _digitDiffPlotBand2 = _interopRequireDefault(_digitDiffPlotBand);
	
	var _digitEvenPlotBand = __webpack_require__(35);
	
	var _digitEvenPlotBand2 = _interopRequireDefault(_digitEvenPlotBand);
	
	var _digitMatchPlotBand = __webpack_require__(36);
	
	var _digitMatchPlotBand2 = _interopRequireDefault(_digitMatchPlotBand);
	
	var _digitOddPlotBand = __webpack_require__(37);
	
	var _digitOddPlotBand2 = _interopRequireDefault(_digitOddPlotBand);
	
	var _digitOverPlotBand = __webpack_require__(38);
	
	var _digitOverPlotBand2 = _interopRequireDefault(_digitOverPlotBand);
	
	var _digitUnderPlotBand = __webpack_require__(39);
	
	var _digitUnderPlotBand2 = _interopRequireDefault(_digitUnderPlotBand);
	
	var _expiryMissPlotBand = __webpack_require__(40);
	
	var _expiryMissPlotBand2 = _interopRequireDefault(_expiryMissPlotBand);
	
	var _expiryRangePlotBand = __webpack_require__(41);
	
	var _expiryRangePlotBand2 = _interopRequireDefault(_expiryRangePlotBand);
	
	var _noTouchPlotBand = __webpack_require__(43);
	
	var _noTouchPlotBand2 = _interopRequireDefault(_noTouchPlotBand);
	
	var _oneTouchPlotBand = __webpack_require__(44);
	
	var _oneTouchPlotBand2 = _interopRequireDefault(_oneTouchPlotBand);
	
	var _putPlotBand2 = __webpack_require__(45);
	
	var _putPlotBand3 = _interopRequireDefault(_putPlotBand2);
	
	var _rangePlotBand2 = __webpack_require__(7);
	
	var _rangePlotBand3 = _interopRequireDefault(_rangePlotBand2);
	
	var _spreaddPlotBand2 = __webpack_require__(46);
	
	var _spreaddPlotBand3 = _interopRequireDefault(_spreaddPlotBand2);
	
	var _spreaduPlotBand2 = __webpack_require__(47);
	
	var _spreaduPlotBand3 = _interopRequireDefault(_spreaduPlotBand2);
	
	var _upOrDownPlotBand = __webpack_require__(8);
	
	var _upOrDownPlotBand2 = _interopRequireDefault(_upOrDownPlotBand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.asiandPlotBand = _asiandPlotBand3.default;
	exports.asianuPlotBand = _asianuPlotBand3.default;
	exports.callPlotBand = _callPlotBand3.default;
	exports.digitdiffPlotBand = _digitDiffPlotBand2.default;
	exports.digitevenPlotBand = _digitEvenPlotBand2.default;
	exports.digitmatchPlotBand = _digitMatchPlotBand2.default;
	exports.digitoddPlotBand = _digitOddPlotBand2.default;
	exports.digitoverPlotBand = _digitOverPlotBand2.default;
	exports.digitunderPlotBand = _digitUnderPlotBand2.default;
	exports.expirymissPlotBand = _expiryMissPlotBand2.default;
	exports.expiryrangePlotBand = _expiryRangePlotBand2.default;
	exports.notouchPlotBand = _noTouchPlotBand2.default;
	exports.onetouchPlotBand = _oneTouchPlotBand2.default;
	exports.putPlotBand = _putPlotBand3.default;
	exports.rangePlotBand = _rangePlotBand3.default;
	exports.spreaddPlotBand = _spreaddPlotBand3.default;
	exports.spreaduPlotBand = _spreaduPlotBand3.default;
	exports.upordownPlotBand = _upOrDownPlotBand2.default;

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _barrierFromContract = __webpack_require__(1);
	
	var _barrierFromContract2 = _interopRequireDefault(_barrierFromContract);
	
	var _commonPlotBands = __webpack_require__(0);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (contract, lastSpot) {
	    return [(0, _commonPlotBands.winPlotBand)(0, (0, _barrierFromContract2.default)(contract, lastSpot)), (0, _commonPlotBands.lossPlotBand)((0, _barrierFromContract2.default)(contract, lastSpot), Number.MAX_VALUE)];
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return [];
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _highstock = __webpack_require__(4);
	
	var defaultOptions = {
	    color: 'red',
	    enabled: true,
	    style: {
	        color: 'white',
	        fontSize: '11px'
	    },
	    zIndex: 100
	};
	
	var lastPriceFromSeries = function lastPriceFromSeries(series) {
	    return series.yData.length && series.yData[series.yData.length - 1] || 0;
	};
	
	var polyPath = function polyPath(x, y, width, height) {
	    return ['M', 0, y - 0.5, 'L', x - 8, y, x, y - height / 2, x + width + 5, y - height / 2, x + width + 5, y + height / 2, x, y + height / 2, x - 8, y + 0.5, 0, y + 0.5];
	};
	
	var initialize = function initialize(_ref) {
	    var renderer = _ref.renderer;
	    var options = _ref.options;
	    var currentPrice = _ref.currentPrice;
	    var x = _ref.x;
	    var y = _ref.y;
	    var spotIndicator = _ref.spotIndicator;
	    var priceYAxis = _ref.priceYAxis;
	
	    spotIndicator.group = renderer.g('spot').attr({ zIndex: options.zIndex }).add();
	
	    spotIndicator.poly = renderer.path(polyPath(priceYAxis.width + x - 15, y, x, 15)).attr({
	        fill: options.color
	    }).add(spotIndicator.group);
	
	    spotIndicator.label = renderer.label(currentPrice.toFixed(options.pipSize), priceYAxis.width + x, y - 8).attr({
	        padding: 1
	    }).css({
	        cursor: 'default',
	        textAnchor: 'end',
	        color: options.style.color,
	        fontSize: options.style.fontSize
	    }).add(spotIndicator.group);
	};
	
	var update = function update(_ref2) {
	    var options = _ref2.options;
	    var currentPrice = _ref2.currentPrice;
	    var x = _ref2.x;
	    var y = _ref2.y;
	    var spotIndicator = _ref2.spotIndicator;
	    var priceYAxis = _ref2.priceYAxis;
	
	    spotIndicator.label.attr({
	        text: currentPrice.toFixed(options.pipSize)
	    });
	
	    spotIndicator.label.animate({
	        x: priceYAxis.width + x - 5,
	        y: y - 8
	    });
	
	    spotIndicator.poly.animate({
	        d: polyPath(priceYAxis.width + 10, y, 60, 15)
	    });
	
	    var extremes = priceYAxis.getExtremes();
	
	    if (currentPrice > extremes.min && currentPrice < extremes.max) {
	        priceYAxis.spotIndicator.group.show();
	    } else {
	        priceYAxis.spotIndicator.group.hide();
	    }
	};
	
	exports.default = function () {
	    var renderSpotIndicator = function renderSpotIndicator(chart) {
	        var options = chart.options.yAxis[0].spotIndicator;
	        if (!options || !options.enabled) return;
	        options = (0, _highstock.merge)(true, defaultOptions, options);
	
	        var priceYAxis = chart.yAxis[0];
	        var currentPrice = lastPriceFromSeries(chart.series[0]);
	
	        var x = chart.marginRight;
	        var y = priceYAxis.toPixels(currentPrice);
	
	        if (priceYAxis.spotIndicator) {
	            update({ options: options, currentPrice: currentPrice, x: x, y: y, spotIndicator: priceYAxis.spotIndicator, priceYAxis: priceYAxis });
	        } else {
	            priceYAxis.spotIndicator = {};
	            initialize({
	                renderer: chart.renderer,
	                options: options,
	                currentPrice: currentPrice,
	                x: x, y: y,
	                spotIndicator: priceYAxis.spotIndicator,
	                priceYAxis: priceYAxis
	            });
	        }
	    };
	
	    (0, _highstock.wrap)(_highstock.Chart.prototype, 'init', function init(proceed) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }
	
	        proceed.apply(this, args);
	        renderSpotIndicator(this);
	    });
	
	    (0, _highstock.wrap)(_highstock.Chart.prototype, 'redraw', function redraw(proceed) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	        }
	
	        proceed.apply(this, args);
	        renderSpotIndicator(this);
	    });
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _brandColor = __webpack_require__(2);
	
	var _brandColor2 = _interopRequireDefault(_brandColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		colors: [(0, _brandColor2.default)(1)],
		series: [{
			lineWidth: 1
		}],
		chart: {
			style: {
				fontFamily: "'Roboto', sans-serif"
			},
			plotBorderColor: 'red'
		},
		xAxis: {
			gridLineColor: (0, _brandColor2.default)(0.2),
			labels: {
				style: {
					color: (0, _brandColor2.default)(0.75)
				}
			},
			lineColor: '#707073',
			minorGridLineColor: '#505053',
			tickColor: '#707073',
			title: {
				style: {
					color: (0, _brandColor2.default)(0.75)
				}
			}
		},
		yAxis: {
			gridLineColor: (0, _brandColor2.default)(0.2),
			labels: {
				style: {
					color: (0, _brandColor2.default)(0.75)
				}
			},
			tickColor: (0, _brandColor2.default)(0.2),
			tickWidth: 1,
			title: {
				style: {
					color: (0, _brandColor2.default)(0.75)
				}
			}
		},
		labels: {
			style: {
				color: 'red'
			}
		},
		navigator: {
			handles: {
				backgroundColor: (0, _brandColor2.default)(0.25),
				borderColor: (0, _brandColor2.default)(0.5)
			},
			outlineColor: 'none',
			maskFill: (0, _brandColor2.default)(0.1),
			series: {
				color: (0, _brandColor2.default)(0.25),
				lineColor: (0, _brandColor2.default)(0.25)
			},
			xAxis: {
				gridLineColor: (0, _brandColor2.default)(0.1),
				labels: {
					style: {
						color: (0, _brandColor2.default)(0.75)
					}
				}
			}
		},
		rangeSelector: {
			buttonTheme: {
				fill: 'none',
				width: null,
				padding: 5,
				r: 2,
				borderRadius: 5,
				style: {
					color: (0, _brandColor2.default)(0.75)
				},
				states: {
					hover: {
						fill: 'none'
					},
					select: {
						fill: (0, _brandColor2.default)(0.1),
						style: {
							color: (0, _brandColor2.default)(0.75)
						}
					}
				}
			}
		},
		tooltip: {
			borderColor: (0, _brandColor2.default)(0.25),
			shadow: false,
			style: {
				color: (0, _brandColor2.default)(1)
			}
		},
		resetZoomButton: {
			theme: {
				display: 'none'
			}
		}
	};
	
	// const dark = {
	// 	plotOptions: {
	// 		series: {
	// 			dataLabels: {
	// 				color: '#B0B0B3',
	// 			},
	// 			marker: {
	// 				lineColor: '#333',
	// 			}
	// 		},
	// 		boxplot: {
	// 			fillColor: '#505053',
	// 		},
	// 		candlestick: {
	// 			lineColor: 'white',
	// 		},
	// 		errorbar: {
	// 			color: 'white',
	// 		}
	// 	},
	// 	labels: {
	// 		style: {
	// 			color: '#707073',
	// 		}
	// 	},
	//
	// 	drilldown: {
	// 		activeAxisLabelStyle: {
	// 			color: '#F0F0F3',
	// 		},
	// 		activeDataLabelStyle: {
	// 			color: '#F0F0F3',
	// 		},
	// 	},
	//
	//     navigation: {
	//         buttonOptions: {
	//             symbolStroke: '#DDDDDD',
	//             theme: {
	//                 fill: '#505053',
	//             },
	//         },
	//     },
	//
	//
	// 	// special colors for some of the
	// 	background2: '#505053',
	// 	dataLabelsColor: '#B0B0B3',
	// 	textColor: '#C0C0C0',
	// 	contrastTextColor: '#F0F0F3',
	// 	maskColor: 'rgba(255,255,255,0.3)',
	// };

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (ticks1, ticks2) {
	    return ticks1.length === ticks2.length && (ticks1.length === 0 || ticks1[ticks1.length - 1].epoch === ticks2[ticks2.length - 1].epoch);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (date) {
	    return Math.floor(date.getTime() / 1000);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _doTicksEqual = __webpack_require__(53);
	
	var _doTicksEqual2 = _interopRequireDefault(_doTicksEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (ticks1, ticks2) {
	    var lengthDiff = Math.abs(ticks1.length - ticks2.length);
	
	    if (lengthDiff !== 1 && ticks1.length === 0) {
	        return false;
	    }
	
	    return (0, _doTicksEqual2.default)(ticks1[ticks1.length - 1], ticks2[ticks2.length - 2]) || (0, _doTicksEqual2.default)(ticks1[ticks1.length - 2], ticks2[ticks2.length - 1]);
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (tick1, tick2) {
	    return !tick1 && tick1 === tick2 || !!tick1 && !!tick2 && tick1.epoch === tick2.epoch && tick1.quote === tick2.quote;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (ticks) {
	    return ticks && (ticks.length === 0 ? undefined : ticks[ticks.length - 1]);
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (tick) {
	    return [tick.epoch * 1000, tick.quote];
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ }
/******/ ])});;
//# sourceMappingURL=binary-charts-amd.js.map