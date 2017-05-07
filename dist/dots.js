(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('Dots', ['exports'], factory) :
  (factory((global.Dots = global.Dots || {})));
}(this, (function (exports) { 'use strict';

var Animate = {
  foo: 'bar'
};

var Dots = {
  obj: Animate
};

exports.Dots = Dots;

Object.defineProperty(exports, '__esModule', { value: true });

})));
