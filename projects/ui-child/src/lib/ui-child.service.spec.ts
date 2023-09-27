import { TestBed } from '@angular/core/testing';

import { UiChildService } from './ui-child.service';

describe('UiChildService', () => {
  let service: UiChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
