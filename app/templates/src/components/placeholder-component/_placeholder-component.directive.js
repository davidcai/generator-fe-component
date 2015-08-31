(function() {
  'use strict';

  angular
    .module('<%= compModuleName %>')
    .directive('<%= compModuleName %>', <%= compModuleName %>)
  ;


  function <%= compModuleName %>(<%= compModuleName %>Service) {

    var MIN = <%= compModuleName %>Service.getMin();
    var MAX = <%= compModuleName %>Service.getMax();

    return {
      restrict: 'A',
      replace: true,
      scope: {
        step: '='
      },
      templateUrl: 'components/<%= compName %>/<%= compName %>.html',
      link: link
    };


    function link(scope) {
      scope.$watch('step', function(newVal, oldVal) {
        if (newVal !== oldVal) {

          if (newVal < MIN) {
            scope.step = MIN;
          }
          else if (newVal > MAX) {
            scope.step = MAX;
          }
        }
      });
    }

  }

})();
