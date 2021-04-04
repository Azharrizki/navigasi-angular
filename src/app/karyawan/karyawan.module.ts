import { DetailKaryawanComponent } from './../manager/detail-karyawan/detail-karyawan.component';
import { DaftarKaryawanComponent } from './../manager/daftar-karyawan/daftar-karyawan.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPekerjaanComponent } from './detail-pekerjaan/detail-pekerjaan.component';
import { DaftarPekerjaanComponent } from './daftar-pekerjaan/daftar-pekerjaan.component';
import { KaryawanComponent } from './karyawan.component';

const routes: Routes = [
  {
    path: 'app',
    component: KaryawanComponent,
    children: [
      {
        path: 'daftar-pekerjaan',
        component: DaftarPekerjaanComponent
      },
      {
        path: 'detail-pekerjaan',
        component: DetailPekerjaanComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/daftar-pekerjaan',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [DetailPekerjaanComponent, DaftarPekerjaanComponent, KaryawanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class KaryawanModule { }
