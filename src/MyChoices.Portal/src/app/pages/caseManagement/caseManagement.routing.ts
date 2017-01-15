import { Routes, RouterModule }  from '@angular/router';

import { CaseManagement } from './caseManagement.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CaseManagement,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
