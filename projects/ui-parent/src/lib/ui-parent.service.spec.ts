import { TestBed } from '@angular/core/testing';

import { UiParentService } from './ui-parent.service';

describe('UiParentService', () => {
  let service: UiParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
