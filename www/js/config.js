"use strict";

define(function(require) {
  var $ = require('zepto');
  var ls = window.localStorage;
  var maxspeed = 10;
  var minspeed = 1;
  var speed = parseInt(ls.speed, 10);
  var utils = require('utils');

  if (!(speed >= minspeed && speed <= maxspeed)) {
    speed = 5;
  }

  function changeSpeed(delta) {
    speed = Math.max(minspeed, Math.min(maxspeed, speed + parseInt(delta, 10)));
    ls.speed = speed;
    $('#speed').text(speed);
  }
  changeSpeed(0); // initialize

  function speedControls(e) {
    e.preventDefault();
    changeSpeed($(e.currentTarget).data('delta'));
  }

  $('.changespeed').on('touchend click', speedControls);
  $('.changespeed').on('touchstart', utils.clickBust);

  return {
    getSpeed: function() {
      return speed;
    }
  };
});
