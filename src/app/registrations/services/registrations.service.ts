import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigService } from '@dagonmetric/ng-config';

import { AddRegistrationResponseModel } from '../models/add-registration-response.model';
import { AddRegistrationRequestModel } from '../models/add-registration-request.model';
import { GetRegisteredPatientsRequestModel } from '../models/get-registered-patients-request.model';
import { GetRegisteredPatientsResponseModel } from '../models/get-registered-patients-response.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationsService {
  private readonly baseUrl: string;

  constructor(private readonly _httpClient: HttpClient, private readonly _configService: ConfigService) {
    this.baseUrl = this._configService.getValue('HOST_API');
  }

  public registerPatient(request: AddRegistrationRequestModel): Observable<AddRegistrationResponseModel> {
    const apiUrl = `${this.baseUrl}/api/persons/v1/registerNewPerson`;
    return this._httpClient.post<AddRegistrationResponseModel>(apiUrl, request);
  }

  public getRegisteredPatients(
    getRegisteredPatientsRequest: GetRegisteredPatientsRequestModel,
  ): Observable<GetRegisteredPatientsResponseModel[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('keyword', getRegisteredPatientsRequest.keyword);

    const apiUrl = `${this.baseUrl}/api/persons/v1/searchPersons`;
    return this._httpClient.get<GetRegisteredPatientsResponseModel[]>(apiUrl, { params: httpParams });
  }
}
