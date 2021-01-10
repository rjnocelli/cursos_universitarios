import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetallesComponenteComponent } from './curso-detalles-componente.component';

describe('CursoDetallesComponenteComponent', () => {
  let component: CursoDetallesComponenteComponent;
  let fixture: ComponentFixture<CursoDetallesComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetallesComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetallesComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
