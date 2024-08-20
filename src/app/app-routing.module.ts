// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import DashAnalyticsComponent from './demo/dash-analytics copy/dash-analytics.component';
import { LoginComponent } from './demo/login/login.component';
import { authGuard } from './guard/auth.guard';
const routes: Routes = [
  { path: '', component:LoginComponent  },

  { path: 'dashboard ', component: DashAnalyticsComponent },


  {
    path: '',
    component: AdminComponent,
    canActivateChild: [authGuard],

    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },


      {
        path: 'home',
        loadComponent: () => import('./demo/dash-analytics copy/dash-analytics.component')

      },

    
    

     

      {
        path: 'user',
        loadChildren: () => import('./demo/user-management/user-management.module').then((m) => m.UserManagementModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./demo/role-management/role-management.module').then((m) => m.RoleManagementModule)
      },
      {
        path: 'sites',
        loadChildren: () => import('./demo/site-configurations/sites-configurations.module').then((m) => m.SiteConfigurationsModule)

      },
      {
        path: 'rappot',
        loadChildren: () => import('./demo/rapport-management/rapport-management.module').then((m) => m.RapportManagementModule)

      },



    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
