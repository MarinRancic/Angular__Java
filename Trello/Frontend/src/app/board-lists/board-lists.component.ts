import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BoardListService } from '../board-list.service';
import { Board } from '../board';

import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { BoardList } from '../boardList';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-lists',
  templateUrl: './board-lists.component.html',
  styleUrls: ['./board-lists.component.css']
})
export class BoardListsComponent implements OnInit{

  public boardId:number;
  public title: string;
  public faTrash = faTrash;
  public faEdit = faEdit;
  public faCheck = faCheck;

  public boardLists: BoardList[];

  public newListTitle: string;
  public isEditable: boolean = false;

  constructor(private route: ActivatedRoute, public boardListService: BoardListService, public boardService: BoardService, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=> {
      this.boardId = params['id'];
    });
    this.boardListService.getBoard(this.boardId).subscribe(
      (response: Board) => {
        this.title = response.title;
      },
      (error) => {
        console.log(error);
      }
    )
    this.getBoardLists();
  }

  public onAddNewListHandler = () => {
    this.boardListService.newBoardList(this.newListTitle, this.boardId).subscribe(
      {
        next: (response: BoardList) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error.message);
        },
        complete: () => {
          this.newListTitle = "";
          this.getBoardLists();
        }
      }
    )
    
  }

  public getBoardLists = () => {
    this.boardListService.getBoardLists(this.boardId).subscribe(
      (response: BoardList[]) => {
        this.boardLists = response;
      },
      (error) => {
        console.log(error.message);
      }
    )
  }

  public onDeleteBoardHandler = () => {
    this.boardService.deleteBoard(this.boardId).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error.message);
      }
    )
    this.router.navigate([""]);
  }

  public onToggleBoardEditHandler = (isEditable:boolean) => {
    this.isEditable = isEditable;
  }

  public onBoardEditHandler = () => {
    if(this.title){
      this.boardService.updateBoard(this.boardId, this.title).subscribe(
        (response: Board) => {
          this.title = response.title;
        },
        (error) => {
          console.log(error.message);
        },
      )
      this.onToggleBoardEditHandler(false);
    }
  }
}
