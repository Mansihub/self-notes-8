import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
// below is the injectable decorator
//it tells that this service might itself has injectable dependencies
//so to inject one service in another service we use this decorator
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url='/assets/data/employees.json';
  // private url='/assets/data/employees1.json';if this ur written then we got error->so error handling done
  constructor(private http:HttpClient) { }
  // responsible for providing employee data
getEmployees():Observable<Employee[]>{
  //return an array of employees
  return this.http.get<Employee[]>(this.url).pipe(catchError(this.errorHandler));
  // this method has to return observable of type employee array
}

// errorHandler(error:HttpErrorResponse):Observable<any>
// {
//   return Observable.throw(error.message||"server error")
  
// }
private errorHandler(error: HttpErrorResponse): Observable<any> {
  // Your custom error handling logic goes here
  console.error('An error occurred:', error);

  // Return an observable with a user-facing error message
  return throwError(error.message || 'Server error');
}
}
