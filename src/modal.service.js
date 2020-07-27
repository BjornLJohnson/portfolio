(function () {
    'use strict';

    angular.module('portfolio')
    .directive('modal', ModalDirective);

    function ModalDirective() {
        var ddo = {
            link: LinkFunction
        };

        function LinkFunction(scope, element, attrs) {
                // ensure id attribute exists
                if (!attrs.id) {
                    console.error('modal must have an id');
                    return;
                }

                // move element to bottom of page (just before </body>) so it can be displayed above everything else
                element.appendTo('body');
                
                var cancelOpenListener = scope.$on('modal:open', function(event, data) {
                    if(data.id === element['0'].id) {
                        scope.$evalAsync(Open);
                    }
                });

                var cancelCloseListener = scope.$on('modal:close', function(event, data) {
                    if(data.id === element['0'].id) {
                        scope.$evalAsync(Close);
                    }
                });

                // close modal on background click
                element.on('click', function (e) {
                    var target = $(e.target);
                    if (!target.closest('.modal-body').length) {
                        scope.$evalAsync(Close);
                    }
                });
            
                // remove self from modal service when directive is destroyed
                scope.$on('$destroy', function() {
                    // ModalService.Remove(attrs.id);
                    element.remove();
                    cancelOpenListener();
                    cancelCloseListener();
                });                

                // open modal
                function Open() {
                    element.show();
                    $('body').addClass('modal-open');
                }

                // close modal
                function Close() {
                    element.hide();
                    $('body').removeClass('modal-open');
                }
            }

        return ddo
    }
})();