import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { RepoArray } from './user';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://api.github.com';


  getRepos(userName: string): Observable<RepoArray[]> {
    const url = `${this.configUrl}/users/${userName}/repos`
    return this.http.get<RepoArray[]>(url)
    .pipe(
        catchError(this.handleError('fetch users', []))
      );
  }

  

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    
    console.error(error); 
 
    
    console.log(`${operation}. Reason: ${error.message}`);
 
    
    return of(result as T);
  };
}
 
}
