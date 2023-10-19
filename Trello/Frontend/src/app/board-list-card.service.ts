import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { BoardListCard } from './boardListCard';

@Injectable({
  providedIn: 'root'
})
export class BoardListCardService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public newBoardListCard(message:string, listId:number): Observable<BoardListCard> {
    return this.http.post<BoardListCard>(`${this.apiServerUrl}/boardListCard/add`, {message: message, id:listId});
  }

  public getBoardListCards(listId: number): Observable<BoardListCard[]> {
    return this.http.get<BoardListCard[]>(`${this.apiServerUrl}/boardList/${listId}/cards`);
  }

  public deleteBoardListCard(cardId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/boardListCard/delete/${cardId}`);
  }

  public updateBoardListCard(cardId: number, message: string): Observable<BoardListCard> {
    return this.http.put<BoardListCard>(`${this.apiServerUrl}/boardListCard/update`, {id:cardId, message: message});
  }
}
