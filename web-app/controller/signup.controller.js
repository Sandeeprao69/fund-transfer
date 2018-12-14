app.controller("signup", ["$scope", "$state", "$rootScope", "$http", "http", function($scope, $state, $rootScope, $http, http) {
    var vm = this;
    vm.signup = function(user) {
        http.post('/users', user).then(function(res) {
            if (res.status === 201) {
                $rootScope.homeRoute = false;
                $state.go('transfers');
                $scope.codeError = false;
                var token = res.data.token;
                $rootScope.authToken = token;
                localStorage.setItem('token', token);
                localStorage.setItem('user', res.data.user);
            } else if (res.status === 403) {
                $state.go('logout');
                $state.go('login');
                $rootScope.homeRoute = true;
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                $scope.codeError = true;
                $scope.errorMsg = res.data.errors;
            }
        })
    }
}]);