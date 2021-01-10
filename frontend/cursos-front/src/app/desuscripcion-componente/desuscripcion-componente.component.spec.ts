import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesuscripcionComponenteComponent } from './desuscripcion-componente.component';

describe('DesuscripcionComponenteComponent', () => {
  let component: DesuscripcionComponenteComponent;
  let fixture: ComponentFixture<DesuscripcionComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesuscripcionComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesuscripcionComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
