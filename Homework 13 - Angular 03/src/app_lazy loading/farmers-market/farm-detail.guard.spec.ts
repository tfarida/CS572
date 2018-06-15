import { TestBed, async, inject } from '@angular/core/testing';

import { FarmDetailGuard } from './farm-detail.guard';

describe('FarmDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmDetailGuard]
    });
  });

  it('should ...', inject([FarmDetailGuard], (guard: FarmDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
