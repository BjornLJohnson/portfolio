(function () {
    'use strict';
    
angular.module('portfolio', ['ui.router'])
.service('ExperienceService', ExperienceService);

ExperienceService.$inject = ['$q', '$http']
function ExperienceService($q, $http) {
    var service = this;
    var retrieved = false;

    service.readExperiencesDB = function() {
        var deferred = $q.defer();

        if(!retrieved) {
            var result = {
                message: "Success"
              };
      
              $http({
                  method: "GET",
                  url: "src/retrieveExperiences.php"
              })
              .then(function (response) {
                  service.experiences = response.data;
                  deferred.resolve(result);
                  retrieved = true;
              });
        }
        else {
            deferred.resolve();
        }

        return deferred.promise;
    }

    service.getExperiences = function () {
        return service.experiences;
    };
}
})()