import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

import {IDynamicUIApi} from '@process-engine/dynamic_ui_contracts';

export class DynamicUIController {
  private httpCodeSuccessfulResponse: number = 200;

  private _dynamicUIApi: IDynamicUIApi;

  constructor(dynamicUIApi: IDynamicUIApi) {
    this._dynamicUIApi = dynamicUIApi;
  }

  public get assetsPath(): string {
    return this._dynamicUIApi.assetsPath;
  }

  public async getIndex(request: HttpRequestWithIdentity, response: Response): Promise<any> {
    const formKey: string = request.params.form_key;

    const dialogAsHtml: any = await this._dynamicUIApi.getIndex();

    response.status(this.httpCodeSuccessfulResponse).send(dialogAsHtml);
  }

  public async getWebcomponent(request: HttpRequestWithIdentity, response: Response): Promise<any> {

    const formKey: string = request.params.form_key;

    const dialogAsHtml: any = await this._dynamicUIApi.getWebcomponent(formKey);

    response.status(this.httpCodeSuccessfulResponse).send(dialogAsHtml);
  }
}
