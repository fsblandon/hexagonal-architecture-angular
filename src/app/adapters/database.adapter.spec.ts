import { TestBed } from '@angular/core/testing';

import { DatabaseAdapter } from './database.adapter';

describe('DatabaseAdapterService', () => {
  let service: DatabaseAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
