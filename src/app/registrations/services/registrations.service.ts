import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '@dagonmetric/ng-config';

import { AddRegistrationResponseModel } from '../models/add-registration-response.model';
import { AddRegistrationRequestModel } from '../models/add-registration-request.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationsService {
  private readonly baseUrl: string;

  constructor(private readonly _httpClient: HttpClient, private readonly _configService: ConfigService) {
    this.baseUrl = this._configService.getValue('HOST_API');
  }

  public registerPatient(request: AddRegistrationRequestModel): Observable<AddRegistrationResponseModel> {
    const apiUrl = `${this.baseUrl}/api/registration`;
    return this._httpClient.post<AddRegistrationResponseModel>(apiUrl, request);
  }
}
