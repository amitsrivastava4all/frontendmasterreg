import { TestBed } from '@angular/core/testing';

import { TokeninterceptorService } from './tokeninterceptor.service';

describe('TokeninterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokeninterceptorService = TestBed.get(TokeninterceptorService);
    expect(service).toBeTruthy();
  });
});
