app.controller("login", ["$scope", "$state", "$rootScope", "$http", "http", function($scope, $state, $rootScope, $http, http) {
    $scope.loginAttempt = function(email, pass) {
        http.login('/users/login', {email:email, password:pass}).then(function(res) {
            if (res.status === 200) {
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
    },
    $scope.locationchange = function(val) {
        $rootScope.selectedValue = val;
        $state.go(val);
        if (val == 'logout') {
            $rootScope.homeRoute = true;
            $state.go('login');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
}]);