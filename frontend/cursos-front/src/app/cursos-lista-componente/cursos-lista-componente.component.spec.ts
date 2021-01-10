import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosListaComponenteComponent } from './cursos-lista-componente.component';

describe('CursosListaComponenteComponent', () => {
  let component: CursosListaComponenteComponent;
  let fixture: ComponentFixture<CursosListaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosListaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosListaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
