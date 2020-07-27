(function () {
    'use strict';
    
angular.module('portfolio', ['ui.router'])
.service('ExperienceService', ExperienceService);

ExperienceService.$inject = ['$q']
function ExperienceService($q) {
    var service = this;

    service.readExperiences = function(experiencesFile) {
        var deferred = $q.defer();

        var result = {
          message: ""
        };

        $.getJSON('../data/experiences.json', function(data) {    
            service.experiences = data;
            deferred.resolve(result);
        });
        return deferred.promise;
    };

    service.getExperiences = function () {
        return service.experiences;
    };
}
})()