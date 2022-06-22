import { Component } from '@angular/core';
import { IPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {


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

    this.paisService.buscarPorCapital(palabra)

    // let resp = this.paisService.buscarCapital(this.inputBuscarPalabra)
    // resp.subscribe(resp => { console.log(resp);  });

  }

}
