angular.module('poopsquare').controller('PoopsListCtrl', ['$scope', function ($scope, $meteor) {
    $$scope.poops = $meteor.collection(Poops);
  }]);
