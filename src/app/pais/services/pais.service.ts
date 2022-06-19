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
  public hayError: boolean = false;


  get arrPaises(): IObjResponse[] {
    return this._arrPaises;
  }

  constructor(private http: HttpClient) { }

  buscarPais(query: string): void {

    this.hayError = false;

    this.http.get<IObjResponse[]>(`${this._urlBase}/name/${query}`)
      .subscribe({
        next: (resp) => {

          this._arrPaises = resp;

        },
        error: (err) => {
          // este codigo se eejcuta si  solo existe un error
          this.hayError = true;
        }
      })

    // Otra forma anterior:
    // buscarPais(query: string): Observable<IObjResponse[]> {
    // return this.http.get<IObjResponse[]>(`${this._urlBase}/name/${query}`);

    //Esta forma está deprecada:
    // this.http.get<IObjResponse[]>(`${this._urlBase}/name/${query}`)
    //   .subscribe((resp: IObjResponse[]) => {
    //     this._arrPaises = resp;
    //     this.hayError = true;
    //   }, (err) => {
    //     //este codigo se eejcuta si  solo existe un error
    //     this.hayError = true;

    //   });


  }

}
