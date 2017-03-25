var app=angular.module('app', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      redirectTo:'/login'
    })
    .when("/login", {
      controller : 'userController',
      templateUrl : './partials/login.html'
    })
    .when("/add", {
      controller : 'questionController',
      templateUrl : './partials/add.html'
    })
    .when("/dash", {
      controller : 'userController',
      templateUrl : './partials/dashboard.html'
    })
    .when("/show/:id", {
      controller : 'userController',
      templateUrl : './partials/show.html'
    })
    .otherwise({
      redirectTo:'/'
    })
})
