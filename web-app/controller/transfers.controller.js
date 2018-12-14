app.controller("transfers", ["$scope", "$state", "$rootScope", "$http", "http", function($scope, $state, $rootScope, $http, http) {
    var vm = this;
    function loadUsers(){
        http.get('/users').then(function(data){
            vm.users = data.data;
        })
    }

    loadUsers();
    vm.fund = {};
    vm.transfer = function(){
        http.post('/payments', vm.fund).then(function(res) {
            if (res.status === 201) {
                var arrayDate = [moment.utc(res.data.createdAt).valueOf(),res.data.amount];
                vm.chartData.push(arrayDate);
                vm.paymentsTrans.push(res.data);
                alert("Suceess")
            } else if (res.status === 403) {
                
            }
        })
    }
    vm.chartData = [];
    vm.config = {};
    function loadFundHistory(){
        http.get('/payments').then(function(res) {
            vm.paymentsRec = res.data.paymentsRecived;
            vm.paymentsTrans = res.data.paymentsTransferred;
            vm.paymentsTrans.forEach(function(item){
                var arrayDate = [moment.utc(item.createdAt).valueOf(),item.amount];
                vm.chartData.push(arrayDate);
            });
        }).catch((error)=>{
            alert("Failed to fetch history");
        });
    }

    loadFundHistory();
}]);