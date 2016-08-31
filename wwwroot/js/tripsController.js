// tripsController.js
(function () {

    "use strict";

    angular.module("app-trips")
        .controller("tripsController", tripsController);

    function tripsController($http) {

        var vm = this;

        vm.trips = [];

        vm.newTrip = {};

        vm.errorMessage = "";
        vm.isBusy = true;

        $http.get("/api/trips")
            .then(function (response) {
                // success
                angular.copy(response.data, vm.trips);
            }, function (error) {
                // failure
                vm.errorMessage = "Failed to load data: " + error;
            })
            .finally(function () {
                vm.isBusy = false;
            });

        vm.addTrip = function () {
            
            vm.isBusy = true;
            vm.errorMessage = "";
            $http.post("/api/trips", vm.newTrip)
                .then(function (response) {
                    //success
                    vm.trips.push(response.data);
                    vm.newTrip = {};
                }, function () {
                    //failure
                    vm.errorMessage = "Failed to save new Trip";
                })
                .finally(function () {
                    vm.isBusy = false;
                });
        };


    }
})();