import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './services/guards/admin.guard';


const routes: Routes = [{ path: 'client/register',
loadChildren: () => import('./client/register/register.module').then(m => m.RegisterModule) },
{ path: 'client', loadChildren: () => import('./client/login/login.module').then(m => m.LoginModule) },
{ path: 'client/medical', loadChildren: () => import('./client/medical/medical.module').then(m => m.MedicalModule), canActivate: [AdminGuard] },
{ path: 'client/covid', loadChildren: () => import('./client/covid/covid.module').then(m => m.CovidModule), canActivate: [AdminGuard] },
{ path: 'client/code', loadChildren: () => import('./client/code/code.module').then(m => m.CodeModule) },
{ path: 'client/dashboard', loadChildren: () => import('./client/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AdminGuard] },
{ path: '', redirectTo: 'client', pathMatch: 'full' },
{ path: 'confirmation', loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
