import { TestBed } from '@angular/core/testing';

import { VraiService } from './vrai.service';

describe('VraiService', () => {
  let service: VraiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VraiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
