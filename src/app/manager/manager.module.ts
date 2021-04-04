import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaftarKaryawanComponent } from './daftar-karyawan/daftar-karyawan.component';
import { DetailKaryawanComponent } from './detail-karyawan/detail-karyawan.component';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  {
    path: 'app',
    component: ManagerComponent,
    children: [
      {
	path: 'daftar-karyawan',
      component: DaftarKaryawanComponent
    }, {
      path: 'detail-karyawan',
      component: DetailKaryawanComponent
    }
    ]
  },
  {
    path: '',
    redirectTo: 'app/daftar-karyawan',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [DaftarKaryawanComponent, DetailKaryawanComponent, ManagerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
