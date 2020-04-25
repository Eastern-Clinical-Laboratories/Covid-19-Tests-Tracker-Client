import { AddRegistrationResponseModel } from './add-registration-response.model';

export interface GetRegisteredPatientsResponseModel extends AddRegistrationResponseModel {
  _id: string;
}
