import { Component, OnInit } from '@angular/core';

import { faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit{
  public boards: Board[];

  public faUser = faUser;
  public faCirclePlus = faCirclePlus;

  public isOpen: boolean = false;

  constructor(public boardService: BoardService, private router: Router) {}

  ngOnInit(): void {
    this.getBoards();
  }

  public getBoards(): void {
    this.boardService.getBoards().subscribe(
      (response: Board[]) => {
        this.boards = response;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  
  public onPageChangeHandler = (page: string, id:number | null = null):void => {
    this.router.navigate([page, id]);
  }

  toggleModal = (open:boolean) => {
    this.isOpen = open;
  }

}
