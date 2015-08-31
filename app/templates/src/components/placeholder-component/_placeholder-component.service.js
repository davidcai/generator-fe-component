(function() {
  'use strict';

  angular
    .module('<%= compModuleName %>')
    .factory('<%= compModuleName %>Service', <%= compModuleName %>Service)
  ;


  function <%= compModuleName %>Service() {

    var MIN = 1;
    var MAX = 8;
    var step = MIN;

    return {
      getMin: getMin,
      getMax: getMax,
      grow: grow,
      shrink: shrink
    };


    function getMin() {
      return MIN;
    }


    function getMax() {
      return MAX;
    }


    function grow() {
      if (step < MAX) {
        ++step;
      }

      return step;
    }


    function shrink() {
      if (step > MIN) {
        --step;
      }

      return step;
    }

  }

})();
