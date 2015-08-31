'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('<%= demoModuleName %>'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should start from step 1', inject(function($controller) {
    expect(scope.labels).toBeUndefined();

    $controller('DemoCtrl', {
      $scope: scope
    });

    expect(scope.labels.length === 8).toBeTruthy();
    expect(scope.step === 1).toBeTruthy();
  }));
});
