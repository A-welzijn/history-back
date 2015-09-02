'use strict';
(function (module) {
    try {
        module = angular.module('awelzijn.historyback');
    } catch (e) {
        module = angular.module('awelzijn.historyback', []);
    }
    module.directive('aWelzijnHistoryBack', ['$window', '$timeout', function ($window, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                ngClick: '&' //Word opgeroepen wanneer vlak voor het teruggaan
            },
            link: function ($scope, $element, $attrs) {

                $scope.terug = function () {
                    if ($attrs["ngClick"]) {
                        if ($scope.ngClick) {
                            $timeout(function () {
                                $scope.$apply($scope.ngClick());
                            }, 0, false);
                        }
                    }
                    $window.history.back();
                }
            },

            template:

        '<div class="back-btn">' +
        '<p ng-click="terug()">' +
        '<i class="fa fa-angle-left"></i>' +
        '</p>' +
        '</div>',
        };
    }]);
})();
;