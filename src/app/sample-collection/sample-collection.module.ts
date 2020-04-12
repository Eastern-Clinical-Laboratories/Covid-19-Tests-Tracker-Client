import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleComponent } from './sample/sample.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { SampleCollectionRoutingModule } from './sample-collection-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { FullPagesModule } from '../pages/full-pages/full-pages.module';

@NgModule({
  declarations: [WaitingListComponent, SampleComponent],
  imports: [CommonModule, SampleCollectionRoutingModule, NgbDropdownModule, NgxBarcode6Module, FullPagesModule],
})
export class SampleCollectionModule {
}
