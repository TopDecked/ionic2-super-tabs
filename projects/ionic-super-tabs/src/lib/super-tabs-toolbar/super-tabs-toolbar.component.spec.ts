import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTabsToolbarComponent } from './super-tabs-toolbar.component';

describe('SuperTabsToolbarComponent', () => {
  let component: SuperTabsToolbarComponent;
  let fixture: ComponentFixture<SuperTabsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperTabsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperTabsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
