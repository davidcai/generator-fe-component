(function() {
  'use strict';

  angular
    .module('<%= demoModuleName %>')
    .controller('DemoCtrl', DemoCtrl)
  ;


  function DemoCtrl($scope, $log, <%= compModuleName %>Service) {
    $log.log('DemoCtrl');

    $scope.labels = [
      'Plant a seed',
      'Pour water',
      'Enrich the soil',
      'More water',
      'Keep it warm',
      'Almost there',
      'Cast a spell',
      'Sprouted!'
    ];

    $scope.step = <%= compModuleName %>Service.getMin();

    $scope.shrink = function() {
      $scope.step = <%= compModuleName %>Service.shrink();
    };

    $scope.grow = function() {
      $scope.step = <%= compModuleName %>Service.grow();
    };
  }

})();
