(function(window) {
  "use strict";
  
  // animate 구현 참고
  // https://github.com/nhnent/tui.component.animation/blob/master/src/anim.js

  var Dots = {
    init: function(targetElement, option) {
      this._behindDotsStage = targetElement;
      this._behindDotsStageContext = targetElement.getContext('2d');
      
      this._behindDots = [];
      this._frontDots = [];
      this._circleRadius = 2;

      this.option = option;
      this._behindDotsStage.style.backgroundColor = this.option.background;

      this._createFrontDotsStage(targetElement);
      this._on();
      this._onResize();
      this._createDots();
      this._loop();
    },
    _createFrontDotsStage: function(targetElement) {
      var parentElement = targetElement.parentElement;
      var canvas = document.createElement('<canvas></canvas>');

      this._frontDotsStage = canvas;
      this._frontDotsStageContext = canvas.getContext('2d');

      parentElement.appendChild(canvas);
    },
    _on: function() {
      window.addEventListener('resize', this._onResize.bind(this));
    },
    _onResize: function() {
      this._behindDotsStageWidth = this._behindDotsStage.width = this.option.width;
      this._behindDotsStageHeight = this._behindDotsStage.height = this.optino.height;
      this._behindDotsStageCenterX = this._behindDotsStageWidth / 2;
      this._behindDotsStageCenterY = this._behindDotsStageHeight / 2;

      this._frontDotsStageWidth = this._frontDotsStage.width = this._behindDotsStageWidth;
      this._frontDotsStageHeight = this._frontDotsStage.height = this._behindDotsStageHeight;
      this._frontDotsStageOffsetX = (this._behindDotsStageWidth - this._frontDotsStageWidth) / 2;
      this._frontDotsStageOffsetY = (this._behindDotsStageHeight - this._frontDotsStageHeight) / 2;
    },
    _createDots: function() {
      var dot;
      var i;

      this._behindDots.length = 0;

      for (i = 0; i < this.option.maxDotCount; i++) {
        dot = {};
        this._behindDots.push(dot);
        this._animateDot(dot);
      }
    },
    loop: function() {
      var i;

      this._behindDotsStageContext.clearRect(0, 0, this._behindDotsStageWidth, this._behindDotsStageHeight);

      for (i = 0; i < this._behindDots.length; i++) {
        this._behindDots[i].draw();
      }

      window.requestAnimationFrame(this.loop.bind(this));
    },
    _drawText: function(text) {

    },
    _drawImage: function(image) {

    },
    _draw: function() {

    },
    breakText: function() {
      
    },
    animateDot: function(dot, pos, type) {
    },
    randomNumber: function(min, max) {
      
    },
    doSenario: function(scenario, isRepeat) {
      
    },
    _doPart: function(scenario, index, isRepeat) 
    {
    }
  };

  window.ds = Dots;
})(window);
