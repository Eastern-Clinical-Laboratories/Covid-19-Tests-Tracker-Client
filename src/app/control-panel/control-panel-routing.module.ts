import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClinicComponent } from './labsite/clinic.component';
import { DoctorComponent } from './doctor/doctor.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'organization',
        component: OrganizationComponent,
      },
      {
        path: 'labsite',
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
export class ControlPanelRoutingModule {}
