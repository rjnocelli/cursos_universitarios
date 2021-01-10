import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDetallesComponenteComponent } from './alumno-detalles-componente.component';

describe('AlumnoDetallesComponenteComponent', () => {
  let component: AlumnoDetallesComponenteComponent;
  let fixture: ComponentFixture<AlumnoDetallesComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoDetallesComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDetallesComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
