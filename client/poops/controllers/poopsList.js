angular.module('poopsquare').controller('PoopsListCtrl', function ($scope, $meteor) {
    $scope.poops = $meteor.collection(Poops);

    $scope.remove = function(poop){
      $scope.poops.splice($scope.poops.indexOf(poop), 1);
    };
  });
