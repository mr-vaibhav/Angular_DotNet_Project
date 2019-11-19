import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { IClient } from './Client';
import { Observable } from 'rxjs';

const httpheader = 
{
  headers:new HttpHeaders({'Content-Type':"application/json"})
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //private Url = 'https://localhost:44380/api/Clients';
  searchList : IClient;

  private MainUrl = 'https://localhost:44380/';

  constructor(private http: HttpClient) { }

  searchDetails(clients:IClient) : Observable<IClient[]>{
    let url = `${this.MainUrl}enterData/`;

    if(clients.FirstName != undefined){
      url = `${url}${clients.FirstName}/`;
    }

    if(clients.LastName != undefined){
      url = `${url}${clients.LastName}/`;
    }
    console.log(url);
    return this.http.get<IClient[]>(url,httpheader);
  }

 // getClient(): Observable<IClient[]> {
  //  return this.http.get<IClient[]>(this.Url);
  //}

  // getClientByParameter(): Observable<any>{
  //   let params1 = new HttpParams().set("Fname","");
  //   return this.http.get("https://localhost:44380/api/Clients",{params : params1})
  // }

  
}
