// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';

import 'hammerjs';
import 'materialize-css/dist/js/materialize.js';
import emitter from 'tiny-emitter/instance';

import Card from 'card/card';

$(() => {

  // Expose loading functions for callback
  window.dnd = {};
  window.dnd.emitter = emitter;

  new Card();

  $('.js-start-game').on('click', function(){
    let $gameIntro = $('.game-intro'),
      $gameLoader = $('.game-loader');

    $gameIntro.addClass('fadeUp');
    setTimeout(function(){
      $gameIntro.hide();

      $gameLoader.show();
      $gameLoader.addClass('fadeIn');
    },500);

    window.AD.emitter.emit('dnd-game-start');
  });

});
