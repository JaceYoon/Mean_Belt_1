app.controller('userController', function($scope, userFactory){

    $scope.errors = []
    $scope.curUser = null
    userFactory.getUser(function(data){
      $scope.curUser = data
    })
    $scope.login = function(){
      $scope.errors = []
      if(!$scope.LogReg || !$scope.LogReg.name){
        $scope.errors.push('Please enter your name')
      }
      else if($scope.LogReg.name.length < 3){
        $scope.errors.push('Your name is too short')
      }
      else if($scope.LogReg.name.length > 8){
        $scope.errors.push('Your name is too long')
      }
      else{
        userFactory.login($scope.LogReg)
      }
    }

})
