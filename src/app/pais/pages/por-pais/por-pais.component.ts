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

  inputBuscarPais: string = "";// se llena en vivo desde el html

  get arrPaises(): IPais[] {
    return this.paisService.arrPaises;
  }

  get hayError(): boolean {
    return this.paisService.hayError;
  }

  buscar(): void {

    if (this.inputBuscarPais.trim().length == 0) { return; }

    this.paisService.buscarPais(this.inputBuscarPais)

    // let resp = this.paisService.buscarPais(this.inputBuscarPais)
    // resp.subscribe(resp => {
    //   console.log(resp);

    // });

  }
}
