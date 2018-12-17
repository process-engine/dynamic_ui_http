import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

import {IDynamicUIApi} from '@process-engine/dynamic_ui_contracts';

export class DynamicUIController {
  private httpCodeSuccessfulResponse: number = 200;

  private _dynamicUIApi: IDynamicUIApi;

  constructor(dynamicUIApi: IDynamicUIApi) {
    this._dynamicUIApi = dynamicUIApi;
  }

  public async getDialog(request: HttpRequestWithIdentity, response: Response): Promise<any> {
    const formKey: string = request.params.form_key;
    const sessionId: string = request.query.sessionId;
    const correlationId: string = request.query.correlationId;
    const processInstanceId: string = request.query.processInstanceId;
    const userTaskId: string = request.query.userTaskId;

    const dialogAsHtml: any = await this._dynamicUIApi.getDialog(sessionId, formKey, correlationId, processInstanceId, userTaskId);

    response.status(this.httpCodeSuccessfulResponse).send(dialogAsHtml);
  }

  public async postDialog(request: HttpRequestWithIdentity, response: Response): Promise<any> {

    const body: any = request.body;
    const sessionId: string = body.sessionId;

    const dialogAsHtml: any = await this._dynamicUIApi.finishDialog(sessionId, body);

    response.status(this.httpCodeSuccessfulResponse).send(dialogAsHtml);
  }
}
