!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=function(e,n){this.channel=e,this.event=n},o=function(){function e(e,n){this.port=e,this.channel=n}return e.prototype.publish=function(e){this.port.postMessage(new r(this.channel,e))},e}(),i=function(){function e(e,n){this.portName=e,this.channel=n}return e.prototype.subscribe=function(e){var n=this;chrome.runtime.onConnect.addListener(function(t){t.name===n.portName&&t.onMessage.addListener(function(t){t.channel===n.channel&&e(t.event)})})},e}(),u=function(){function e(n){e.port||(e.port=chrome.runtime.connect({name:"sfx"})),this.publisher=new o(e.port,n),this.subscriber=new i(e.port.name,n)}return e.prototype.subscribe=function(e){this.subscriber.subscribe(e)},e.prototype.publish=function(e){this.publisher.publish(e)},e}();console.log("hello 5"),new u("data").subscribe(function(e){console.log(e)}),new u("test").publish("pub-sub to content works!!!")}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYW5uZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImNoYW5uZWwiLCJldmVudCIsInRoaXMiLCJwb3J0IiwicHVibGlzaCIsInBvc3RNZXNzYWdlIiwiTWVzc2FnZSIsInBvcnROYW1lIiwic3Vic2NyaWJlIiwiY2FsbGJhY2siLCJjaHJvbWUiLCJydW50aW1lIiwib25Db25uZWN0IiwiYWRkTGlzdGVuZXIiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlIiwiQ2hhbm5lbCIsImNvbm5lY3QiLCJwdWJsaXNoZXIiLCJQdWJsaXNoZXIiLCJzdWJzY3JpYmVyIiwiU3Vic2NyaWJlciIsImNvbnNvbGUiLCJsb2ciLCJqIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FB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UUFDNUJSLFVBQVUsU0FBU1AsR0FDMUJxQixRQUFRQyxJQUFJdEIsS0FHRyxJQUFJZSxFQUFnQixRQUM1QlosUUFBUSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY2xhc3MgTWVzc2FnZSB7XHJcbiAgcHVibGljIGNoYW5uZWw6IHN0cmluZztcclxuICBwdWJsaWMgZXZlbnQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2hhbm5lbDogc3RyaW5nLCBldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xyXG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUHVibGlzaGVyPFQ+IHtcclxuICBwcml2YXRlIHBvcnQ6IGNocm9tZS5ydW50aW1lLlBvcnQ7XHJcbiAgcHJpdmF0ZSBjaGFubmVsOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwb3J0OiBjaHJvbWUucnVudGltZS5Qb3J0LCBjaGFubmVsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHB1Ymxpc2goZXZlbnQ6IFQpIHtcclxuICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZShuZXcgTWVzc2FnZSh0aGlzLmNoYW5uZWwsIGV2ZW50KSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBTdWJzY3JpYmVyPFQ+IHtcclxuICBwcml2YXRlIHBvcnROYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjaGFubmVsOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwb3J0TmFtZTogc3RyaW5nLCBjaGFubmVsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucG9ydE5hbWUgPSBwb3J0TmFtZTtcclxuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3Vic2NyaWJlKGNhbGxiYWNrOiB7IChldmVudDogVCk6IHZvaWQgfSkge1xyXG4gICAgY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKChwb3J0OiBjaHJvbWUucnVudGltZS5Qb3J0KSA9PiB7XHJcbiAgICAgIGlmIChwb3J0Lm5hbWUgIT09IHRoaXMucG9ydE5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuY2hhbm5lbCAhPT0gdGhpcy5jaGFubmVsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UuZXZlbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5uZWw8VD4ge1xyXG4gIHByaXZhdGUgc3RhdGljIHBvcnQ6IGNocm9tZS5ydW50aW1lLlBvcnQ7XHJcbiAgcHJpdmF0ZSBwdWJsaXNoZXI6IFB1Ymxpc2hlcjxUPjtcclxuICBwcml2YXRlIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNoYW5uZWw6IHN0cmluZykge1xyXG4gICAgaWYgKCFDaGFubmVsLnBvcnQpIHtcclxuICAgICAgQ2hhbm5lbC5wb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6ICdzZngnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHVibGlzaGVyID0gbmV3IFB1Ymxpc2hlcjxUPihDaGFubmVsLnBvcnQsIGNoYW5uZWwpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXI8VD4oQ2hhbm5lbC5wb3J0Lm5hbWUsIGNoYW5uZWwpO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlKGNhbGxiYWNrOiB7IChldmVudDogVCk6IHZvaWQgfSkge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVyLnN1YnNjcmliZShjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaXNoKGV2ZW50OiBUKSB7XHJcbiAgICB0aGlzLnB1Ymxpc2hlci5wdWJsaXNoKGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbm5lbCB9IGZyb20gJy4uL2NoYW5uZWwnO1xyXG5cclxuY29uc3QgaTogbnVtYmVyID0gNTtcclxuY29uc3Qgajogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbmNvbnNvbGUubG9nKGAke2p9ICR7aX1gKTtcclxuXHJcbi8vIGNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihwb3J0OiBjaHJvbWUucnVudGltZS5Qb3J0KSB7XHJcbi8vICAgaWYgKHBvcnQubmFtZSAhPT0gJ2RhdGFTZXJ2aWNlcycpIHJldHVybjtcclxuXHJcbi8vICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24obXNnOiBhbnkpIHtcclxuLy8gICAgIGlmIChtc2cuY2hhbm5lbCA9PT0gJ3VwZGF0ZScpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2cobXNnLm1lc3NhZ2UpO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgY29uc29sZS5sb2cobXNnLmNoYW5uZWwpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHhDaGFubmVsID0gbmV3IENoYW5uZWw8c3RyaW5nPignZGF0YScpO1xyXG54Q2hhbm5lbC5zdWJzY3JpYmUoZnVuY3Rpb24oZXZlbnQ6IHN0cmluZykge1xyXG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcclxufSlcclxuXHJcbmNvbnN0IHlDaGFubmVsID0gbmV3IENoYW5uZWw8c3RyaW5nPigndGVzdCcpO1xyXG55Q2hhbm5lbC5wdWJsaXNoKCdwdWItc3ViIHRvIGNvbnRlbnQgd29ya3MhISEnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==