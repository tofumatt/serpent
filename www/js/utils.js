"use strict";

define({
  // No one likes magic constants; map directions to readable constants here.
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
  LEFT: 4,
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
  },
  oppositeDirection: function(direction) {
    return direction + 2 > 4 ? direction - 2 : direction + 2;
  }
});
