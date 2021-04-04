import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarKaryawanComponent } from './daftar-karyawan.component';

describe('DaftarKaryawanComponent', () => {
  let component: DaftarKaryawanComponent;
  let fixture: ComponentFixture<DaftarKaryawanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarKaryawanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
