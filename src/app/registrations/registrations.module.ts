import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPrintModule } from 'ngx-print';
import { NgxBarcode6Module } from 'ngx-barcode6';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { AddRegistrationComponent } from './add/add-registration.component';
import { RegistrationPreviewComponent } from './add/preview/registration-preview.component';
import { RegistrationListComponent } from './list/registration-list.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';
import { FullPagesModule } from '../pages/full-pages/full-pages.module';

@NgModule({
  declarations: [AddRegistrationComponent, RegistrationPreviewComponent, RegistrationListComponent, DetailsComponent],
  imports: [CommonModule, RegistrationsRoutingModule, NgxBarcode6Module, NgxPrintModule, NgbDropdownModule, FullPagesModule],
})
export class RegistrationsModule {
}
