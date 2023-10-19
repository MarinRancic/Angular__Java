import { Component, Input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BoardListCardService } from '../board-list-card.service';
import { BoardListCard } from '../boardListCard';

@Component({
  selector: 'app-board-list-card-card',
  templateUrl: './board-list-card-card.component.html',
  styleUrls: ['./board-list-card-card.component.css']
})
export class BoardListCardCardComponent {

  @Input() cardId: number;
  @Input() message: string;
  @Input() getBoardListCards: () => void;

  public faTrash = faTrash;

  public isToggleMessage: boolean = false;

  constructor(public boardListCardService:BoardListCardService){}

  public onToggleMessageHandler = (toggleMessage:boolean) => {
    this.isToggleMessage = toggleMessage;
  }

  public onDeleteCardHandler = () => {
    this.boardListCardService.deleteBoardListCard(this.cardId).subscribe(
      {
        next: (response:any) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.getBoardListCards();
        }
      }
    )
  }

  public onEditCardHandler = () => {
    if (this.message){
      this.boardListCardService.updateBoardListCard(this.cardId, this.message).subscribe(
        {
          next: (response: BoardListCard) => {
            console.log(response);
          },
          error: (error) => {
            console.log(error);
          }
        }
      )
    } else {
      this.onDeleteCardHandler();
    }
    
  }
}
