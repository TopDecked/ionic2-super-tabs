import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTabsComponent } from './super-tabs.component';

describe('SuperTabsComponent', () => {
  let component: SuperTabsComponent;
  let fixture: ComponentFixture<SuperTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
