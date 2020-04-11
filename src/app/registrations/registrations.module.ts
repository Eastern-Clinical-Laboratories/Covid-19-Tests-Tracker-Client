import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPrintModule } from 'ngx-print';
import { NgxBarcode6Module } from 'ngx-barcode6';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { AddRegistrationComponent } from './add/add-registration.component';
import { RegistrationPreviewComponent } from './add/preview/registration-preview.component';
import { RegistrationListComponent } from './list/registration-list.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddRegistrationComponent, RegistrationPreviewComponent, RegistrationListComponent],
  imports: [CommonModule, RegistrationsRoutingModule, NgxBarcode6Module, NgxPrintModule, NgbDropdownModule],
})
export class RegistrationsModule {
}
