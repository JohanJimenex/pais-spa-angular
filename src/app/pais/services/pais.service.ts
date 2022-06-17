import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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


    this.http.get<IObjResponse[]>(`${this._urlBase}/name/${query}`)
      .subscribe((resp: IObjResponse[]) => {

        this._arrPaises = resp;



      });


  }




}
