import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnoComponenteComponent } from './agregar-alumno-componente.component';

describe('AgregarAlumnoComponenteComponent', () => {
  let component: AgregarAlumnoComponenteComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAlumnoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
