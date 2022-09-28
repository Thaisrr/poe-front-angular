import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServiceBisComponent } from './about-service-bis.component';

describe('AboutServiceBisComponent', () => {
  let component: AboutServiceBisComponent;
  let fixture: ComponentFixture<AboutServiceBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutServiceBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutServiceBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
