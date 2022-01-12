import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly APIUrl="https://localhost:5001/";

  constructor(private http:HttpClient) { }
  getInfo():Observable<any>{
    console.log("Hello");
    return this.http.get<any>(this.APIUrl+'api/Customers');
  }
  postsignUp(val:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'api/Customers',val);
  }
  
}