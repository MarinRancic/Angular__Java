import { TestBed } from '@angular/core/testing';

import { BoardListCardService } from './board-list-card.service';

describe('BoardListCardService', () => {
  let service: BoardListCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardListCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
