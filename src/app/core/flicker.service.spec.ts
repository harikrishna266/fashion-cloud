import { TestBed, inject } from '@angular/core/testing';

import { FlickerService } from './flicker.service';

describe('FlickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickerService]
    });
  });

  it('should be created', inject([FlickerService], (service: FlickerService) => {
    expect(service).toBeTruthy();
  }));
});
