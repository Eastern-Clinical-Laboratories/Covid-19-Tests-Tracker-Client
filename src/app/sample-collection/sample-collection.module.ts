import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SampleComponent } from './components/sample/sample.component';
import { FullPagesModule } from '../pages/full-pages/full-pages.module';
import { SampleCollectionRoutingModule } from './sample-collection-routing.module';
import { WaitingListComponent } from './components/waiting-list/waiting-list.component';

@NgModule({
  declarations: [WaitingListComponent, SampleComponent],
  imports: [CommonModule, SampleCollectionRoutingModule, FullPagesModule, FormsModule],
})
export class SampleCollectionModule {
}
