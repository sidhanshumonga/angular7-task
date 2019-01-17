import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class AjaxserviceService {


  constructor(private http: HttpClient) { }

  getCountries(): Observable<any>{
    return this.http.get("https://restcountries.eu/rest/v2/all?fields=name;capital");
  }

}
