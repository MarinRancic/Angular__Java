import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-board-modal',
  templateUrl: './new-board-modal.component.html',
  styleUrls: ['./new-board-modal.component.css']
})
export class NewBoardModalComponent {
  faX = faX;
  board_title = "";
  error = "";
  @Input() toggleModal: Function;

  constructor(private boardService: BoardService, private workspaceComponent: WorkspaceComponent){}

  closeModal($event: MouseEvent | null = null, close:boolean = true){
    if ($event){
      $event.stopPropagation();
    }
    if (!close){
      this.toggleModal(false);
    }
  }

  onSubmit = () => {
    if (this.board_title) {
      this.boardService.newBoard(this.board_title).subscribe((response: Board) => {
        this.closeModal(null, false);
        this.boardService.getBoards().subscribe(
          (response: Board[]) => {
            this.workspaceComponent.boards = response;
            console.log(this.workspaceComponent.boards);
          },
          (error) => {
            console.log(error.message);
          }
        );
      });
    }
    else{
      this.error = "Board title empty!"
    }
  }
}
