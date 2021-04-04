import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./manager/manager.module').then((mod) => mod.ManagerModule)
  },
  {
    path: 'karyawan',
    loadChildren: () =>
      import('./karyawan/karyawan.module').then((mod) => mod.KaryawanModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
