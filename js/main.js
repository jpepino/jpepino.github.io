/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/game", {templateUrl: "partials/game.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Tutorial
    .when("/tutorial", {templateUrl: "partials/tutorial.html", controller: "BlogCtrl"})
    .when("/tutorial_item", {templateUrl: "partials/tutorial_item.html", controller: "BlogCtrl"})
    .when("/tutorial1-1", {templateUrl: "partials/tutorial1-1.html", controller: "BlogCtrl"})
    .when("/tutorial1-2", {templateUrl: "partials/tutorial1-2.html", controller: "BlogCtrl"})
    .when("/tutorial1-3", {templateUrl: "partials/tutorial1-3.html", controller: "BlogCtrl"})
    .when("/tutorial2-1", {templateUrl: "partials/tutorial2-1.html", controller: "BlogCtrl"})
    .when("/tutorial2-2", {templateUrl: "partials/tutorial2-2.html", controller: "BlogCtrl"})
    .when("/tutorial2-3", {templateUrl: "partials/tutorial2-3.html", controller: "BlogCtrl"})
    .when("/tutorial2-4", {templateUrl: "partials/tutorial2-4.html", controller: "BlogCtrl"})
    .when("/tutorial2-5", {templateUrl: "partials/tutorial2-5.html", controller: "BlogCtrl"})
    .when("/tutorial2-6", {templateUrl: "partials/tutorial2-6.html", controller: "BlogCtrl"})
    .when("/tutorial2-7", {templateUrl: "partials/tutorial2-7.html", controller: "BlogCtrl"})
    .when("/tutorial3-1", {templateUrl: "partials/tutorial3-1.html", controller: "BlogCtrl"})
    .when("/tutorial4-1", {templateUrl: "partials/tutorial4-1.html", controller: "BlogCtrl"})
    .when("/tutorial5-1", {templateUrl: "partials/tutorial5-1.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});