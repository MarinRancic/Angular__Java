import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Board } from './board';
import { BoardList } from './boardList';

@Injectable({
  providedIn: 'root'
})
export class BoardListService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getBoard(id:number): Observable<Board> {
    return this.http.get<Board>(`${this.apiServerUrl}/board/${id}`)
  }

  public newBoardList(title:string, boardId:number): Observable<BoardList> {
    return this.http.post<BoardList>(`${this.apiServerUrl}/boardList/add`, {title: title, id:boardId});
  }

  public getBoardLists(boardId:number): Observable<BoardList[]> {
    return this.http.get<BoardList[]>(`${this.apiServerUrl}/board/${boardId}/lists`);
  }

  public deleteBoardList(listId:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/boardList/delete/${listId}`);
  }

  public editBoardList(id:number, title:string): Observable<BoardList> {
    return this.http.put<BoardList>(`${this.apiServerUrl}/boardList/update`, {id, title});
  }
}
