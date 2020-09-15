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
    $ctrl.loaded = false;

    $ctrl.$onInit = function(){
        ExperienceService.readExperiencesDB()
        .then(function(response) {
            $ctrl.experiences = [];
            ExperienceService.getExperiences().forEach(add);
            
            // Only add the experience to this controller if it is of the right type
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

            // Format the experiences to display nicely
            $ctrl.experiences.forEach(formatEntries);
            function formatEntries(experience, index) {
                console.log(experience);

                if(experience.formatted)
                    return;
                
                console.log(experience);

                var date = experience.date.split("-");
                var month = months[parseInt(date[1])-1];

                experience.date = month.concat(", ", date[0]);

                experience.skills = experience.skills.split(", ");

                // Set up slideshow/images
                experience.images = experience.images.split(", ");
                experience.currImg = experience.images[0];
                experience.coverPhoto = experience.images[0];
                experience.i = 0;

                console.log(experience.images);
                experience.formatted = true;
            }

            $ctrl.loaded = true;
        })
    }

    $ctrl.openModal = function(modalID, experience) {
        $ctrl.spotlight = experience;
        $rootScope.$broadcast('modal:open', {id:modalID});
    }

    $ctrl.closeModal = function(modalID) {
        $rootScope.$broadcast('modal:close', {id:modalID});
    }

    $ctrl.nextImg = function() {
        let i = $ctrl.spotlight.i;
        $ctrl.setImg(i+1)
    }

    $ctrl.prevImg = function() {
        let i = $ctrl.spotlight.i;
        $ctrl.setImg(i-1)
    }

    $ctrl.setImg = function (i) {
        let num = $ctrl.spotlight.images.length;
        $ctrl.spotlight.currImg = $ctrl.spotlight.images[$ctrl.mod(i,num)];
        $ctrl.spotlight.i = $ctrl.mod(i,num);
    }

    $ctrl.mod = function(n, m) {
        return ((n%m)+m)%m;
    }
}

})()