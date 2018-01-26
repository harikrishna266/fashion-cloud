import { TestBed, inject } from '@angular/core/testing';
import { FlickerService } from './flicker.service';
import { HttpModule } from '@angular/http';

describe('FlickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickerService],
      imports : [HttpModule]
    });
  });

  it('should be created', inject([FlickerService], (service: FlickerService) => {
    expect(service).toBeTruthy();
  }));

  it('it should return a url params if a json object is giveb', inject([FlickerService], (service: FlickerService) => {
    expect(service.makeQueryString({ name: 'hari', age: 30})).toBeTruthy();
  }));
});
