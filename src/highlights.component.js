(function () {
    'use strict';
    
angular.module('portfolio')
.component('highlights', {
    templateUrl: 'src/templates/highlights.template.html',
    controller: HighlightsController
});

HighlightsController.$inject = ['ExperienceService', '$rootScope', '$http']
function HighlightsController(ExperienceService, $rootScope, $http) {
    var $ctrl = this;

    $ctrl.$onInit = function(){
        // ExperienceService.readExperiences('../data/listings.json')
        ExperienceService.readExperiencesDB()
        .then(function(response) {
            $ctrl.experiences = ExperienceService.getExperiences();
        })
    }

    $ctrl.openModal = function(modalID, experience) {
        $ctrl.spotlight = experience;
        $rootScope.$broadcast('modal:open', {id:modalID});
    }

    $ctrl.closeModal = function(modalID) {
        $rootScope.$broadcast('modal:close', {id:modalID});
    }
}

})()