import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { DisplayUserComponent } from 'src/app/components/dashboard/display-user/display-user.component';
import { DynamiclistComponent } from 'src/app/components/dynamic-page/dynamiclist/dynamiclist.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ErrorComponentComponent } from 'src/app/error-component/error-component.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{ path: ':user', component: DisplayUserComponent }], //nesting routes, see the html also
  },
  // {path: 'dashboard/:user', component: DashboardComponent}
  {path: 'list', component: DynamiclistComponent},
  { path: 'not-found', component: ErrorComponentComponent },
  { path: '**', redirectTo: '/not-found' }, //make sure to add it at last
];
