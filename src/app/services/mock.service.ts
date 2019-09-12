import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
//Ngrx data 
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Author } from 'app/models';

@Injectable({ providedIn: 'root' })
export class MockService extends EntityCollectionServiceBase<Author> {
  private url = 'http://localhost:3000'; // URL to web api

  constructor(
    private http: HttpClient,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
    ) {
      super('Author', serviceElementsFactory);
    }

  getAuthors(): Observable<any> {
    return this.http.get(this.url + '/author')
  } 
}
