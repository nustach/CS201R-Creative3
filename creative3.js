var app = angular.module('myApp', []);
app.controller('budgetCtrl', function($scope) {
    $scope.rows = [];
    $scope.btotal = 0;
    $scope.atotal = 0;
	$scope.budgetAdd = function() {
        var b = Number($scope.budgeted);
        var a = Number($scope.current);
        $scope.rows.push({'category':$scope.category, 'budgeted': "$" + b, 'actual': "$" + a})
        	$scope.category = "";
		$scope.budgeted = "";
		$scope.current = "";
        $scope.btotal += b;
        $scope.atotal += a;
   	 };
});