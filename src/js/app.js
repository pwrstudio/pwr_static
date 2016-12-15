'use strict'

global.$ = require("jquery")

const Vue = require('vue')
const shared = require('./shared')

//  require("swiper");
//  require("fullpage.js");

// Modernizr tests
// require('browsernizr/test/webgl');
// require('browsernizr/test/workers/webworkers');
// require('browsernizr/test/webrtc/peerconnection');
// require('browsernizr/test/storage/localstorage');
// require('browsernizr/test/audio/webaudio');
// require('browsernizr/test/websockets');
// var Modernizr = require('browsernizr');

var main = new Vue({
  el: '#header',
  data: {
    text: 'PWR STATIC',
    classObject: {
      active: true
    }
  },
  mounted: function () {
    console.log('-- vue ready')
  }
})

$(function () {
  console.log("-- jQuery ready")
})


//    var swiper = new Swiper('.swiper-container', {
//      speed: 1000
//      autoplay: 40
//    })
