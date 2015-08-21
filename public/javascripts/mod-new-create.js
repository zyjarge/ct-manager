/**
 * Created by zhangyong on 2015/8/19.
 */

var app = angular.module('myApp', []);

app.controller('ctl_create_new', function ($scope) {

    $scope.contentTracking = {
        selectedType: "order",
        startDate: "",
        endDate: ""
    };

    $scope.getList = function () {

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
        console.log("submit");
    };
});