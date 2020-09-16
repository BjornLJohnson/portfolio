(function () {
    'use strict';
    angular.module('portfolio')
    .config(configFunction);
        
    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configFunction($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('default', {
            abstract: true,
            templateUrl: 'src/templates/default.template.html'
        })
        .state('default.home', {
            url: '/',
            templateUrl: 'src/templates/home.html'
        })
        .state('default.projects', {
            url: '/projects',
            templateUrl: 'src/templates/projects.html'
        })
        .state('default.work', {
            url: '/work',
            templateUrl: 'src/templates/work.html'
        })
        .state('default.resume', {
            url: '/resume',
            template: '<img id="resume" src="images/resume.jpg">'
        })
        .state('default.admin', {
            url: '/admin',
            template: '<admin></admin>'
        })
        
        // .state(aboutState = {
        //     name: 'about',
        //     url: '/about',
        //     template: '<h3>Its the UI-Router hello world app!</h3>'
        // })
        $urlRouterProvider.otherwise('/');
    }
    })();