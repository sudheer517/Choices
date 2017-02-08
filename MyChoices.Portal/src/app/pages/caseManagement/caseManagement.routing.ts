import { Routes, RouterModule }  from '@angular/router';

import { CaseManagement } from './caseManagement.component';
import { NewCase } from './newCase/newCase.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CaseManagement,
    children: [
      { path: 'newCase', component: NewCase }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
