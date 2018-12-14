app.controller("header", ["$scope", "$state", "$rootScope", function($scope, $state, $rootScope) {
    $rootScope.selectedValue = 'transfers';
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