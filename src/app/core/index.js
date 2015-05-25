import angular from 'angular';
import AdobeEdge from 'edge';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';

var moduleName = 'app.core';

angular
    .module(moduleName, [
        ngAnimate,
        uiRouter
    ])
    .constant('AdobeEdge', AdobeEdge);

export default moduleName;
