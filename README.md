# WheelCapture 

Tiny utility to avoid capturing (cancelling) wheel-events
when users are using their mouse-wheel to scroll the page.

`WheelCapture.isOkFor( capturingElm );` returns `true` if the current 
burst (or sequence) of wheel-events started on `capturingElm` or an element within `capturingElm`.


## Install and Inclusion
 
```
npm install wheelcapture
```

WheelCapture is CommonJS (`require()`) friendly, using `module.exports` by default -- setting `window.WheelCapture` only as last resort.


## Configuration

You can control how many milliseconds must elapse for wheel-events to be considered separate/unconnected events.

```js
var WheelCapture = require('wheelcapture');

WheelCapture.settings.delay = 400; // 400ms is the default
```


## Usage

React example:

```js
componentDidMount: function () {
    WheelCapture.on();
  },

componentWillUnmount: function () {
    WheelCapture.off();
  },

onWheelHandler: function (e) {
    var capturingElm = this;
    if ( WheelCapture.isOkFor(capturingElm) ) {
      e.preventDefault();
      doTimelineShift();
    }
  },
```


