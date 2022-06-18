import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { IObjResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  //injecccion de dependencia
  constructor(private paisService: PaisService) { }

  inputBuscarPais: string = "";// se llena en vivo desde el html

  get arrPaises(): IObjResponse[] {
    return this.paisService.arrPaises;
  }


  buscar(): void {

    if (this.inputBuscarPais.trim().length == 0) { return; }

    this.paisService.buscarPais(this.inputBuscarPais)

    console.log(this.arrPaises);

  }
}
