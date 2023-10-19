import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Board } from './board';

@Injectable({
  providedIn: 'root'
})
export class BoardService{

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.apiServerUrl}/board`);
  }

  public newBoard(title: string): Observable<Board> {
    return this.http.post<Board>(`${this.apiServerUrl}/board/add`, {title});
  }

  public deleteBoard(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/board/delete/${id}`);
  }

  public updateBoard(id:number, title:string): Observable<Board> {
    return this.http.put<Board>(`${this.apiServerUrl}/board/update`, {id, title})
  }

}