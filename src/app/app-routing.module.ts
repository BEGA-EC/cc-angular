import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './services/guards/admin.guard';
import { ConfGuard } from './services/guards/conf.guard';


const routes: Routes = [{ path: 'client/register', loadChildren: () => import('./client/register/register.module').then(m => m.RegisterModule), canActivate: [ConfGuard] },
{ path: 'client', loadChildren: () => import('./client/login/login.module').then(m => m.LoginModule), canActivate: [ConfGuard] },
{ path: 'client/medical', loadChildren: () => import('./client/medical/medical.module').then(m => m.MedicalModule) },
{ path: 'client/covid', loadChildren: () => import('./client/covid/covid.module').then(m => m.CovidModule) },
{ path: 'client/dashboard', loadChildren: () => import('./client/dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'confirmation', loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationModule) },
{ path: '', redirectTo: 'client', pathMatch: 'full' },
{ path: '**', loadChildren: () => import('./client/login/login.module').then(m => m.LoginModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
