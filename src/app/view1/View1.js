import angular from 'angular';
import compDefn from '../core/animations/example-ani';

var moduleName = 'view1';

angular
    .module(moduleName, [])
    .config(config);

function config($stateProvider) {
    $stateProvider
        .state('view1', {
            url: '/view1',
            templateUrl: 'app/view1/index.html',
            controller: View1Ctrl,
            controllerAs: 'vm'
        });
}
config.$inject = ['$stateProvider'];

function View1Ctrl($scope, AdobeEdge) {
    console.log('View 1');
    var vm = this;
    var compId = 'hello-world',
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
        // use stopAll and playAll to stop and play nested symbols,
        // which have their own timelines.
        vm.play = function() {
            sym.playAll();
        };
        vm.pause = function() {
            sym.stopAll();
        };
        vm.stop = function() {
            sym.stopAll(0);
        };
    });

    comp.ready();
}
View1Ctrl.$inject = ['$scope', 'AdobeEdge'];


export default moduleName;
