angular.module("poopsquare").run(($rootScope, $state) => {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === 'AUTH_REQUIRED') {
      $state.go('poops');
    }
  });
});

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
        controller: 'PoopDetailsCtrl',
        resolve: {
          "currentUser": ($meteor) => $meteor.requireUser()
        }
      });

    $urlRouterProvider.otherwise("/poops");
  });
