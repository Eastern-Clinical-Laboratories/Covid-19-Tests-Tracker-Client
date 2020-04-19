export interface AddSampleRequestModel {
  id: string;
  test: string;
  priority: string;
  sampleType: string;
  collectionDateTime: Date;
  assertionDateTime: Date;
  comment: string;
}
