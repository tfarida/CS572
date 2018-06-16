import { TestBed, inject } from '@angular/core/testing';

import { UserpostService } from './userpost.service';

describe('UserpostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserpostService]
    });
  });

  it('should be created', inject([UserpostService], (service: UserpostService) => {
    expect(service).toBeTruthy();
  }));
});
