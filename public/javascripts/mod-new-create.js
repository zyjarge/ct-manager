/**
 * Created by zhangyong on 2015/8/19.
 */

var app = angular.module('ct-manager', []);

app.controller('newContentTrackingController', function ($scope, $http) {

    $scope.contentTracking = {
        type: "order",
        start_date: "",
        end_date: ""
    };

    $scope.setOrder = function () {
        $scope.contentTracking.type = "order";
    };

    $scope.setAdvertiser = function () {
        $scope.contentTracking.type = "customer";
    };

    $scope.getPlaceholder = function () {
        if ($scope.contentTracking.type === "order") {
            return "订单的名称";
        }

        if ($scope.contentTracking.type === "customer") {
            return "广告主的名称";
        }
    };

    $scope.submit_form = function () {
        console.log($scope.contentTracking);
        $http.post('/addNewRecord', $scope.contentTracking).then(console.log("success return"));
    };

    $scope.deleteCtRecord = function (ct) {
        //$http.post('/deleteCTRecord', ct).then(console.log("deleted success."));
        console.log(ct.id);
    }
});

app.controller('ContentTrackingListController', function ($scope, $http) {
    $http.get("/getAllRecords")
        .success(function (response) {
            $scope.ctList = response;
            console.info(response);
        });
});