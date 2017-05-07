(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('Dots', factory) :
  (global.Dots = factory());
}(this, (function () { 'use strict';

// 참조: https://gist.github.com/gre/1650294

var _easeIn = function _easeIn(p) {
  return function (t) {
    return Math.pow(t, p);
  };
};
var _easeOut = function _easeOut(p) {
  return function (t) {
    return 1 - Math.abs(Math.pow(t - 1, p));
  };
};
var _easeInOut = function _easeInOut(p) {
  return function (t) {
    return t < .5 ? _easeIn(p)(t * 2) / 2 : _easeOut(p)(t * 2 - 1) / 2 + 0.5;
  };
};

// no easing, no acceleration
var linear = _easeInOut(1);

// accelerating from zero velocity
var easeIn = _easeIn(2);

// decelerating to zero velocity
var easeOut = _easeOut(2);

// acceleration until halfway, then deceleration
var easeInOut = _easeInOut(2);

// accelerating from zero velocity 
var easeInCubic = _easeIn(3);

// decelerating to zero velocity 
var easeOutCubic = _easeOut(3);

// acceleration until halfway, then deceleration 
var easeInOutCubic = _easeInOut(3);

// accelerating from zero velocity 
var easeInQuart = _easeIn(4);

// decelerating to zero velocity 
var easeOutQuart = _easeOut(4);

// acceleration until halfway, then deceleration
var easeInOutQuart = _easeInOut(4);

// accelerating from zero velocity
var easeInQuint = _easeIn(5);

// decelerating to zero velocity
var easeOutQuint = _easeOut(5);

// acceleration until halfway, then deceleration 
var easeInOutQuint = _easeInOut(5);

var easingFn = Object.freeze({
	linear: linear,
	easeIn: easeIn,
	easeOut: easeOut,
	easeInOut: easeInOut,
	easeInCubic: easeInCubic,
	easeOutCubic: easeOutCubic,
	easeInOutCubic: easeInOutCubic,
	easeInQuart: easeInQuart,
	easeOutQuart: easeOutQuart,
	easeInOutQuart: easeInOutQuart,
	easeInQuint: easeInQuint,
	easeOutQuint: easeOutQuint,
	easeInOutQuint: easeInOutQuint
});

function noop() {}

var getPrefixed = function getPrefixed(name) {
  return window['webkit' + name] || window['moz' + name] || window['ms' + name];
};
var requestAnimationFrame = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || function (callback) {
  return setTimeout(callback, 1000 / 60);
};
var cancelAnimationFrame = window.cancelAnimationFrame || getPrefixed('RequestAnimationFrame') || function (timerId) {
  return window.clearTimeout(timerId);
};

var Dots = {};

return Dots;

})));
