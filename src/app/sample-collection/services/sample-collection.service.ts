import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '@dagonmetric/ng-config';

import { AddSampleRequestModel } from '../models/add-sample-request.model';
import { AddSampleResponseModel } from '../models/add-sample-response.model';

@Injectable({
  providedIn: 'root',
})
export class SampleCollectionService {
  private readonly baseUrl: string;

  constructor(private readonly _httpClient: HttpClient, private readonly _configService: ConfigService) {
    this.baseUrl = this._configService.getValue('HOST_API');
  }

  public updateSample(request: AddSampleRequestModel): Observable<AddSampleResponseModel> {
    const apiUrl = `${this.baseUrl}/api/registration`;
    return this._httpClient.post<AddSampleResponseModel>(apiUrl, request);
  }
}
