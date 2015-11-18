/* WheelCapture 1.0  -- (c) 2015 Hugsmiðjan ehf. - MIT/GPL   @preserve */

// (c) 2015 Hugsmiðjan ehf  -- http://www.hugsmidjan.is
//  written by:
//   * Már Örlygsson        -- http://mar.anomy.net
//
// Dual licensed under a MIT licence (http://en.wikipedia.org/wiki/MIT_License)
// and GPL 2.0 or above (http://www.gnu.org/licenses/old-licenses/gpl-2.0.html).
// ----------------------------------------------------------------------------------

/* global module */
(function(){'use strict';
  var body = document.body;

  var _numOns = 0;

  var _wheelBurstStartElm;
  var tOut;
  var _logWheelThrottled = function (e) {
          if ( !tOut ) {
            _wheelBurstStartElm = e.target;
          }
          clearTimeout(tOut);
          tOut = setTimeout(function () {
              tOut = undefined;
            }, settings.delay || defaultDelay );
        };

  var defaultDelay = 400;
  var settings = {
          delay: defaultDelay,
        };

  var _lastCheckedStartElm;
  var _lastOkReturnVal;

  var WheelCapture = {

          on: function (opts) {
              if ( opts && opts.delay ) {
                settings.delay = opts.delay;
              }
              !_numOns  &&  body.addEventListener('wheel', _logWheelThrottled, true);
              _numOns++;
            },

          off: function () {
              _numOns  &&  _numOns--;
              !_numOns  &&  body.removeEventListener('wheel', _logWheelThrottled, true);
            },

          isOkFor: function (elm) {
              if ( _wheelBurstStartElm !== _lastCheckedStartElm ) {
                _lastCheckedStartElm = _wheelBurstStartElm;
                _lastOkReturnVal = elm.contains(_wheelBurstStartElm);
              }
              return _lastOkReturnVal;
            },

          settings: settings,

        };

  if ( typeof module !== 'undefined' && module.exports ) {
    module.exports = WheelCapture;
  } else {
    window.WheelCapture = WheelCapture;
  }

}());

