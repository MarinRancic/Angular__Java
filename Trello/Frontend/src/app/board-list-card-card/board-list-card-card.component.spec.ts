import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListCardCardComponent } from './board-list-card-card.component';

describe('BoardListCardCardComponent', () => {
  let component: BoardListCardCardComponent;
  let fixture: ComponentFixture<BoardListCardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardListCardCardComponent]
    });
    fixture = TestBed.createComponent(BoardListCardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
