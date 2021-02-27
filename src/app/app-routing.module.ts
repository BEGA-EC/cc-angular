import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './services/guards/admin.guard';
import { ConfGuard } from './services/guards/conf.guard';
import { CovidGuard } from './services/guards/covid.guard';


const routes: Routes = [{ path: 'client/register', loadChildren: () => import('./client/register/register.module').then(m => m.RegisterModule),
  // canActivate: [AdminGuard]
},
{ path: 'client', loadChildren: () => import('./client/login/login.module').then(m => m.LoginModule),
  // canActivate: [AdminGuard] 
},
{ path: 'client/medical', loadChildren: () => import('./client/medical/medical.module').then(m => m.MedicalModule),
  canActivate:  [AdminGuard]
},
{ path: 'client/covid', loadChildren: () => import('./client/covid/covid.module').then(m => m.CovidModule),
  canActivate: [AdminGuard, ConfGuard]
},
{ path: 'client/dashboard', loadChildren: () => import('./client/dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AdminGuard, ConfGuard, CovidGuard] 
},
{ path: 'confirmation', loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationModule) },
{ path: '', redirectTo: 'client', pathMatch: 'full' },
{ path: '**', loadChildren: () => import('./client/login/login.module').then(m => m.LoginModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
