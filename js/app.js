
var ngSurvey = angular.module('ngSurvey', ['ui.router']);

ngSurvey.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/welcome.html'
    })
    .state('survey', {
      url: '/survey',
      templateUrl: 'views/survey.html',
      controller: 'surveyCtrl'
    });

});

ngSurvey.controller('surveyCtrl', function($scope, $log){

  $scope.submitSurvey = function() {
    $log.info('Survey results: ', $scope.survey);
  };

});



