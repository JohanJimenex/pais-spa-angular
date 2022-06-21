import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { IPais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  //injecccion de dependencia
  constructor(private paisService: PaisService) { }


  get arrPaises(): IPais[] {
    return this.paisService.arrPaises;
  }

  get hayError(): boolean {
    return this.paisService.hayError;
  }

  buscar(palabra: string): void {

    if (palabra.trim().length == 0) { return; }

    this.paisService.buscarPais(palabra)

    // let resp = this.paisService.buscarPais(this.inputBuscarPais)
    // resp.subscribe(resp => {
    //   console.log(resp);

    // });

  }


  sugerencias(palabra: string): void {
    //TODO: crear sugerencia

    console.log(palabra);
    
  }

}
