import {BaseRouter} from '@essential-projects/http_node';
import {restSettings} from '@process-engine/dynamic_ui_contracts';

import {wrap} from 'async-middleware';
import * as express from 'express';

import {DynamicUIController} from './dynamic_ui_controller';

export class DynamicUIRouter extends BaseRouter {

  private _dynamicUIController: DynamicUIController;

  constructor(dynamicUIController: DynamicUIController) {
    super();
    this._dynamicUIController = dynamicUIController;
  }

  public get baseRoute(): string {
    return 'api/dynamic_ui/v1';
  }

  public async initializeRouter(): Promise<void> {
    this.registerRoutes();
  }

  private registerRoutes(): void {
    const controller: DynamicUIController = this._dynamicUIController;

    this.router.use('/assets', express.static(controller.assetsPath));
    this.router.use('/webcomponent', express.static(`${__dirname}/../../../dynamic_ui_core/dist/webcomponent`));

    this.router.get(restSettings.paths.getIndex, wrap(controller.getIndex.bind(controller)));
  }

}
