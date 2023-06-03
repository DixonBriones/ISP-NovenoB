import { TestBed } from '@angular/core/testing';

import { NoticiaGuard } from './noticia.guard';

describe('NoticiaGuard', () => {
  let guard: NoticiaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoticiaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
