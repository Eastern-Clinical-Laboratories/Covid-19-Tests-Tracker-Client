import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SampleComponent } from './sample/sample.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'update-sample',
        component: SampleComponent,
      },
      {
        path: 'pending-list',
        component: WaitingListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleCollectionRoutingModule {
}
