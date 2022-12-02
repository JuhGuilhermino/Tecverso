import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrilhasService {
  private URL: string;

  constructor( private http: HttpClient ) {
    this.URL = 'http://localhost:3000/trilhas';
  }

  obterTudo(): Observable<any> {
    return this.http.get(`${this.URL}`);
  }
  obterArtigo(id: number): Observable<any> {
    return this.http.get(
      `${this.URL}/${id}`
    )
  }
}
