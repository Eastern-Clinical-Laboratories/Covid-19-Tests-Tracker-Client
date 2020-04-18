export interface AddRegistrationModel {
  category: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  nationalId: string;
  landlineNumber: number;
  mobileNumber: number;
  emailId: string;
  address: string;
  country: string;
  state: string;
  area: string;
  referral: string;
  fileNumber: string;
  samples: SampleModel[];
  miscellaneousInformation: MiscellaneousInformationModel;
  emergencyContact: EmergencyContactModel;
}

interface SampleModel {
  test: string;
  priority: string;
  collectionDateTime: Date;
  assertionDateTime: Date;
  comment: string;
}

interface MiscellaneousInformationModel {
  hasHistoryOfForeignTravel: boolean;
  travelledCountry: string;
  returnedDate: Date;
}

interface EmergencyContactModel {
  relation: string;
  mobileNumber: number;
}
