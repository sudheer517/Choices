import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import {  CaseManagement } from './caseManagement.component';
import { routing } from './caseManagement.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
      CaseManagement
  ],
  providers: [
  ]
})
export default class CaseManagementModule {}
