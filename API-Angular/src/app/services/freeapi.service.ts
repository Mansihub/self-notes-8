import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient,HttpParams} from '@angular/common/http'
import { Posts } from '../classes/posts';
@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
  apiUrl:string='https://jsonplaceholder.typicode.com/comments';
  apiUrl2:string='https://jsonplaceholder.typicode.com/comments';
  apiUrl3:string='https://jsonplaceholder.typicode.com/posts';
  apiUrl4:string='https://jsonplaceholder.typicode.com/posts/1';
  apiUrl5:string='https://jsonplaceholder.typicode.com/posts/1';
  apiUrl6:string='https://jsonplaceholder.typicode.com/posts/1'
  constructor(private http:HttpClient) { }

getComments():Observable<any>{
   return this.http.get(this.apiUrl)
  }

getCommentsByParameter():Observable<any>{
    let param1=new HttpParams().set('postId','1');
    return this.http.get(this.apiUrl2,{params:param1})
}

post(post:Posts):Observable<any>{
  return this.http.post(this.apiUrl3,post);
}

put(post:Posts):Observable<any>{
  return this.http.put(this.apiUrl4,post);
}

patch(post:Posts):Observable<any>{
  return this.http.patch(this.apiUrl5,post);
}

delete():Observable<any>{
  return this.http.delete(this.apiUrl6);
}
}
