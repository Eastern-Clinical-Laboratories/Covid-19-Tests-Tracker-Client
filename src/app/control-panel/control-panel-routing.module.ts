import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './organization/organization.component';
import { ClinicComponent } from './clinic/clinic.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'organization',
        component: OrganizationComponent,
      },
      {
        path: 'clinic',
        component: ClinicComponent,
      },
      {
        path: 'doctor',
        component: DoctorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlPanelRoutingModule {
}
