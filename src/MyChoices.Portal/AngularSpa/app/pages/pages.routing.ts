import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: require("./dashboard/dashboard.module")["DashboardModule"] },
      { path: 'editors', loadChildren: require('./editors/editors.module')["EditorsModule"] },
      { path: 'components', loadChildren: require('./components/components.module')["ComponentsModule"] },
      { path: 'charts', loadChildren: require('./charts/charts.module')["ChartsModule"] },
      { path: 'ui', loadChildren: require('./ui/ui.module')["UiModule"] },
      { path: 'forms', loadChildren: require('./forms/forms.module')["FormsModule"] },
      { path: 'tables', loadChildren: require('./tables/tables.module')["TablesModule"] },
      { path: 'maps', loadChildren: require('./maps/maps.module')["MapsModule"] }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
