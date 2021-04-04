import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPekerjaanComponent } from './daftar-pekerjaan.component';

describe('DaftarPekerjaanComponent', () => {
  let component: DaftarPekerjaanComponent;
  let fixture: ComponentFixture<DaftarPekerjaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarPekerjaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPekerjaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
