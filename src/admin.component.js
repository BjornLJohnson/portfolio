(function () {
    'use strict';
    
angular.module('portfolio')
.component('admin', {
    templateUrl: 'src/templates/admin.template.html',
    controller: adminController
});

adminController.$inject = ['ExperienceService', '$rootScope']
function adminController(ExperienceService, $rootScope) {
    var $ctrl = this;

    $ctrl.openModal = function(modalID, experience) {
        $ctrl.spotlight = experience;
        $rootScope.$broadcast('modal:open', {id:modalID});
    }

    $ctrl.closeModal = function(modalID) {
        $rootScope.$broadcast('modal:close', {id:modalID});
    }
}

})()