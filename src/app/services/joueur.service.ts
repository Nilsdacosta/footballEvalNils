import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable, throwError} from "rxjs";
import {retry, catchError} from "rxjs/operators";
import {Joueur} from "../classes/joueur";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  apiUrl = environment.apiUrl + '/players';
  constructor(private httpClient: HttpClient) { }

  errorHandler(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code : ' +
        error.statut + ' message :' + error.message
    }

    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  getAll(): Observable<Joueur[]>{
    return this.httpClient.get<Joueur[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  getOne(id: number): Observable<Joueur>{
    return this.httpClient.get<Joueur>(this.apiUrl+"/"+id).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  add(joueur: Joueur): Observable<Joueur>{
    return this.httpClient.post<Joueur>(this.apiUrl, joueur)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  delete(id: number): Observable<Joueur>{
    return this.httpClient.delete<Joueur>(this.apiUrl+"/"+id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }
}
