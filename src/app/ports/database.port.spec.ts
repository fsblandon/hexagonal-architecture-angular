import { TestBed } from '@angular/core/testing';

import { DatabasePort } from './database.port';

describe('DatabasePortService', () => {
  let service: DatabasePort;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasePort);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
