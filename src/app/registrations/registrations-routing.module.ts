import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { AddRegistrationComponent } from './components/add/add-registration.component';
import { RegistrationListComponent } from './components/list/registration-list.component';
import { RegistrationPreviewComponent } from './components/add/preview/registration-preview.component';

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
export class RegistrationsRoutingModule {}
