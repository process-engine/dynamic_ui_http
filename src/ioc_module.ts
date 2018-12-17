import {Container} from 'addict-ioc';

import {routerDiscoveryTag} from '@essential-projects/bootstrapper_contracts';

import {
  DynamicUIController,
  DynamicUIRouter,
} from '.';

export function registerInContainer(container: Container): void {

  container
    .register('DynamicUIController', DynamicUIController)
    .dependencies('DynamicUIService');

  container
    .register('DynamicUIRouter', DynamicUIRouter)
    .dependencies('DynamicUIController')
    .singleton()
    .tags(routerDiscoveryTag);
}
