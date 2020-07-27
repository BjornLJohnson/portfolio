(function () {
    'use strict';
    
angular.module('portfolio')
.component('highlights', {
    templateUrl: 'src/templates/highlights.template.html',
    controller: HighlightsController
});

HighlightsController.$inject = ['ExperienceService', '$rootScope']
function HighlightsController(ExperienceService, $rootScope) {
    var $ctrl = this;

    $ctrl.$onInit = function(){
        ExperienceService.readExperiences('../data/listings.json')
        .then(function(response) {
            $ctrl.experiences = ExperienceService.getExperiences();
        })
    }

    $ctrl.openModal = function(modalID, experienceID) {
        $ctrl.spotlight = $ctrl.experiences[experienceID];
        $rootScope.$broadcast('modal:open', {id:modalID});
    }

    $ctrl.closeModal = function(modalID) {
        $rootScope.$broadcast('modal:close', {id:modalID});
    }
}

})()