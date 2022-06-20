import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html'
})
export class InputPaisComponent {

  @Input() inputBuscarPais: string = "";

  buscar(): void {
    console.log(this.inputBuscarPais + "klk");
    
  }

}
