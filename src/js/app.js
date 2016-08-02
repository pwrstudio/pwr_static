/*jslint browser: true, devel: true, node: true, nomen: true, plusplus: true*/
/*global $, jQuery*/

(function () {

  "use strict";

  // Require jQuery
  global.$ = require("jquery");

  require('browsernizr/test/audio/webaudio');
  require('browsernizr/test/websockets');
  var Modernizr = require('browsernizr');

  function updateViews(data) {

    $('#screen-one')
      .find('img')
      .attr('src', data.state[0].URL);

    $('#screen-two')
      .find('img')
      .attr('src', data.state[1].URL);

    $('#screen-three')
      .find('img')
      .attr('src', data.state[2].URL);

    $('#screen-four')
      .find('img')
      .attr('src', data.state[3].URL);

  }

  $(function () {

    console.log("READY");

    // var socketServer = 'http://192.168.0.65:5000';
    var socketServer = 'https://glacial-reaches-83593.herokuapp.com';

    var socket = io(socketServer, {
      'transports': ['websocket', 'polling']
    });

    console.log(socket);

    socket.on('connect', function () {
      console.log('Socket connected');
    });

    socket.on('init', function (data) {
      console.log('&&&&&&INIT');
      updateViews(data);
    });

    socket.on('cut', function (data) {
      console.log(data.state);
      updateViews(data);
    });

    socket.on('disconnect', function () {
      console.log('Socket disconnected');
    });

  });

}());