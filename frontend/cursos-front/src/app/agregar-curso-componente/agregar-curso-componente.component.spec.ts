import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCursoComponenteComponent } from './agregar-curso-componente.component';

describe('AgregarCursoComponenteComponent', () => {
  let component: AgregarCursoComponenteComponent;
  let fixture: ComponentFixture<AgregarCursoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCursoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
