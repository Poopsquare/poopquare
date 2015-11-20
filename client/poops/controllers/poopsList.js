angular.module('poopsquare').controller('PoopsListCtrl', ($scope, $meteor) => {
    $scope.poops = $meteor.collection(Poops)

    $scope.remove = (poop) => $scope.poops.remove(poop)

    $scope.removeAll = () => $scope.parties.remove()
  });
