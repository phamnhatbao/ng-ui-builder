import { TestBed } from '@angular/core/testing';

import { NgUiBuilderService } from './ng-ui-builder.service';

describe('NgUiBuilderService', () => {
  let service: NgUiBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUiBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
