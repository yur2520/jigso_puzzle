/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/colorthief/dist/color-thief.mjs":
/*!******************************************************!*\
  !*** ./node_modules/colorthief/dist/color-thief.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ u)\n/* harmony export */ });\nvar t=function(t,r){return t<r?-1:t>r?1:0},r=function(t){return t.reduce(function(t,r){return t+r},0)},n=/*#__PURE__*/function(){function t(t){this.colors=t}var r=t.prototype;return r.palette=function(){return this.colors},r.map=function(t){return t},t}(),o=function(){function o(t,r,n){return(t<<10)+(r<<5)+n}function e(t){var r=[],n=!1;function o(){r.sort(t),n=!0}return{push:function(t){r.push(t),n=!1},peek:function(t){return n||o(),void 0===t&&(t=r.length-1),r[t]},pop:function(){return n||o(),r.pop()},size:function(){return r.length},map:function(t){return r.map(t)},debug:function(){return n||o(),r}}}function i(t,r,n,o,e,i,u){var a=this;a.r1=t,a.r2=r,a.g1=n,a.g2=o,a.b1=e,a.b2=i,a.histo=u}function u(){this.vboxes=new e(function(r,n){return t(r.vbox.count()*r.vbox.volume(),n.vbox.count()*n.vbox.volume())})}function a(t,r){if(r.count()){var n=r.r2-r.r1+1,e=r.g2-r.g1+1,i=Math.max.apply(null,[n,e,r.b2-r.b1+1]);if(1==r.count())return[r.copy()];var u,a,c,f,s=0,h=[],v=[];if(i==n)for(u=r.r1;u<=r.r2;u++){for(f=0,a=r.g1;a<=r.g2;a++)for(c=r.b1;c<=r.b2;c++)f+=t[o(u,a,c)]||0;h[u]=s+=f}else if(i==e)for(u=r.g1;u<=r.g2;u++){for(f=0,a=r.r1;a<=r.r2;a++)for(c=r.b1;c<=r.b2;c++)f+=t[o(a,u,c)]||0;h[u]=s+=f}else for(u=r.b1;u<=r.b2;u++){for(f=0,a=r.r1;a<=r.r2;a++)for(c=r.g1;c<=r.g2;c++)f+=t[o(a,c,u)]||0;h[u]=s+=f}return h.forEach(function(t,r){v[r]=s-t}),function(t){var n,o,e,i,a,c=t+\"1\",f=t+\"2\",l=0;for(u=r[c];u<=r[f];u++)if(h[u]>s/2){for(e=r.copy(),i=r.copy(),a=(n=u-r[c])<=(o=r[f]-u)?Math.min(r[f]-1,~~(u+o/2)):Math.max(r[c],~~(u-1-n/2));!h[a];)a++;for(l=v[a];!l&&h[a-1];)l=v[--a];return e[f]=a,i[c]=e[f]+1,[e,i]}}(i==n?\"r\":i==e?\"g\":\"b\")}}return i.prototype={volume:function(t){var r=this;return r._volume&&!t||(r._volume=(r.r2-r.r1+1)*(r.g2-r.g1+1)*(r.b2-r.b1+1)),r._volume},count:function(t){var r=this,n=r.histo;if(!r._count_set||t){var e,i,u,a=0;for(e=r.r1;e<=r.r2;e++)for(i=r.g1;i<=r.g2;i++)for(u=r.b1;u<=r.b2;u++)a+=n[o(e,i,u)]||0;r._count=a,r._count_set=!0}return r._count},copy:function(){var t=this;return new i(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(t){var r=this,n=r.histo;if(!r._avg||t){var e,i,u,a,c=0,f=0,s=0,h=0;if(r.r1===r.r2&&r.g1===r.g2&&r.b1===r.b2)r._avg=[r.r1<<3,r.g1<<3,r.b1<<3];else{for(i=r.r1;i<=r.r2;i++)for(u=r.g1;u<=r.g2;u++)for(a=r.b1;a<=r.b2;a++)c+=e=n[o(i,u,a)]||0,f+=e*(i+.5)*8,s+=e*(u+.5)*8,h+=e*(a+.5)*8;r._avg=c?[~~(f/c),~~(s/c),~~(h/c)]:[~~(8*(r.r1+r.r2+1)/2),~~(8*(r.g1+r.g2+1)/2),~~(8*(r.b1+r.b2+1)/2)]}}return r._avg},contains:function(t){var r=this,n=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,n>=r.r1&&n<=r.r2&&gval>=r.g1&&gval<=r.g2&&bval>=r.b1&&bval<=r.b2}},u.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var r=this.vboxes,n=0;n<r.size();n++)if(r.peek(n).vbox.contains(t))return r.peek(n).color;return this.nearest(t)},nearest:function(t){for(var r,n,o,e=this.vboxes,i=0;i<e.size();i++)((n=Math.sqrt(Math.pow(t[0]-e.peek(i).color[0],2)+Math.pow(t[1]-e.peek(i).color[1],2)+Math.pow(t[2]-e.peek(i).color[2],2)))<r||void 0===r)&&(r=n,o=e.peek(i).color);return o},forcebw:function(){var n=this.vboxes;n.sort(function(n,o){return t(r(n.color),r(o.color))});var o=n[0].color;o[0]<5&&o[1]<5&&o[2]<5&&(n[0].color=[0,0,0]);var e=n.length-1,i=n[e].color;i[0]>251&&i[1]>251&&i[2]>251&&(n[e].color=[255,255,255])}},{quantize:function(r,c){if(!Number.isInteger(c)||c<1||c>256)throw new Error(\"Invalid maximum color count. It must be an integer between 1 and 256.\");if(!r.length||c<2||c>256)return!1;if(!r.length||c<2||c>256)return!1;for(var f=[],s=new Set,h=0;h<r.length;h++){var v=r[h],l=v.join(\",\");s.has(l)||(s.add(l),f.push(v))}if(f.length<=c)return new n(f);var g=function(t){var r,n=new Array(32768);return t.forEach(function(t){r=o(t[0]>>3,t[1]>>3,t[2]>>3),n[r]=(n[r]||0)+1}),n}(r);g.forEach(function(){});var p=function(t,r){var n,o,e,u=1e6,a=0,c=1e6,f=0,s=1e6,h=0;return t.forEach(function(t){(n=t[0]>>3)<u?u=n:n>a&&(a=n),(o=t[1]>>3)<c?c=o:o>f&&(f=o),(e=t[2]>>3)<s?s=e:e>h&&(h=e)}),new i(u,a,c,f,s,h,r)}(r,g),b=new e(function(r,n){return t(r.count(),n.count())});function m(t,r){for(var n,o=t.size(),e=0;e<1e3;){if(o>=r)return;if(e++>1e3)return;if((n=t.pop()).count()){var i=a(g,n),u=i[0],c=i[1];if(!u)return;t.push(u),c&&(t.push(c),o++)}else t.push(n),e++}}b.push(p),m(b,.75*c);for(var d=new e(function(r,n){return t(r.count()*r.volume(),n.count()*n.volume())});b.size();)d.push(b.pop());m(d,c);for(var w=new u;d.size();)w.push(d.pop());return w}}}().quantize,e=function(t){this.canvas=document.createElement(\"canvas\"),this.context=this.canvas.getContext(\"2d\"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};e.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var u=function(){};u.prototype.getColor=function(t,r){return void 0===r&&(r=10),this.getPalette(t,5,r)[0]},u.prototype.getPalette=function(t,r,n){var i=function(t){var r=t.colorCount,n=t.quality;if(void 0!==r&&Number.isInteger(r)){if(1===r)throw new Error(\"colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()\");r=Math.max(r,2),r=Math.min(r,20)}else r=10;return(void 0===n||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:r,quality:n}}({colorCount:r,quality:n}),u=new e(t),a=function(t,r,n){for(var o,e,i,u,a,c=t,f=[],s=0;s<r;s+=n)e=c[0+(o=4*s)],i=c[o+1],u=c[o+2],(void 0===(a=c[o+3])||a>=125)&&(e>250&&i>250&&u>250||f.push([e,i,u]));return f}(u.getImageData().data,u.width*u.height,i.quality),c=o(a,i.colorCount);return c?c.palette():null},u.prototype.getColorFromUrl=function(t,r,n){var o=this,e=document.createElement(\"img\");e.addEventListener(\"load\",function(){var i=o.getPalette(e,5,n);r(i[0],t)}),e.src=t},u.prototype.getImageData=function(t,r){var n=new XMLHttpRequest;n.open(\"GET\",t,!0),n.responseType=\"arraybuffer\",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=new Array(i),o=0;o<t.length;o++)n[o]=String.fromCharCode(t[o]);var e=n.join(\"\"),u=window.btoa(e);r(\"data:image/png;base64,\"+u)}},n.send()},u.prototype.getColorAsync=function(t,r,n){var o=this;this.getImageData(t,function(t){var e=document.createElement(\"img\");e.addEventListener(\"load\",function(){var t=o.getPalette(e,5,n);r(t[0],this)}),e.src=t})};\n\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/colorthief/dist/color-thief.mjs?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SUITE-Variable.woff2 */ \"./src/SUITE-Variable.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ` :root {\r\n     --theme-bg-color: linear-gradient(135deg, #adbdda 0%, #9e92ac 100%);\r\n     --theme-button-color: #9899ca;\r\n     --theme-button-hover-color: #7081b8;\r\n }\r\n\r\n @font-face {\r\n     font-family: 'SUITE Variable';\r\n     font-weight: 300 900;\r\n     /* 폰트 파일 경로가 올바른지 확인해주세요. */\r\n     src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2-variations');\r\n }\r\n\r\n\r\n * {\r\n     box-sizing: border-box;\r\n }\r\n\r\n body {\r\n     font-family: 'SUITE Variable', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n     text-align: center;\r\n     background: var(--theme-bg-color);\r\n     transition: 0.5s ease;\r\n     margin: 0;\r\n     padding: 20px;\r\n     min-height: 100vh;\r\n     color: #333;\r\n }\r\n\r\n .container {\r\n     max-width: 1200px;\r\n     margin: 0 auto;\r\n }\r\n\r\n h1 {\r\n     color: white;\r\n     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r\n     margin-bottom: 30px;\r\n }\r\n\r\n .controls {\r\n     background: white;\r\n     border-radius: 15px;\r\n     padding: 20px;\r\n     margin-bottom: 20px;\r\n     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n }\r\n\r\n .image-selection {\r\n     margin-bottom: 20px;\r\n }\r\n\r\n .preset-images {\r\n     display: grid;\r\n     grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\r\n     gap: 15px;\r\n     justify-items: center;\r\n     margin-bottom: 20px;\r\n     max-width: 800px;\r\n     margin-left: auto;\r\n     margin-right: auto;\r\n }\r\n\r\n .preset-image-container {\r\n     text-align: center;\r\n     cursor: pointer;\r\n     transition: transform 0.3s;\r\n }\r\n\r\n .preset-image-container:hover {\r\n     transform: translateY(-5px);\r\n }\r\n\r\n .preset-image {\r\n     width: 120px;\r\n     height: 90px;\r\n     border: 3px solid #ddd;\r\n     border-radius: 10px;\r\n     cursor: pointer;\r\n     object-fit: cover;\r\n     transition: all 0.3s;\r\n     display: block;\r\n }\r\n\r\n .preset-image:hover {\r\n     border-color: #4CAF50;\r\n     box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);\r\n }\r\n\r\n .preset-image.selected {\r\n     border-color: #4CAF50;\r\n     border-width: 4px;\r\n     box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);\r\n }\r\n\r\n .image-title {\r\n     margin-top: 8px;\r\n     font-size: 14px;\r\n     font-weight: bold;\r\n     color: #333;\r\n }\r\n\r\n .image-description {\r\n     font-size: 12px;\r\n     color: #666;\r\n     margin-top: 2px;\r\n }\r\n\r\n .difficulty-controls {\r\n     display: flex;\r\n     justify-content: center;\r\n     gap: 10px;\r\n     flex-wrap: wrap;\r\n }\r\n\r\n .difficulty-controls button {\r\n     background: var(--theme-button-color);\r\n     color: white;\r\n     border: none;\r\n     padding: 10px 20px;\r\n     border-radius: 8px;\r\n     cursor: pointer;\r\n     font-size: 16px;\r\n     transition: all 0.3s;\r\n }\r\n\r\n .difficulty-controls button:hover {\r\n     background: var(--theme-button-hover-color);\r\n     transform: translateY(-2px);\r\n }\r\n\r\n .difficulty-controls button:disabled {\r\n     background: #ccc;\r\n     cursor: not-allowed;\r\n     transform: none;\r\n }\r\n\r\n .game-info {\r\n     background: white;\r\n     border-radius: 10px;\r\n     padding: 15px;\r\n     margin-bottom: 20px;\r\n     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n     display: none;\r\n }\r\n\r\n .game-info.show {\r\n     display: block;\r\n }\r\n\r\n .info-item {\r\n     display: inline-block;\r\n     margin: 0 15px;\r\n     font-weight: bold;\r\n }\r\n\r\n .error-message {\r\n     background: #f44336;\r\n     color: white;\r\n     padding: 10px;\r\n     border-radius: 5px;\r\n     margin: 10px 0;\r\n     display: none;\r\n }\r\n\r\n .loading {\r\n     background: #2196F3;\r\n     color: white;\r\n     padding: 10px;\r\n     border-radius: 5px;\r\n     margin: 10px 0;\r\n     display: none;\r\n }\r\n\r\n #puzzle-container {\r\n     border: 0px solid #333;\r\n     position: relative;\r\n     background-color: #fff;\r\n     margin: 20px auto;\r\n     border-radius: 10px;\r\n     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);\r\n     overflow: hidden;\r\n }\r\n\r\n #pieces-container {\r\n     border: 0px solid #999;\r\n     position: relative;\r\n     margin: 20px auto;\r\n     min-height: 200px;\r\n     background: rgba(255, 255, 255, 0.9);\r\n     border-radius: 10px;\r\n     backdrop-filter: blur(5px);\r\n }\r\n\r\n .puzzle-piece {\r\n     position: absolute;\r\n     border: 1px solid rgba(255, 255, 255, 0.8);\r\n     cursor: grab;\r\n     border-radius: 5px;\r\n     transition: transform 0.3s ease;\r\n     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 2px 2px 5px rgba(255, 255, 255, 0.5),\r\n                inset -2px -2px 5px rgba(20, 20, 20, 0.5);\r\n }\r\n\r\n .puzzle-piece:hover {\r\n     transform: scale(1.05);\r\n     z-index: 10;\r\n }\r\n\r\n .puzzle-piece:active {\r\n     cursor: grabbing;\r\n }\r\n\r\n .puzzle-piece.snapped {\r\n     cursor: default;\r\n     border: 0px solid rgba(0, 0, 0, 0.1);\r\n     border-radius: 0;\r\n     box-shadow: none;\r\n }\r\n\r\n .completion-message {\r\n     position: fixed;\r\n     top: 50%;\r\n     left: 50%;\r\n     transform: translate(-50%, -50%);\r\n     background: white;\r\n     padding: 30px;\r\n     border-radius: 15px;\r\n     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\r\n     z-index: 10000;\r\n     text-align: center;\r\n     display: none;\r\n }\r\n\r\n .completion-message.show {\r\n     display: block;\r\n     animation: popIn 0.5s ease;\r\n }\r\n\r\n @keyframes popIn {\r\n     0% {\r\n         transform: translate(-50%, -50%) scale(0.5);\r\n         opacity: 0;\r\n     }\r\n\r\n     100% {\r\n         transform: translate(-50%, -50%) scale(1);\r\n         opacity: 1;\r\n     }\r\n }\r\n\r\n /* 반응형 디자인 */\r\n @media (max-width: 768px) {\r\n     body {\r\n         padding: 10px;\r\n     }\r\n\r\n     h1 {\r\n         font-size: 24px;\r\n         margin-bottom: 20px;\r\n     }\r\n\r\n     .controls {\r\n         padding: 15px;\r\n     }\r\n\r\n     .preset-images {\r\n         grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n         gap: 10px;\r\n     }\r\n\r\n     .preset-image {\r\n         width: 100px;\r\n         height: 75px;\r\n     }\r\n\r\n     .image-title {\r\n         font-size: 12px;\r\n     }\r\n\r\n     .image-description {\r\n         font-size: 10px;\r\n     }\r\n\r\n     .difficulty-controls {\r\n         gap: 5px;\r\n     }\r\n\r\n     .difficulty-controls button {\r\n         padding: 8px 15px;\r\n         font-size: 14px;\r\n     }\r\n\r\n     .info-item {\r\n         display: block;\r\n         margin: 5px 0;\r\n     }\r\n\r\n     #puzzle-container,\r\n     #pieces-container {\r\n         max-width: 95vw;\r\n         margin: 15px auto;\r\n     }\r\n\r\n     .puzzle-piece {\r\n         border: 3px solid rgba(255, 255, 255, 0.9);\r\n     }\r\n\r\n     .puzzle-piece:hover {\r\n         transform: none;\r\n         /* 모바일에서는 호버 효과 제거 */\r\n     }\r\n }\r\n\r\n @media (max-width: 480px) {\r\n     .preset-images {\r\n         grid-template-columns: repeat(2, 1fr);\r\n     }\r\n\r\n     .preset-image {\r\n         width: 80px;\r\n         height: 60px;\r\n     }\r\n\r\n     .difficulty-controls button {\r\n         padding: 6px 12px;\r\n         font-size: 12px;\r\n     }\r\n }\r\n\r\n /* 태블릿 */\r\n @media (min-width: 769px) and (max-width: 1024px) {\r\n\r\n     #puzzle-container,\r\n     #pieces-container {\r\n         max-width: 80vw;\r\n     }\r\n }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://jigso_puzzle/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n  if (!url) {\r\n    return url;\r\n  }\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  // If url is already wrapped in quotes, remove them\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  }\r\n\r\n  // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n  return url;\r\n};\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://jigso_puzzle/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/SUITE-Variable.woff2":
/*!**********************************!*\
  !*** ./src/SUITE-Variable.woff2 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"a57ef2ad411f382de13c.woff2\";\n\n//# sourceURL=webpack://jigso_puzzle/./src/SUITE-Variable.woff2?\n}");

/***/ }),

/***/ "./src/autumn.jpeg":
/*!*************************!*\
  !*** ./src/autumn.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"562370e9db8e8dc71298.jpeg\";\n\n//# sourceURL=webpack://jigso_puzzle/./src/autumn.jpeg?\n}");

/***/ }),

/***/ "./src/cake.jpeg":
/*!***********************!*\
  !*** ./src/cake.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"547b2e6f890979dda049.jpeg\";\n\n//# sourceURL=webpack://jigso_puzzle/./src/cake.jpeg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _puzzle_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./puzzle-image.png */ \"./src/puzzle-image.png\");\n/* harmony import */ var _cake_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cake.jpeg */ \"./src/cake.jpeg\");\n/* harmony import */ var _autumn_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autumn.jpeg */ \"./src/autumn.jpeg\");\n/* harmony import */ var colorthief__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! colorthief */ \"./node_modules/colorthief/dist/color-thief.mjs\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// HTML에서 요소들을 가져옵니다.\r\nconst puzzleContainer = document.getElementById('puzzle-container');\r\nconst piecesContainer = document.getElementById('pieces-container');\r\nconst errorMessage = document.getElementById('errorMessage');\r\nconst loadingMessage = document.getElementById('loadingMessage');\r\nconst gameInfo = document.getElementById('gameInfo');\r\nconst completionMessage = document.getElementById('completionMessage');\r\n\r\n\r\n// 퍼즐 이미지 객체를 생성합니다.\r\nconst image = new Image();\r\nlet currentImageSrc = null;\r\nlet currentImageRatio = 1; // 이미지의 가로세로 비율\r\n\r\n\r\n// 미리 정의된 이미지 정보\r\nconst imageDatabase = {\r\n    landscape1: {\r\n        url: 'https://images.unsplash.com/photo-1505490096310-204ef067fe6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\r\n        \r\n        title: '산과 호수'\r\n    },\r\n    animals1: {\r\n        url: 'https://images.unsplash.com/photo-1615233500022-01d251f3eb33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\r\n        \r\n        title: '귀여운 강아지'\r\n    },\r\n    flowers1: {\r\n        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop&crop=center',\r\n        \r\n        title: '화려한 꽃들'\r\n    },\r\n    space1: {\r\n        url: _cake_jpeg__WEBPACK_IMPORTED_MODULE_2__,\r\n        \r\n        title: '딸기 케이크'\r\n    },\r\n    ocean1: {\r\n        url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop&crop=center',\r\n        \r\n        title: '바다와 해변'\r\n    },\r\n    illust1: {\r\n        url: _puzzle_image_png__WEBPACK_IMPORTED_MODULE_1__,\r\n        \r\n        title: '꿈꾸는 산'\r\n    }\r\n};\r\n\r\n// 게임 상태를 관리할 변수들\r\nlet pieces = [];\r\nlet puzzleWidth, puzzleHeight;\r\nlet pieceWidth, pieceHeight;\r\nlet gameStartTime = null;\r\nlet gameTimer = null;\r\nlet completedCount = 0;\r\n\r\nlet gridCols = 0; // 그리드 열 개수 저장 변수 추가\r\nlet gridRows = 0;\r\n\r\n// 이미지 로딩 성공 처리\r\nimage.onload = () => {\r\n    hideLoading();\r\n\r\n    currentImageRatio = image.naturalWidth / image.naturalHeight;\r\n    calculateOptimalSize();\r\n\r\n    // 퍼즐 판의 크기 설정\r\n    puzzleContainer.style.width = `${puzzleWidth}px`;\r\n    puzzleContainer.style.height = `${puzzleHeight}px`;\r\n    piecesContainer.style.width = `${puzzleWidth}px`;\r\n    piecesContainer.style.minHeight = `${Math.max(400, puzzleHeight * 0.7)}px`;\r\n\r\n    applyDynamicTheme();\r\n    // 난이도 버튼 활성화\r\n    enableDifficultyButtons();\r\n    showSuccess('이미지가 로드되었습니다! 난이도를 선택해주세요.');\r\n};\r\n\r\nfunction applyDynamicTheme() {\r\n    const colorThief = new colorthief__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();    \r\n    const palette = colorThief.getPalette(image, 2); // 2개의 주요 테마색 추출\r\n\r\n    if (palette && palette.length >= 2) {\r\n        const primaryColor = `rgb(${palette[0].join(',')})`;\r\n        const secondaryColor = `rgb(${palette[1].join(',')})`;\r\n\r\n        // CSS 변수 값을 변경하여 테마 적용\r\n        document.documentElement.style.setProperty('--theme-bg-color', `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`);\r\n        document.documentElement.style.setProperty('--theme-button-color', primaryColor);\r\n        document.documentElement.style.setProperty('--theme-button-hover-color', secondaryColor);\r\n    }\r\n}\r\n// 이미지 크기 최적화 함수\r\nfunction calculateOptimalSize() {\r\n    const maxWidth = Math.min(600, window.innerWidth * 0.95);\r\n    const maxHeight = Math.min(600, window.innerHeight * 0.85);\r\n\r\n    // 이미지 비율에 따라 최적 크기 계산\r\n    let targetWidth, targetHeight;\r\n\r\n    if (currentImageRatio >= 1) {\r\n        // 가로가 더 긴 이미지 (landscape)\r\n        targetWidth = Math.min(maxWidth, image.naturalWidth);\r\n        targetHeight = targetWidth / currentImageRatio;\r\n\r\n        if (targetHeight > maxHeight) {\r\n            targetHeight = maxHeight;\r\n            targetWidth = targetHeight * currentImageRatio;\r\n        }\r\n    } else {\r\n        // 세로가 더 긴 이미지 (portrait)\r\n        targetHeight = Math.min(maxHeight, image.naturalHeight);\r\n        targetWidth = targetHeight * currentImageRatio;\r\n\r\n        if (targetWidth > maxWidth) {\r\n            targetWidth = maxWidth;\r\n            targetHeight = targetWidth / currentImageRatio;\r\n        }\r\n    }\r\n\r\n    puzzleWidth = Math.floor(targetWidth);\r\n    puzzleHeight = Math.floor(targetHeight);\r\n}\r\n\r\n// 이미지 로딩 실패 처리\r\nimage.onerror = () => {\r\n    hideLoading();\r\n    showError('이미지를 불러올 수 없습니다. 다른 이미지를 선택해주세요.');\r\n    disableDifficultyButtons();\r\n};\r\n\r\n\r\n// 프리셋 이미지 선택 처리\r\ndocument.querySelectorAll('.preset-image-container').forEach(container => {\r\n    container.addEventListener('click', () => {\r\n        const imageKey = container.dataset.image;\r\n        const imageData = imageDatabase[imageKey];\r\n\r\n        if (!imageData) {\r\n            showError('이미지 정보를 찾을 수 없습니다.');\r\n            return;\r\n        }\r\n\r\n        // 선택 표시 업데이트\r\n        document.querySelectorAll('.preset-image').forEach(img => img.classList.remove('selected'));\r\n        container.querySelector('.preset-image').classList.add('selected');\r\n\r\n        showLoading();\r\n        currentImageRatio = imageData.ratio;\r\n        loadImage(imageData.url, imageData.title);\r\n    });\r\n});\r\n\r\n// 이미지 로드 함수\r\nfunction loadImage(imageSrc, title = '') {\r\n    currentImageSrc = imageSrc;\r\n    resetGame();\r\n    image.crossOrigin = 'anonymous'; // CORS 처리\r\n    image.src = imageSrc;\r\n}\r\n\r\n// 게임 리셋\r\nfunction resetGame() {\r\n    piecesContainer.innerHTML = '';\r\n    puzzleContainer.innerHTML = '';\r\n    pieces = [];\r\n    completedCount = 0;\r\n    hideGameInfo();\r\n    stopTimer();\r\n}\r\n\r\n// 난이도 버튼을 누르면 이 함수가 호출됩니다.\r\nfunction startGame(pieceCount) {\r\n    if (!currentImageSrc) {\r\n        showError('먼저 이미지를 선택해주세요.');\r\n        return;\r\n    }\r\n\r\n    resetGame();\r\n    showGameInfo();\r\n    startTimer();\r\n\r\n    // 난이도에 따라 퍼즐을 몇x몇으로 나눌지 결정합니다.\r\n    const grid = getGridSize(pieceCount);\r\n    const cols = grid.cols;\r\n    const rows = grid.rows;\r\n\r\n    gridCols = cols; \r\n    gridRows = rows;\r\n\r\n    // 각 조각의 너비와 높이를 계산합니다.\r\n    pieceWidth = puzzleWidth / cols;\r\n    pieceHeight = puzzleHeight / rows;\r\n\r\n    // 총 피스 수 업데이트\r\n    document.getElementById('totalPieces').textContent = pieceCount;\r\n    updateProgress();\r\n\r\n    // 이중 for문을 이용해 이미지를 자르고 조각을 만듭니다.\r\n     // ✅ 1. 원본 이미지에서 한 조각이 차지할 '실제' 너비와 높이를 계산합니다.\r\n    const sourcePieceWidth = image.naturalWidth / cols;\r\n    const sourcePieceHeight = image.naturalHeight / rows;\r\n\r\n    for (let y = 0; y < rows; y++) {\r\n        for (let x = 0; x < cols; x++) {\r\n            // 1. 캔버스를 이용해 이미지 자르기\r\n            const canvas = document.createElement('canvas');\r\n            canvas.width = pieceWidth;\r\n            canvas.height = pieceHeight;\r\n            const context = canvas.getContext('2d');\r\n\r\n            // ✅ 2. drawImage에 원본 이미지 기준 좌표와 크기를 넘겨줍니다.\r\n            context.drawImage(\r\n                image,\r\n                x * sourcePieceWidth,      // 원본에서 잘라낼 부분의 x 좌표\r\n                y * sourcePieceHeight,     // 원본에서 잘라낼 부분의 y 좌표\r\n                sourcePieceWidth,          // 원본에서 잘라낼 부분의 너비\r\n                sourcePieceHeight,         // 원본에서 잘라낼 부분의 높이\r\n                0, 0,                      // 캔버스에 그릴 x, y 좌표\r\n               pieceWidth,                // 캔버스에 그릴 너비\r\n                pieceHeight                // 캔버스에 그릴 높이\r\n            );\r\n\r\n            // 2. 잘라낸 이미지로 퍼즐 조각(div) 만들기\r\n            const piece = document.createElement('div');\r\n            piece.className = 'puzzle-piece';\r\n            piece.style.width = `${pieceWidth}px`;\r\n            piece.style.height = `${pieceHeight}px`;\r\n            piece.style.backgroundImage = `url(${canvas.toDataURL()})`;\r\n            piece.style.backgroundSize = 'cover';\r\n\r\n            // 3. 각 조각의 정답 위치를 dataset에 저장해 둡니다.\r\n            piece.dataset.correctX = `${x * pieceWidth}`;\r\n            piece.dataset.correctY = `${y * pieceHeight}`;\r\n            piece.dataset.col = x; // 열 인덱스 저장\r\n            piece.dataset.row = y; // 행 인덱스 저장\r\n\r\n            pieces.push(piece);\r\n        }\r\n    }\r\n\r\n    // 4. 조각들을 무작위로 섞고 화면에 표시합니다.\r\n    shuffleAndPlacePieces();\r\n}\r\n\r\n// 조각 수에 따라 그리드 크기를 정하는 함수\r\nfunction getGridSize(pieceCount) {\r\n    let cols, rows;\r\n    switch (pieceCount) {\r\n        case 12: cols = 4; rows = 3; break;\r\n        case 30: cols = 6; rows = 5; break;\r\n        case 50: cols = 10; rows = 5; break;\r\n        case 100: cols = 10; rows = 10; break;\r\n        default: cols = 6; rows = 5;\r\n    }\r\n    return { cols, rows };\r\n}\r\n\r\n// 조각들을 섞고 배치하는 함수\r\nfunction shuffleAndPlacePieces() {\r\n    pieces.sort(() => Math.random() - 0.5);\r\n\r\n    pieces.forEach((piece, index) => {\r\n        const containerRect = piecesContainer.getBoundingClientRect();\r\n        const maxX = Math.max(0, containerRect.width - pieceWidth);\r\n        const maxY = Math.max(0, containerRect.height - pieceHeight);\r\n\r\n        piece.style.left = `${Math.random() * maxX}px`;\r\n        piece.style.top = `${Math.random() * maxY}px`;\r\n        piece.style.zIndex = index;\r\n\r\n        piecesContainer.appendChild(piece);\r\n        addDragAndDrop(piece);\r\n    });\r\n}\r\n\r\nfunction addDragAndDrop(piece) {\r\n    let isDragging = false;\r\n    let offsetX, offsetY;\r\n\r\n    // 마우스와 터치 이벤트 모두 지원\r\n    const startEvents = ['mousedown', 'touchstart'];\r\n    const moveEvents = ['mousemove', 'touchmove'];\r\n    const endEvents = ['mouseup', 'touchend'];\r\n\r\n    function getEventPos(e) {\r\n        return e.type.includes('touch') ?\r\n            { x: e.touches[0].clientX, y: e.touches[0].clientY } :\r\n            { x: e.clientX, y: e.clientY };\r\n    }\r\n\r\n    startEvents.forEach(eventType => {\r\n        piece.addEventListener(eventType, (e) => {\r\n            e.preventDefault();\r\n            const pos = getEventPos(e);\r\n            isDragging = true;\r\n\r\n            offsetX = pos.x - piece.offsetLeft;\r\n            offsetY = pos.y - piece.offsetTop;\r\n\r\n            piece.style.zIndex = 1000;\r\n            piecesContainer.appendChild(piece);\r\n        });\r\n    });\r\n\r\n    moveEvents.forEach(eventType => {\r\n        document.addEventListener(eventType, (e) => {\r\n            if (!isDragging) return;\r\n            e.preventDefault();\r\n\r\n            const pos = getEventPos(e);\r\n            piece.style.left = `${pos.x - offsetX}px`;\r\n            piece.style.top = `${pos.y - offsetY}px`;\r\n        });\r\n    });\r\n\r\n    endEvents.forEach(eventType => {\r\n        document.addEventListener(eventType, (e) => {\r\n            if (!isDragging) return;\r\n            isDragging = false;\r\n            piece.style.zIndex = 1;\r\n\r\n            // 정답 위치 확인 및 스냅\r\n            const pieceRect = piece.getBoundingClientRect();\r\n            const containerRect = puzzleContainer.getBoundingClientRect();\r\n            const correctX = parseFloat(piece.dataset.correctX) + containerRect.left;\r\n            const correctY = parseFloat(piece.dataset.correctY) + containerRect.top;\r\n\r\n            const tolerance = Math.min(30, Math.min(pieceWidth, pieceHeight) * 0.3);\r\n\r\n            if (Math.abs(pieceRect.left - correctX) < tolerance &&\r\n                Math.abs(pieceRect.top - correctY) < tolerance) {\r\n\r\n                piece.style.left = `${parseFloat(piece.dataset.correctX)}px`;\r\n                piece.style.top = `${parseFloat(piece.dataset.correctY)}px`;\r\n\r\n                piece.classList.add('snapped');\r\n                puzzleContainer.appendChild(piece);\r\n\r\n                completedCount++;\r\n                updateProgress();\r\n                checkCompletion();\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n// 진행률 업데이트\r\nfunction updateProgress() {\r\n    document.getElementById('completedPieces').textContent = completedCount;\r\n    const total = parseInt(document.getElementById('totalPieces').textContent);\r\n    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;\r\n    document.getElementById('progressPercent').textContent = percent;\r\n}\r\n\r\n// 모든 조각이 맞춰졌는지 확인하는 함수\r\nfunction checkCompletion() {\r\n    if (puzzleContainer.children.length === pieces.length) {\r\n        stopTimer();\r\n        setTimeout(() => {\r\n            showCompletionMessage();\r\n        }, 500);\r\n    }\r\n}\r\n\r\n// 타이머 관련 함수들\r\nfunction startTimer() {\r\n    gameStartTime = Date.now();\r\n    gameTimer = setInterval(updateTimer, 1000);\r\n}\r\n\r\nfunction stopTimer() {\r\n    if (gameTimer) {\r\n        clearInterval(gameTimer);\r\n        gameTimer = null;\r\n    }\r\n}\r\n\r\nfunction updateTimer() {\r\n    if (!gameStartTime) return;\r\n    const elapsed = Date.now() - gameStartTime;\r\n    const minutes = Math.floor(elapsed / 60000);\r\n    const seconds = Math.floor((elapsed % 60000) / 1000);\r\n    document.getElementById('gameTime').textContent =\r\n        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;\r\n}\r\n\r\n// UI 헬퍼 함수들\r\nfunction showError(message) {\r\n    errorMessage.textContent = message;\r\n    errorMessage.style.display = 'block';\r\n    setTimeout(() => {\r\n        errorMessage.style.display = 'none';\r\n    }, 5000);\r\n}\r\n\r\nfunction showSuccess(message) {\r\n    // 성공 메시지는 에러 메시지 스타일을 재사용하되 색상만 변경\r\n    errorMessage.textContent = message;\r\n    errorMessage.style.display = 'block';\r\n    errorMessage.style.background = '#4CAF50';\r\n    setTimeout(() => {\r\n        errorMessage.style.display = 'none';\r\n        errorMessage.style.background = '#f44336';\r\n    }, 3000);\r\n}\r\n\r\nfunction showLoading() {\r\n    loadingMessage.style.display = 'block';\r\n}\r\n\r\nfunction hideLoading() {\r\n    loadingMessage.style.display = 'none';\r\n}\r\n\r\nfunction enableDifficultyButtons() {\r\n    document.querySelectorAll('.difficulty-controls button').forEach(btn => {\r\n        btn.disabled = false;\r\n    });\r\n}\r\n\r\nfunction disableDifficultyButtons() {\r\n    document.querySelectorAll('.difficulty-controls button').forEach(btn => {\r\n        btn.disabled = true;\r\n    });\r\n}\r\n\r\nfunction showGameInfo() {\r\n    gameInfo.classList.add('show');\r\n}\r\n\r\nfunction hideGameInfo() {\r\n    gameInfo.classList.remove('show');\r\n}\r\n\r\nfunction showCompletionMessage() {\r\n    const finalTime = document.getElementById('gameTime').textContent;\r\n    document.getElementById('finalTime').textContent = finalTime;\r\n    completionMessage.classList.add('show');\r\n}\r\n\r\nfunction hideCompletionMessage() {\r\n    completionMessage.classList.remove('show');\r\n}\r\n\r\n// 페이지 로드 시 첫 번째 프리셋 이미지 자동 선택\r\nwindow.addEventListener('load', () => {\r\n    const firstPreset = document.querySelector('.preset-image');\r\n    if (firstPreset) {\r\n        firstPreset.click();\r\n    }\r\n});\r\n\r\n\r\n// 디바운스 함수: 이벤트가 연속으로 발생할 때 마지막 이벤트만 처리하여 성능을 최적화합니다.\r\nfunction debounce(func, wait) {\r\n    let timeout;\r\n    return function executedFunction(...args) {\r\n        const later = () => {\r\n            clearTimeout(timeout);\r\n            func(...args);\r\n        };\r\n        clearTimeout(timeout);\r\n        timeout = setTimeout(later, wait);\r\n    };\r\n}\r\n\r\nfunction handleResize() {\r\n    if (!currentImageSrc) return; // 이미지가 없으면 실행하지 않음\r\n\r\n    // 1. 퍼즐 컨테이너의 최적 크기를 다시 계산\r\n    calculateOptimalSize();\r\n\r\n    // 2. 컨테이너들 크기 업데이트\r\n    puzzleContainer.style.width = `${puzzleWidth}px`;\r\n    puzzleContainer.style.height = `${puzzleHeight}px`;\r\n    piecesContainer.style.width = `${puzzleWidth}px`;\r\n    piecesContainer.style.minHeight = `${Math.max(400, puzzleHeight * 0.7)}px`;\r\n\r\n    // 게임이 시작된 경우에만 조각 크기 및 위치 재조정\r\n    if (pieces.length > 0) {\r\n        // 3. 조각의 새 너비와 높이 계산\r\n        pieceWidth = puzzleWidth / gridCols;\r\n        pieceHeight = puzzleHeight / gridRows;\r\n\r\n        // 4. 모든 조각의 크기와 위치 업데이트\r\n        pieces.forEach(piece => {\r\n            piece.style.width = `${pieceWidth}px`;\r\n            piece.style.height = `${pieceHeight}px`;\r\n\r\n            // 만약 조각이 이미 퍼즐 판에 맞춰진 상태('snapped')라면,\r\n            // 새 크기에 맞게 위치도 다시 계산해줍니다.\r\n            if (piece.classList.contains('snapped')) {\r\n                 // 저장된 행/열 인덱스로 새 위치를 정확히 계산\r\n                const newLeft = piece.dataset.col * PieceWidth;\r\n                const newTop = piece.dataset.row * PieceHeight;\r\n                piece.style.left = `${newLeft}px`;\r\n                piece.style.top = `${newTop}px`;\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n\r\n// 창 크기 변경 시 반응형 조정 (디바운스 적용)\r\nwindow.addEventListener('resize', debounce(handleResize, 250)); // 250ms 간격으로 실행\r\n\r\n// 페이지 로드 시 첫 번째 프리셋 이미지 자동 선택\r\nwindow.addEventListener('load', () => {\r\n    setPreviewImages();\r\n    const firstPreset = document.querySelector('.preset-image-container');\r\n    if (firstPreset) {\r\n        firstPreset.click();\r\n    }\r\n});\r\n\r\ndocument.querySelectorAll('.difficulty-controls button').forEach(button => {\r\n    button.addEventListener('click', () => {\r\n        const pieceCount = parseInt(button.dataset.difficulty);\r\n        startGame(pieceCount);\r\n    });\r\n});\r\n\r\ndocument.getElementById('closeCompletionMessage').addEventListener('click', hideCompletionMessage);\r\n\r\nfunction setPreviewImages() {\r\n    // 모든 .preset-image-container 요소를 가져옵니다.\r\n    document.querySelectorAll('.preset-image-container').forEach(container => {\r\n        // data-image 속성에서 이미지 키(예: 'space1')를 읽어옵니다.\r\n        const imageKey = container.dataset.image;\r\n        // 이미지 데이터베이스에서 해당 키의 정보를 찾습니다.\r\n        const imageData = imageDatabase[imageKey];\r\n\r\n        if (imageData) {\r\n            // 컨테이너 안의 <img> 태그를 찾습니다.\r\n            const imgElement = container.querySelector('.preset-image');\r\n            if (imgElement) {\r\n                // 웹팩이 처리한 올바른 이미지 경로(imageData.url)를 src 속성에 할당합니다.\r\n                imgElement.src = imageData.url;\r\n            }\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://jigso_puzzle/./src/index.js?\n}");

/***/ }),

/***/ "./src/puzzle-image.png":
/*!******************************!*\
  !*** ./src/puzzle-image.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"298dad648ccce0ac6710.png\";\n\n//# sourceURL=webpack://jigso_puzzle/./src/puzzle-image.png?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://jigso_puzzle/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;