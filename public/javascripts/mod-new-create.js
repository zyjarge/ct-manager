/**
 * Created by zhangyong on 2015/8/19.
 */


var app = angular.module('myApp', []);

app.controller('ctl_create_new', function($scope) {
    $scope.selectedType="order";

    $scope.setOrder = function(){
        $scope.selectedType="order";
    }

    $scope.setAdvertiser = function(){
        $scope.selectedType="advertiser";
    }

    $scope.getOrderCssClass= function () {
        //return{
        //    btn-primary: $scope.selectedType=="order",
        //    btn-default: $scope.selectedType!="order"
        //};
        if($scope.selectedType==="order"){return "btn-primary";}
        return "btn-default";
    }

    $scope.getAdvertiserCssClass = function () {
        if($scope.selectedType==="advertiser"){return "btn-primary";}
        return "btn-default";
    }

    $scope.getPlaceholder = function () {
        if($scope.selectedType==="order"){
            return "订单的名称";
        }

        if($scope.selectedType==="advertiser"){
            return "广告主的名称";
        }
    }
    
});