import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionComponenteComponent } from './suscripcion-componente.component';

describe('SuscripcionComponenteComponent', () => {
  let component: SuscripcionComponenteComponent;
  let fixture: ComponentFixture<SuscripcionComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscripcionComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
