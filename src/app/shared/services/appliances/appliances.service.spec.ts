import { TestBed } from '@angular/core/testing';

import { AppliancesService } from './appliances.service';

describe('AppliancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppliancesService = TestBed.get(AppliancesService);
    expect(service).toBeTruthy();
  });
});
