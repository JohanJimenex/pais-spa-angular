import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IObjResponse } from '../interfaces/pais.interface';





@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _urlBase: string = "https://restcountries.com/v2/";
  private _arrPaises: IObjResponse[] = [];
  


  get arrPaises(): IObjResponse[] {
    return this._arrPaises;
  }

  constructor(private http: HttpClient) { }

  buscarPais(query: string): void {

    // Otra forma anterior:
    // buscarPais(query: string): Observable<IObjResponse[]> {
    // return this.http.get<IObjResponse[]>(`${this._urlBase}/name/${query}`);

    this.http.get<IObjResponse[]>(`${this._urlBase}/name/${query}`)
      .subscribe((resp: IObjResponse[]) => {
        this._arrPaises = resp;
      }, (err) => {
        console.log(err);

      });

  }




}
