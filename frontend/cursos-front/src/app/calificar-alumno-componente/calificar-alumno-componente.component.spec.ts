import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarAlumnoComponenteComponent } from './calificar-alumno-componente.component';

describe('CalificarAlumnoComponenteComponent', () => {
  let component: CalificarAlumnoComponenteComponent;
  let fixture: ComponentFixture<CalificarAlumnoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificarAlumnoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarAlumnoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
