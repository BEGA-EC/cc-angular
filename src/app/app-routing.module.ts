import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'client/register',
loadChildren: () => import('./client/register/register.module').then(m => m.RegisterModule) },
{ path: 'client', loadChildren: () => import('./client/login/login.module').then(m => m.LoginModule) },
{ path: 'client/medical', loadChildren: () => import('./client/medical/medical.module').then(m => m.MedicalModule) },
{path: '', redirectTo: 'client', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
