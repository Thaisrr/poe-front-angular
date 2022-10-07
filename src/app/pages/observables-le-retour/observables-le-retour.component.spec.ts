import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesLeRetourComponent } from './observables-le-retour.component';

describe('ObservablesLeRetourComponent', () => {
  let component: ObservablesLeRetourComponent;
  let fixture: ComponentFixture<ObservablesLeRetourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesLeRetourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesLeRetourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
