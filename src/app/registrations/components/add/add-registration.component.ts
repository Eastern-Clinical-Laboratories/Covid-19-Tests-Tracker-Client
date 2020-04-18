import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AddRegistrationModel } from '../../models/add-registration.model';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
})
export class AddRegistrationComponent implements OnInit {
  public addRegistrationModel: AddRegistrationModel;

  constructor(private readonly _router: Router) {
    this._initializeProperties();
  }

  ngOnInit(): void {
  }

  public async onSaveButtonClicked(ngForm: NgForm): Promise<void> {
    console.log(ngForm.value);
    await this._router.navigate(['/registrations/preview-registrations']);
  }

  private _initializeProperties(): void {
    const defaultMiscellaneousInformation = {
      hasHistoryOfForeignTravel: false,
      returnedDate: new Date(),
      travelledCountry: '',
    };

    const defaultSample = {
      test: '',
      priority: '',
      assertionDateTime: new Date(),
      collectionDateTime: new Date(),
      comment: '',
    };

    const defaultEmergencyContact = {
      mobileNumber: null,
      relation: '',
    };

    this.addRegistrationModel = {
      category: '',
      address: '',
      area: '',
      country: 'Somalia',
      dateOfBirth: new Date(),
      emailId: '',
      firstName: '',
      landlineNumber: null,
      lastName: '',
      mobileNumber: null,
      nationalId: '',
      state: '',
      referral: '',
      fileNumber: '',
      samples: [defaultSample],
      miscellaneousInformation: defaultMiscellaneousInformation,
      emergencyContact: defaultEmergencyContact,
    };
  }
}
