import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { AddRegistrationComponent } from './add/add-registration.component';
import { RegistrationsListComponent } from './list/registrations-list.component';
import { RegistrationPreviewComponent } from './add/preview/registration-preview.component';

@NgModule({
  declarations: [AddRegistrationComponent, RegistrationsListComponent, RegistrationPreviewComponent],
  imports: [CommonModule, RegistrationsRoutingModule],
})
export class RegistrationsModule {
}
