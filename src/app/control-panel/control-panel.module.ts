import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { OrganizationComponent } from './organization/organization.component';

@NgModule({
  declarations: [OrganizationComponent],
  imports: [CommonModule, ControlPanelRoutingModule],
})
export class ControlPanelModule {
}
