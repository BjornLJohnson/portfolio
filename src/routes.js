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
            template: '<h1>These are my projects</h1>'
        })
        .state('default.work', {
            url: '/work',
            template: '<h1>These are my work experiences</h1>'
        })
        .state('default.publications', {
            url: '/publications',
            template: '<h1>These are my publications</h1>'
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