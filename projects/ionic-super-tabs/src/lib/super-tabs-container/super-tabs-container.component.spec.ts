import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTabsContainerComponent } from './super-tabs-container.component';

describe('SuperTabsContainerComponent', () => {
  let component: SuperTabsContainerComponent;
  let fixture: ComponentFixture<SuperTabsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTabsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTabsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
