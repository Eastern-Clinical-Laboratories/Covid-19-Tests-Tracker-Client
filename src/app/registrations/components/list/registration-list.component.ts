import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RegistrationsService } from '../../services/registrations.service';
import { GetRegisteredPatientsResponseModel } from '../../models/get-registered-patients-response.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent implements OnInit {
  public searchQuery: string;

  public isGettingRegisteredPatients: boolean;

  public registeredPatients: GetRegisteredPatientsResponseModel[];

  constructor(
    private readonly _router: Router,
    private readonly _toastrService: ToastrService,
    private readonly _registrationsService: RegistrationsService,
  ) {
  }

  ngOnInit(): void {
    this._getRegisteredPatients('');
  }

  public async onViewDetailsButtonClicked(): Promise<void> {
    await this._router.navigate(['/registrations/details']);
  }

  public onSearchButtonClicked(): void {
    this.registeredPatients = [];
    this._getRegisteredPatients(this.searchQuery);
  }

  private _getRegisteredPatients(searchQuery: string): void {
    this._registrationsService.getRegisteredPatients({ keyword: searchQuery }).subscribe(
      data => {
        this.registeredPatients = data;
        this.isGettingRegisteredPatients = true;
      },
      () => {
        this.isGettingRegisteredPatients = false;
        this._toastrService.error('Server not reachable, Please try again later');
      },
      () => (this.isGettingRegisteredPatients = false),
    );
  }
}
