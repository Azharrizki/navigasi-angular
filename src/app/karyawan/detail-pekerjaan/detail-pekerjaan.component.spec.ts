import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPekerjaanComponent } from './detail-pekerjaan.component';

describe('DetailPekerjaanComponent', () => {
	let component: DetailPekerjaanComponent;
	let fixture: ComponentFixture<DetailPekerjaanComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DetailPekerjaanComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DetailPekerjaanComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
