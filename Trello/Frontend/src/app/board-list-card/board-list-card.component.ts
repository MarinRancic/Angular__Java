import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { BoardListService } from '../board-list.service';
import { BoardList } from '../boardList';
import { BoardListCardService } from '../board-list-card.service';
import { BoardListCard } from '../boardListCard';

@Component({
  selector: 'app-board-list-card',
  templateUrl: './board-list-card.component.html',
  styleUrls: ['./board-list-card.component.css']
})
export class BoardListCardComponent implements OnInit{
  public faPlus = faPlus;
  public faX = faX;

  public boardList:BoardList;
  public boardListCards:BoardListCard[];

  public cardText:string;
  public isTitleEditable:boolean = false;
  public isAddCard:boolean = false;

  @Input() boardId: number;
  @Input() listId: number;
  @Input() title: string;
  @Input() getBoardLists: () => void;

  constructor(public boardListService: BoardListService, public boardListCardService: BoardListCardService){}

  ngOnInit(): void {
    this.getBoardListCards();
  }

  public onToggleTitleEditHandler = (titleEditable:boolean) => {
    this.isTitleEditable = titleEditable;
  }

  public onEditTitleHandler = () => {
    if(this.title){
      this.boardListService.editBoardList(this.listId, this.title).subscribe(
        {
          next: (response: BoardList) => {
            this.title = response.title;
          },
          error: (error: any) => {
            console.log(error);
          },
        }
      )
    }
    this.getBoardLists();
  }

  public onDeleteListHandler = async () => {
    this.boardListService.deleteBoardList(this.listId).subscribe(
      {
        next: (response:any) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.getBoardLists();
        }
      }
    )
  }

  public onToggleAddCardHandler = (isToggled: boolean) => {
    this.isAddCard = isToggled;
  }

  public onAddCardHandler = () => {
    this.boardListCardService.newBoardListCard(this.cardText, this.listId).subscribe(
      {
        next: (response: BoardListCard) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.cardText="";
          this.getBoardListCards();
        }
      }
    )
  }

  public getBoardListCards = () => {
    this.boardListCardService.getBoardListCards(this.listId).subscribe(
      (response: BoardListCard[]) => {
        this.boardListCards = response;
      },
      (error: any) => {
        console.log(error.message);
      }
    )
  }
}
