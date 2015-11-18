/* WheelCapture 1.0  -- (c) 2015 Hugsmiðjan ehf. - MIT/GPL   @preserve */
!function(){"use strict";var e=document.body,n=0,o=0,t=0,d=0,i=0,u=function(){o=d,t=i,d=e.scrollTop,i=Date.now()},l=400,r={delay:l},s={on:function(){!n&&e.addEventListener("wheel",u,!0),n++},off:function(){n&&n--,!n&&e.removeEventListener("wheel",u,!0)},isOk:function(e){return n?o===d||Date.now()-t>(e&&e.delay||r.delay||l):void 0},settings:r};"undefined"!=typeof module&&module.exports?module.exports=s:window.WheelCapture=s}();

