import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../models/compte.model';
const BaseUrl='http://localhost:8080/pi/b/';
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }
  getCompte(data:any):Observable<Compte> {return this.http.get<Compte> (`${BaseUrl}retrieve_compte/${data.code}`)}
}
