import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelRoutingModule } from './control-panel-routing.module';
import { OrganizationComponent } from './organization/organization.component';
import { AddOrganizationComponent } from './organization/add-organization/add-organization.component';
import { ListOrganizationComponent } from './organization/list-organization/list-organization.component';
import { NgbTabsetModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { UIComponentsModule } from '../components/ui-components.module';
import { ClinicComponent } from './clinic/clinic.component';
import { AddClinicComponent } from './clinic/add-clinic/add-clinic.component';
import { ListClinicComponent } from './clinic/list-clinic/list-clinic.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorComponent } from './doctor/add-doctor/add-doctor.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';

@NgModule({
  declarations: [OrganizationComponent, AddOrganizationComponent, ListOrganizationComponent, ClinicComponent, AddClinicComponent, ListClinicComponent, DoctorComponent, AddDoctorComponent, ListDoctorComponent],
  imports: [CommonModule, ControlPanelRoutingModule, NgbTabsetModule, FileUploadModule, UIComponentsModule, NgbTypeaheadModule],
})
export class ControlPanelModule {
}
