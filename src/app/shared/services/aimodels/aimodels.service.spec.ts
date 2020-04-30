import { TestBed } from '@angular/core/testing';

import { AimodelsService } from './aimodels.service';

describe('AimodelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AimodelsService = TestBed.get(AimodelsService);
    expect(service).toBeTruthy();
  });
});
