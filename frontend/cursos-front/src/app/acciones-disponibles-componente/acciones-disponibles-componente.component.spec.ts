import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesDisponiblesComponenteComponent } from './acciones-disponibles-componente.component';

describe('AccionesDisponiblesComponenteComponent', () => {
  let component: AccionesDisponiblesComponenteComponent;
  let fixture: ComponentFixture<AccionesDisponiblesComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesDisponiblesComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesDisponiblesComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
