import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule }  from '@angular/http';
import { ReactiveFormsModule  } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { CaseManagement } from './caseManagement.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question.component';
import { DynamicFormComponent } from './components/dynamic-form.component';

import { routing } from './caseManagement.routing';
import { QuestionService  } from './components/question.service';
import { QuestionControlService  } from './components/question-control.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgaModule,
    HttpModule,
    routing
  ],
  declarations: [
      CaseManagement,
      DynamicFormComponent,
      DynamicFormQuestionComponent
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class CaseManagementModule {}
