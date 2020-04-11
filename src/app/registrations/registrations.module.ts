import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { AddRegistrationComponent } from './add/add-registration.component';
import { RegistrationsListComponent } from './list/registrations-list.component';

@NgModule({
  declarations: [AddRegistrationComponent, RegistrationsListComponent],
  imports: [CommonModule, RegistrationsRoutingModule],
})
export class RegistrationsModule {
}
