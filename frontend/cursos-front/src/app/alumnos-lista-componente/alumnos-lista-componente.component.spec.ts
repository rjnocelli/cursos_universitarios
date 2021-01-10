import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListaComponenteComponent } from './alumnos-lista-componente.component';

describe('AlumnosListaComponenteComponent', () => {
  let component: AlumnosListaComponenteComponent;
  let fixture: ComponentFixture<AlumnosListaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosListaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosListaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
