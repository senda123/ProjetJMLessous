import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model';
const BaseUrl='http://localhost:8080/pi/o/';
@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http:HttpClient) { }
  getAllOperations():Observable<Operation[]> {return this.http.get<Operation[]> (`${BaseUrl}retrieve_all_opts`)}
  getAllOperationsBycode(code:string):Observable<Operation[]> {return this.http.get<Operation[]> (`${BaseUrl}retrieve_all_optsbycode/${code}`)}
  retrait_opt(data:any): Observable<any> {
    return this.http.post(`${BaseUrl}add/opt_retrait/${data.code}/${data.montant}`,{});
  }
  versement_opt(data:any): Observable<any> {
    return this.http.post(`${BaseUrl}add/opt_versement/${data.code}/${data.montant}`, {});
  }
  virement_opt(data:any): Observable<any> {
    return this.http.post(`${BaseUrl}add/opt_virement/${data.code}/${data.code2}/${data.montant}`, {});
  }
  filter(data:any): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${BaseUrl}filter/${data.code}/${data.type}`);
  }
}
