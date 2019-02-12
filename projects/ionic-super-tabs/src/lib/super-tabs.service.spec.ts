import { TestBed } from '@angular/core/testing';

import { SuperTabsService } from './super-tabs.service';

describe('SuperTabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperTabsService = TestBed.get(SuperTabsService);
    expect(service).toBeTruthy();
  });
});
