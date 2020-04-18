import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxPrintModule } from 'ngx-print';
import { NgxBarcode6Module } from 'ngx-barcode6';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FullPagesModule } from '../pages/full-pages/full-pages.module';
import { DetailsComponent } from './components/details/details.component';
import { RegistrationsRoutingModule } from './registrations-routing.module';
import { AddRegistrationComponent } from './components/add/add-registration.component';
import { RegistrationListComponent } from './components/list/registration-list.component';
import { RegistrationPreviewComponent } from './components/add/preview/registration-preview.component';

@NgModule({
  declarations: [AddRegistrationComponent, RegistrationPreviewComponent, RegistrationListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RegistrationsRoutingModule,
    NgxBarcode6Module,
    NgxPrintModule,
    NgbDropdownModule,
    FullPagesModule,
    FormsModule,
  ],
})
export class RegistrationsModule {
}
