import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerMedicosPage } from './ver-medicos.page';

describe('VerMedicosPage', () => {
  let component: VerMedicosPage;
  let fixture: ComponentFixture<VerMedicosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerMedicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
