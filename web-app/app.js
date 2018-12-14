var app = angular.module('app', ['ui.router', 'ngMessages', 'ui.bootstrap', 'ngAutocomplete']);
var baseUrl = 'http://localhost:1337'; //Local System

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'views/login.html',
      controller: 'login'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'signup'
    })
    .state('transfers', {
      url: '/transfers',
      templateUrl: 'views/transfers.html',
    });
  $urlRouterProvider.otherwise('/login');
});
app.run([
  '$rootScope',
  '$state',
  '$timeout',
  function($rootScope, $state, $timeout) {
    $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
      $rootScope.authToken = localStorage.getItem('token');
      $timeout(function() {
        $rootScope.selectedValue = $state.$current.name.split('.')[0] || 'transfers';
        if ($rootScope.selectedValue === 'transfers') {
          $state.go($rootScope.selectedValue);
        }
      }, 0);
      var a = localStorage.getItem('token');
      if (a) {
        $rootScope.homeRoute = false;
      } else {
        event.preventDefault();
        if ($state.current.url !== '/signup') {
          $state.go('login');
        }else if($state.current.url === '/signup'){
          $state.go('signup');
        }
        $rootScope.homeRoute = true;
      }
    });
  }
]);
