import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from "rxjs/operators"; // es un oeprador de rxjs recibe un observable y devuelve otro observable

import { PaisService } from '../../services/pais.service';
import { IPais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private paisServices: PaisService
  ) { }


  get arrPaises(): IPais[] {
    return this.paisServices.arrPaises;
  }


  ngOnInit(): void {


    this.activatedRouter.params.subscribe((urlParams: any) => {
      this.paisServices.buscarPorCodigo(urlParams.id);
    });



    //Esta es la forma con rxjs
    // this.activatedRouter.params
    //   .pipe(
    //     //el metodo no esta retornadno nad apor eso no funciona, pero guardaré el ejemplo con rxjs
    //     switchMap((param) => this.paisServices.buscarPorCodigo(param.id)),
    //     tap( resp => console.log(resp) ) //solo recibe el parametro de la ejecucion anterior
    //   )
    //   .subscribe((urlParams: any) => {
    //     console.log(urlParams);
    //   });
  }

}



