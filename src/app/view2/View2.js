import angular from 'angular';
import compDefn from '../core/animations/example2-ani';

var moduleName = 'view2';

angular
    .module(moduleName, [])
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('view2', {
            url: '/view2',
            templateUrl: 'app/view2/index.html',
            controller: View2Ctrl,
            controllerAs: 'vm'
        });
}
config.$inject = ['$stateProvider'];

function View2Ctrl($scope, AdobeEdge) {
    var vm = this;
    var compId = 'goodbye',
        symbolName = 'stage',
        compOpts = {
            scaleToFit: "none",
            centerStage: "none",
            minW: "0",
            maxW: "undefined",
            width: "100%",
            height: "400px"
        };
    // AdobeEdge.clearCompositions();
    var comp = AdobeEdge.addComposition(compId, compOpts, compDefn);

    AdobeEdge.Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, (sym, e)=> {

        vm.play = function() {
            sym.play();
        };
        vm.pause = function() {
            sym.stop();
        }
        vm.stop = function() {
            sym.stop(0);
        };
    });

    comp.ready();
}
View2Ctrl.$inject = ['$scope', 'AdobeEdge'];


export default moduleName;
