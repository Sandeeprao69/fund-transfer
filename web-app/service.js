app.factory('http', ['$http', "$q", "$rootScope", function($http, $q, $rootScope) {

    function get(val) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + val,
            headers: {
                'authorization': $rootScope.authToken
            },
            method: 'GET'
        }).then(function(resp) {
            deferred.resolve({
                status: resp.status,
                data: resp.data
            });
        }, function(resp) {
            deferred.resolve({
                status: resp.status,
                data: resp.data
            });
        });
        return deferred.promise;

    }

    function login(val, data) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + val,
            method: 'POST',
            data: data
        }).then(function(res) {
            deferred.resolve({
                status: res.status,
                data: res.data
            })
        }, function(res) {
            deferred.resolve({
                status: res.status,
                data: res.data
            })
        })
        return deferred.promise;
    }

    function post(val, postData) {
        var deferred = $q.defer();
        $http({
            url: baseUrl + val,
            method: 'POST',
            headers: {
                'authorization': $rootScope.authToken
            },
            data: postData
        }).then(function(res) {
            deferred.resolve({
                status: res.status,
                data: res.data
            })
        }, function(res) {
            alert('Cant update');
            deferred.resolve({
                status: res.status,
                data: res.data
            })
        })
        return deferred.promise;
    }

    return {
        get: get,
        login: login,
        post: post,
    }

}]);