import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMedicoPage } from './detalle-medico.page';

describe('DetalleMedicoPage', () => {
  let component: DetalleMedicoPage;
  let fixture: ComponentFixture<DetalleMedicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
