angular.module('poopsquare').config(($urlRouterProvider, $stateProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('poops', {
        url: '/poops',
        templateUrl: 'client/poops/views/poops-list.html',
        controller: 'PoopsListCtrl'
      })
      .state('poopDetails', {
        url: '/poops/:poopId',
        templateUrl: 'client/poops/views/poop-details.html',
        controller: 'PoopDetailsCtrl'
      });

    $urlRouterProvider.otherwise("/poops");
  });
