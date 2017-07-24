import { TestBed, inject } from '@angular/core/testing';

import { BookingSystemService } from './booking-system.service';

describe('BookingSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ BookingSystemService ]
    });
  });

  it('should be created', inject([BookingSystemService], (service: BookingSystemService) => {
    expect(service).toBeTruthy();
  }));
});
