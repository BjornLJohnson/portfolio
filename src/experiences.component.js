(function () {
    'use strict';
    
angular.module('portfolio')
.component('experiences', {
    templateUrl: 'src/templates/experiences.template.html',
    controller: ExperienceController,
    bindings: {
        type: '@',
        size: '@'
    }
});

ExperienceController.$inject = ['ExperienceService', '$rootScope', '$http']
function ExperienceController(ExperienceService, $rootScope, $http) {
    var $ctrl = this;

    $ctrl.$onInit = function(){
        ExperienceService.readExperiencesDB()
        .then(function(response) {
            $ctrl.experiences = [];
            ExperienceService.getExperiences().forEach(add);
            
            function add(experience, index) {
                if(experience.type == $ctrl.type){
                    $ctrl.experiences.push(experience);
                }
            }
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