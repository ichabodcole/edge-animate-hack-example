import angular from 'angular';
import core from './core/index';
import view1 from './view1/View1';
import view2 from './view2/View2';

var moduleName = 'app';

angular
    .module(moduleName, [
        core,
        view1,
        view2
    ])
    .config(config)
    .controller('AppCtrl', AppCtrl);


function config($stateProvider, $urlRouterProvider) {
    // $stateProvider
    $urlRouterProvider.otherwise('/view1');

}
config.$inject = ['$stateProvider', '$urlRouterProvider'];


function AppCtrl($scope, AdobeEdge) {
    // var compId = 'EDGE-326011',
    //     symbolName = 'stage',
    //     compOpts = {
    //         scaleToFit: "width",
    //         centerStage: "horizontal",
    //         minW: "0",
    //         maxW: "undefined",
    //         width: "1440px",
    //         height: "760px"
    //     };

    // AdobeEdge.addComposition(compId, compOpts, compDefn).ready();

    // AdobeEdge.Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, (sym, e)=> {
    //     sym.stop(0);

    //     $scope.playClick = function() {
    //         sym.play(0);
    //     };
    //     $scope.stopClick = function() {
    //         sym.stop(0);
    //     };
    // });
}
AppCtrl.$inject = ['$scope', 'AdobeEdge'];

export default moduleName;
