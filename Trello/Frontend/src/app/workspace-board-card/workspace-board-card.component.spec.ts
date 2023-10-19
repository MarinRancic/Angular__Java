import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceBoardCardComponent } from './workspace-board-card.component';

describe('WorkspaceBoardCardComponent', () => {
  let component: WorkspaceBoardCardComponent;
  let fixture: ComponentFixture<WorkspaceBoardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspaceBoardCardComponent]
    });
    fixture = TestBed.createComponent(WorkspaceBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
