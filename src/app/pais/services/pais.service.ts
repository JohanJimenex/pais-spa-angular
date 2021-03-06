import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { IPais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _urlBase: string = "https://restcountries.com/v2/";
  private _arrPaises: IPais[] = [];

  public hayError: boolean = false;
  public arrPaisesSugeridos: IPais[] = [];

  params = new HttpParams()
    .set("fields", "flags,flag,name,capital,population,translations,alpha2Code,region,subregion");


  get arrPaises(): IPais[] {
    return this._arrPaises;
  }

  constructor(private http: HttpClient) { }

  buscarPais(query: string): void {

    this._arrPaises = [];
    this.arrPaisesSugeridos = [];

    this.hayError = false;

    this.http.get<IPais[]>(`${this._urlBase}name/${query}`, { params: this.params })
      .subscribe({
        next: (resp: IPais[]) => {

          this._arrPaises = resp;

        },
        error: (err) => {
          // este codigo se eejcuta si  solo existe un error
          this.hayError = true;
        }
      })



    //Esta forma está deprecada:
    // this.http.get<IPais[]>(`${this._urlBase}/name/${query}`)
    //   .subscribe((resp: IPais[]) => {
    //     this._arrPaises = resp;
    //     this.hayError = true;
    //   }, (err) => {
    //     //este codigo se eejcuta si  solo existe un error
    //     this.hayError = true;

    //   });


  }

  // Otra forma nueva de Fernando video 107:
  // buscarPais(query: string): Observable<any> {
  //   return this.http.get(`${this._urlBase}/name/${query}`)
  //     .pipe(//permite ejcutar operadores de rxjs
  //     // operador cathError,es un funcion se ejecuta si hay un error, el of transforma lo que sea en un observable (promesa)
  //     //eje: un arreglo con un string,(recuerda luego ejecutar el subscribe(resp=>{etc})) en el otro script
  //       catchError(err => of(['Klk hay un error mio']))
  //     );
  // }

  buscarPorCapital(query: string): void {
    this._arrPaises = [];

    this.hayError = false;

    this.http.get<IPais[]>(`${this._urlBase}capital/${query}`, { params: this.params })
      .subscribe(
        {
          next: (resp: IPais[]) => {
            this._arrPaises = resp;
          },
          error: (err) => {
            // este codigo se eejcuta si  solo existe un error
            this.hayError = true;
          }
        }
      )
  }

  buscarPorCodigo(idPais: string): void {

    this.hayError = false;
    this._arrPaises = [];// lo reinicio para usar el loading

    //ojo esto solo devuelve u solo objeto , no un arreglo
    this.http.get<IPais>(`${this._urlBase}alpha/${idPais}`, { params: this.params })
      .subscribe(
        {
          next: (resp: IPais) => {

            this._arrPaises.push(resp);
          },
          error: (err) => {
            // este codigo se eejcuta si  solo existe un error
            this.hayError = true;
          }
        }
      )
  }

  buscarPorRegion(query: string): void {

    this.hayError = false;
    this._arrPaises = [];// lo reinicio para usar el loading

    //ojo esto solo devuelve u solo objeto , no un arreglo
    this.http.get<IPais[]>(`${this._urlBase}regionalbloc/${query}`, { params: this.params })
      .subscribe(
        {
          next: (resp: IPais[]) => {
            console.log(resp);

            this._arrPaises = resp;
          },
          error: (err) => {
            // este codigo se eejcuta si  solo existe un error
            this.hayError = true;
          }
        }
      )
  }


  buscarPaisSugeridos(query: string): void {

    this.arrPaisesSugeridos = [];

    this.http.get<IPais[]>(`${this._urlBase}name/${query}`, { params: this.params })
      .subscribe((resp: IPais[]) => {

        this.arrPaisesSugeridos = resp.splice(0, 5);

      })
  }


}
