angular.module('v2App', ['n3-line-chart', 'apojop'])

.controller('AppCtrl', function($scope, $sce, $http) {
  // mixpanel.track("V2");

  $scope.data = {
    dataset0: [
      {x: 0, val_0: 0, val_1: 0, val_2: 0, val_3: 0},
      {x: 1, val_0: 0.993, val_1: 3.894, val_2: 8.47, val_3: 14.347},
      {x: 2, val_0: 1.947, val_1: 7.174, val_2: 13.981, val_3: 19.991},
      {x: 3, val_0: 2.823, val_1: 9.32, val_2: 14.608, val_3: 13.509},
      {x: 4, val_0: 3.587, val_1: 9.996, val_2: 10.132, val_3: -1.167},
      {x: 5, val_0: 4.207, val_1: 9.093, val_2: 2.117, val_3: -15.136},
      {x: 6, val_0: 4.66, val_1: 6.755, val_2: -6.638, val_3: -19.923},
      {x: 7, val_0: 4.927, val_1: 3.35, val_2: -13.074, val_3: -12.625}
    ]
  };

  $scope.options = {
    series: [
      {
        axis: "y",
        dataset: "dataset0",
        key: "val_0",
        label: "A first series",
        color: "#1f77b4",
        type: ["dot", "line"],
        id: 'mySeries0'
      },
      {
        axis: "y",
        dataset: "dataset0",
        key: "val_1",
        label: "Another series",
        color: "grey",
        thickness: "1px",
        type: "dot",
        id: 'mySeries1'
      }
    ],
    axes: {x: {key: "x"}}
  };

})

.controller('menuCtrl', function($scope, $location) {
  $scope.isActive = function(route) {
    return $location.path() === route;
  };
})

;