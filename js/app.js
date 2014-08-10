
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
    })
    .state('thanks', {
      url: '/thanks',
      templateUrl: 'views/thanks.html'
    });

});

ngSurvey.controller('surveyCtrl', function($scope, $state, $log){

  $scope.submitSurvey = function() {
    $log.info('Survey results: ', $scope.survey);
    $state.go('thanks');
  };

});



