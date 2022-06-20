import { Component, Input } from '@angular/core';
import { IPais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html'
})
export class TablaPaisComponent {

  //esto se llena en vivo desde cualqueir componente que queira ebviarle datos llamandolo como atributo [arrPaises]="5+5"
  @Input() arrPaises: IPais[] = [];

}
