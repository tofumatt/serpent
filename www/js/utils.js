"use strict";

define({
  clickBust: function(e) {
    e.preventDefault();
    e.stopPropagation();
  },
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  isTouch: function() {
    var touch = !!('ontouchstart' in window);
    if (!arguments || arguments.length < 1) {
      return touch;
    } else {
      return touch ? arguments[0] : arguments[1];
    }
  }
});
