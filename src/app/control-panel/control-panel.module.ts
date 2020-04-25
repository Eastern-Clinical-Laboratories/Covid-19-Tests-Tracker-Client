import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'ng2-file-upload';
import { NgbTabsetModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { ClinicComponent } from './labsite/clinic.component';
import { DoctorComponent } from './doctor/doctor.component';
import { UIComponentsModule } from '../components/ui-components.module';
import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { OrganizationComponent } from './organization/organization.component';
import { AddClinicComponent } from './labsite/add-clinic/add-clinic.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { ListClinicComponent } from './labsite/list-clinic/list-clinic.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { AddOrganizationComponent } from './organization/add-organization/add-organization.component';
import { ListOrganizationComponent } from './organization/list-organization/list-organization.component';

@NgModule({
  declarations: [
    OrganizationComponent,
    AddOrganizationComponent,
    ListOrganizationComponent,
    ClinicComponent,
    AddClinicComponent,
    ListClinicComponent,
    DoctorComponent,
    AddDoctorComponent,
    ListDoctorComponent,
  ],
  imports: [
    CommonModule,
    ControlPanelRoutingModule,
    NgbTabsetModule,
    FileUploadModule,
    UIComponentsModule,
    NgbTypeaheadModule,
  ],
})
export class ControlPanelModule {}
