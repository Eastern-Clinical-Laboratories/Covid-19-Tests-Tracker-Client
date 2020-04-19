import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { RegistrationsService } from '../../services/registrations.service';
import { AddRegistrationRequestModel } from '../../models/add-registration-request.model';

@UntilDestroy()
@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
})
export class AddRegistrationComponent {
  public addRegistrationModel: AddRegistrationRequestModel;

  constructor(
    private readonly _registrationService: RegistrationsService,
    private readonly _toasterService: ToastrService,
  ) {
    this._initializeProperties();
  }

  public async onSaveButtonClicked(ngForm: NgForm): Promise<void> {
    this._registrationService
      .registerPatient(this.addRegistrationModel)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this._initializeProperties();
          this._toasterService.success('Registration Saved Successfully', 'Success', { progressBar: true });
        },
        () =>
          this._toasterService.error(
            'An Error Occurred, when processing the request. Please try again later',
            'Error',
            {
              progressBar: true,
            },
          ),
      );
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
      mobileNumber: [],
      nationalId: '',
      state: '',
      referral: '',
      fileNumber: '',
      samples: [defaultSample],
      miscellaneousInformation: defaultMiscellaneousInformation,
      emergencyContact: [defaultEmergencyContact],
    };
  }
}
