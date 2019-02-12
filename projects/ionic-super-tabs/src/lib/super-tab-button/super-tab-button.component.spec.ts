import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTabButtonComponent } from './super-tab-button.component';

describe('SuperTabButtonComponent', () => {
  let component: SuperTabButtonComponent;
  let fixture: ComponentFixture<SuperTabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTabButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
