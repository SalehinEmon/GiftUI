import { TestBed } from '@angular/core/testing';

import { SetIncidentGuard } from './set-incident.guard';

describe('SetIncidentGuard', () => {
  let guard: SetIncidentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SetIncidentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
