import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRegistrationComponent } from './add/add-registration.component';
import { RegistrationListComponent } from './list/registration-list.component';
import { RegistrationPreviewComponent } from './add/preview/registration-preview.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-registration',
        component: AddRegistrationComponent,
      },
      {
        path: 'preview-registrations',
        component: RegistrationPreviewComponent,
      },
      {
        path: 'list-registrations',
        component: RegistrationListComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
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
