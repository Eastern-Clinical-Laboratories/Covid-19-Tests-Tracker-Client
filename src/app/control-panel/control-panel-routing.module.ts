import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-organization',
        component: OrganizationComponent,
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
