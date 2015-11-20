angular.module('poopsquare').controller('PoopsListCtrl', function ($scope, $meteor) {
    $$scope.poops = $meteor.collection(Poops);
  });
