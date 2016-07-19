
module
	.controller("TableCtrl", TableCtrl);
	
	TableCtrl.$inject = [
		'$scope',
		'usersProvider'
	];

	function TableCtrl($scope, usersProvider) {
		$scope.init = function () {
			$scope.data = {};
			$scope.data = usersProvider.getUsers();
		};

		$scope.addNewUser = function () {
			if (angular.isDefined($scope.data) &&
                angular.isDefined($scope.data.newUser.name) &&
                angular.isDefined($scope.data.newUser.surname) && 
                angular.isDefined($scope.data.newUser.email) ) {
    
    	            $scope.data.usersArray.push({
                        name: $scope.data.newUser.name,
                        surname: $scope.data.newUser.surname,
                        email: $scope.data.newUser.email,
                        phone: $scope.data.newUser.phone
                    });
    	        	$scope.data.newUser = undefined;
                }
		}

		$scope.getWinner = function () {
			if (angular.isDefined($scope.data.usersArray)){
				var random = getRandom(0, $scope.data.usersArray.length - 1);
				$scope.data.winner = $scope.data.usersArray[random];
			}
		}

		function getRandom(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		}

		$scope.getWinnerName = function () {
			if (angular.isDefined($scope.data.winner)){
				return "" + $scope.data.winner.name + " " + $scope.data.winner.surname + " " + $scope.data.winner.phone;
			} else {
				return "....";
			}
		}
	};