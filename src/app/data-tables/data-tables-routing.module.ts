import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DTFullScreenComponent } from './fullscreen/dt-fullscreen.component';
import { DTEditingComponent } from './editing/dt-editing.component';
import { DTFilterComponent } from './filter/dt-filter.component';
import { DTPagingComponent } from './paging/dt-paging.component';
import { DTPinningComponent } from './pinning/dt-pinning.component';
import { DTSelectionComponent } from './selection/dt-selection.component';
import { DTSortingComponent } from './sorting/dt-sorting.component';
import { DTBasicComponent } from './basic/dt-basic.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen',
        component: DTFullScreenComponent,
        data: {
          title: 'Full Screen Data Table',
        },
      },
      {
        path: 'editing',
        component: DTEditingComponent,
        data: {
          title: 'Editing Data Table',
        },
      },
      {
        path: 'filter',
        component: DTFilterComponent,
        data: {
          title: 'Filter Data Table',
        },
      },
      {
        path: 'paging',
        component: DTPagingComponent,
        data: {
          title: 'Paging Data Table',
        },
      },
      {
        path: 'pinning',
        component: DTPinningComponent,
        data: {
          title: 'Pinning Data Table',
        },
      },
      {
        path: 'selection',
        component: DTSelectionComponent,
        data: {
          title: 'Selection Data Table',
        },
      },
      {
        path: 'sorting',
        component: DTSortingComponent,
        data: {
          title: 'Sorting Data Table',
        },
      },
      {
        path: 'basic',
        component: DTBasicComponent,
        data: {
          title: 'Basic Data Table',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTablesRoutingModule {
}
