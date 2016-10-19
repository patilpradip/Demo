var app = angular.module("precisionag", ['ng-draggable-widgets','ngSanitize','ngMap']);

app.controller("DashboardController", ['$scope', '$http', '$sce', 'NgMap', function ($scope, $http, $sce, NgMap) {
    var widgets = [
    {
        title: 'Socks on Sticks',
        class: 'socks'
    }];

    $scope.widgets = widgets;
    $scope.paths = "[[28.646359, 77.259623],[28.645153, 77.207438],[28.680098, 77.120921],[28.680098, 77.259623]]";
    $scope.moveWidget = function (drag) {
        console.log(drag);
    }

    $scope.GoToMap = function () {
        $http.get('/Dashboard/FarmSelection').then(function (response) {
            $scope.mapDiv = $sce.trustAsHtml(response.data);
        });
    }

    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

    $scope.onMapOverlayCompleted = function (e) {
        if (e.type == google.maps.drawing.OverlayType.MARKER) {
            var pos = e.overlay.getPosition();
            alert(pos.toString());
        }
    };

}]);