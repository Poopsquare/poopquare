
angular.module("poopsquare").controller("PoopDetailsCtrl",($scope, $stateParams, $meteor) => {
    $scope.poop = $meteor.object(Poops, $stateParams.poopId)

    $scope.save = () => {
      $scope.poop.save().then((numberOfDocs) => {
        console.log('save success doc affected ', numberOfDocs);
      }, (error) => console.log('save error', error)
     )
    }

    $scope.reset = () => $scope.poop.reset();
});
