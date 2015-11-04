var saveDeadGuy = function(){
	console.log(stats)
	window.location.href = stats.deadguylink + '&money=' + stats.money + '&picture=' + stats.picture + '&sex=' + stats.sex + '&cause=' + stats.cause + '&inventorystuff=' + stats.inventorystuff
	// for each new property, + '&prop=' + stats.prop
	// ?prop1=dog&prop2=cat&prop3=bird
}

angular.module('characterApp', [])

angular.module('characterApp')
	.controller('characterController', ['$scope', '$http', function($scope, $http){

			$http.get('/api/me')
				.then(function(returnData){
					if(!returnData.data){

						// if not logged in, force back to home page
						// window.location.href="/"
						
					}
					
					$scope.user = returnData.data

				})

			$http.post('/api/savedGames')
				.then(function(returnData){
				  $scope.savedGames = returnData.data	
				})
				
				$scope.createCharacter = function(){
					http.post('/api/savedGames', $scope.newCharacter)
					 .then(function(returnData){
					 	console.log('Character sucessfully saved', returnData)

					 })
				}

$scope.imager = [
"/backimages/background1.gif",
"/backimages/background2.gif",
"/backimages/background3.gif",
"/backimages/background4.gif",
"/backimages/background5.gif",
"/backimages/background6.gif",
"/backimages/background7.png",
"/backimages/background8.gif",
"/backimages/background9.gif",
"/backimages/background10.png",
"/backimages/background11.png",
"/backimages/background12.png",
"/backimages/background13.png",
"/backimages/background14.png",
"/backimages/background15.png",
"/backimages/background16.png",
"/backimages/background17.png",
"/backimages/background18.png",
"/backimages/background19.png",
"/backimages/background20.png",
"/backimages/background21.png"
]

$scope.images = (function(event) {
	$scope.r = $scope.imager[Math.floor(Math.random()* $scope.imager.length )]

})();




  $scope.newUser = true;

  // Toggles the button
  $scope.newUserToggle = function() {

    $scope.newUser = !$scope.newUser;

  };






	}])