/**
 * Created by zhangyong on 2015/8/19.
 */

var app = angular.module('ct-manager', []);

app.controller('ctl_create_new', function ($scope,$http) {

    $scope.contentTracking = {
        selectedType: "order",
        startDate: "",
        endDate: ""
    };

    $scope.setOrder = function () {
        $scope.contentTracking.selectedType = "order";
    };

    $scope.setAdvertiser = function () {
        $scope.contentTracking.selectedType = "advertiser";
    };

    $scope.getOrderCssClass = function () {
        if ($scope.contentTracking.selectedType === "order") {
            return "btn-success";
        }
        return "btn-default";
    };

    $scope.getAdvertiserCssClass = function () {
        if ($scope.contentTracking.selectedType === "advertiser") {
            return "btn-success";
        }
        return "btn-default";
    };

    $scope.getPlaceholder = function () {
        if ($scope.contentTracking.selectedType === "order") {
            return "订单的名称";
        }

        if ($scope.contentTracking.selectedType === "advertiser") {
            return "广告主的名称";
        }
    };

    $scope.submit_form = function () {
        console.log($scope.contentTracking);
        $http.post('/addNewRecord', $scope.contentTracking).then(console.log("success return"));
    };
});

app.controller('ctl_ct_list', function ($scope, $http) {
    $http.get("/getAllRecords")
        .success(function (response) {
            $scope.ctList = response;
        });
});