import { TestBed } from '@angular/core/testing';

import { TrilhasService } from './trilhas.service';

describe('TrilhasService', () => {
  let service: TrilhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrilhasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
