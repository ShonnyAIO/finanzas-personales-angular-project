import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class FinanzasService {

  constructor(private global: GlobalService, private http: HttpClient) { }

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  urlApi: string = this.global.urlApi();


  getDollarBCV() {
    return this.http.get(this.urlApi + 'dollar-bcv', { headers: this.headers });
  }

  getDollarParalelo() {
    return this.http.get(this.urlApi + 'dollar-paralelo', { headers: this.headers });
  }

}
