import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRegistrationComponent } from './add/add-registration.component';
import { RegistrationsListComponent } from './list/registrations-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-registration',
        component: AddRegistrationComponent,
      },
      {
        path: 'view-registrations',
        component: RegistrationsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationsRoutingModule {
}
