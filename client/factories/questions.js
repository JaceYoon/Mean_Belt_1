app.factory('questionFactory', function($http,$location,$route){
  var factory = {}

  factory.getQuestions = function(callback){
    $http.get('/getquestions').then(function(output){
      questions = output.data
      callback(questions)
    })
  }

  factory.create = function(question){
      $http.post('/create', question).then(function(output){
        if(output.data){
          $location.url('/dash')
        }
      })
  }

  factory.show = function(id){
    $location.url('/show' + id)
  }

  factory.delete = function(id){
    $http.get('/delete/' + id).then(function(){
      $route.reload()
    })
  }

  factory.vote_one = function(id, cb) {
    $http.post('/vote_one/' + id).then(function(){
      $route.reload()
    })
  }

  factory.vote_two = function(id, cb) {
    $http.post('/vote_two/' + id).then(function(){
      $route.reload()
    })
  }

  factory.vote_three = function(id, cb) {
    $http.post('/vote_three/' + id).then(function(){
      $route.reload()
    })
  }

  factory.vote_four = function(id, cb) {
    $http.post('/vote_four/' + id).then(function(){
      $route.reload()
    })
  }

  return factory
})
