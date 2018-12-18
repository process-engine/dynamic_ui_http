'use strict';

const {
  DynamicUIController,
  DynamicUIRouter,
} = require('./dist/commonjs/index');

const routerDiscoveryTag = require('@essential-projects/bootstrapper_contracts').routerDiscoveryTag;

function registerInContainer(container) {

  container
    .register('DynamicUIController', DynamicUIController)
    .dependencies('DynamicUIService');

  container
    .register('DynamicUIRouter', DynamicUIRouter)
    .dependencies('DynamicUIController')
    .singleton()
    .tags(routerDiscoveryTag);
}

module.exports.registerInContainer = registerInContainer;
