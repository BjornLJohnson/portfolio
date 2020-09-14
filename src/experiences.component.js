var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

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
                if($ctrl.type == "Highlights") {
                    if(experience.highlight == "1"){
                        $ctrl.experiences.push(experience); 
                    }
                }
                else if(experience.type == $ctrl.type){
                    $ctrl.experiences.push(experience);
                }
            }

            $ctrl.experiences.forEach(adjustEntries);

            function adjustEntries(experience, index) {
                var date = experience.date.split("-");
                var month = months[parseInt(date[1])-1];

                experience.date = month.concat(", ", date[0]);

                experience.skills = experience.skills.split(", ");
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