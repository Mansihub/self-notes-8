import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url='http://localhost:3000/enroll';
  // above is the url to which we post the data
  constructor(private http:HttpClient) {}
  //  it allows the service to use the HttpClient for making HTTP requests.
  enroll(user:User){
    return this.http.post<any>(this.url,user).pipe(catchError(this.errorHandler))
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
