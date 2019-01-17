import { TestBed } from '@angular/core/testing';

import { AjaxserviceService } from './ajaxservice.service';

describe('AjaxserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjaxserviceService = TestBed.get(AjaxserviceService);
    expect(service).toBeTruthy();
  });
});
