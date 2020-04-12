import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxBarcode6Module } from 'ngx-barcode6';

import { TestRoutingModule } from './test-routing.module';
import { DetailsComponent } from './details/details.component';
import { FullPagesModule } from '../pages/full-pages/full-pages.module';
import { TestListComponent } from './test-list/test-list.component';

@NgModule({
  declarations: [DetailsComponent, TestListComponent],
  imports: [CommonModule, FullPagesModule, TestRoutingModule, NgxBarcode6Module],
})
export class TestModule {
}
