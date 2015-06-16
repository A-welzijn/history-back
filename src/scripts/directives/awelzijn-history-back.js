'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.historyback');
  } catch (e) {
    module = angular.module('awelzijn.historyback', []);
  }
  module.directive('aWelzijnHistoryBack', ['$window', function ($window) {
    return {
      restrict: 'E',
      replace: true,
      link: function ($scope) {

        $scope.terug = function () {
          $window.history.back();
        }
      },
      template:
      '<div ng-click="terug()" class="back-btn">' +
      '<p>' +
      '<i class="fa fa-angle-left"></i>' +
      '</p>' +
      '</div>',
    };
  }]);
})();
