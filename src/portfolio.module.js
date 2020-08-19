(function () {
    'use strict';
    
angular.module('portfolio', ['ui.router'])
.service('ExperienceService', ExperienceService);

ExperienceService.$inject = ['$q', '$http']
function ExperienceService($q, $http) {
    var service = this;

    // service.readExperiences = function(experiencesFile) {
    //     var deferred = $q.defer();

    //     var result = {
    //       message: ""
    //     };

    //     $.getJSON('../data/experiences.json', function(data) {    
    //         service.experiences = data;
    //         deferred.resolve(result);
    //     });
    //     return deferred.promise;
    // };

    service.readExperiencesDB = function() {

        var deferred = $q.defer();

        var result = {
          message: "Success"
        };

        $http({
            method: "GET",
            url: "src/retrieveExperiences.php"
        })
        .then(function (response) {
            // console.log(response.data);
            // console.log(response);
            service.experiences = response.data;
            deferred.resolve(result);
        });

        return deferred.promise;
    }

    service.getExperiences = function () {
        return service.experiences;
    };

    // service.addExperience = function(newExperience) {
    //     var deferred = $q.defer();

    //     var result = {
    //       message: "Success"
    //     };

    //     postData = ;

    //     $http({
    //         method: "POST",
    //         url: "src/createExperiences.php",
    //         data: postData
    //     })

    //     .then(function (response) {
    //         // console.log(response.data);
    //         // console.log(response);
    //         service.experiences = response.data;
    //         deferred.resolve(result);
    //     });

    //     return deferred.promise;
    // }


}
})()