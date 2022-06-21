import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html'
})
export class InputPaisComponent implements OnInit {


  inputBuscarPais: string = "";

  @Input() placeholder: string = "";

  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  //Creamos este evento para llamarlo desde otros html, y ejecutar una funcion emitiendo el valor $event
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();



  //es un observable, es de rxjs
  debouncer: Subject<string> = new Subject();


  //se dispara una sola vez cuando el componente se crea
  //inicializa la subscripcion para escuchar todo el tiempo
  ngOnInit(): void {
    this.debouncer.pipe(
      // con el operador pipe() podemos ejecutar muchas funciones que trae rxjs
      // este metotodo es como setTimeout() o un delay
      debounceTime(400)

    ).subscribe(valor => {
      //esto se ejeucta desde el html que sue este componente
      this.onDebounce.emit(valor);

    });
  }

  teclaPresionada(event: any): void {

    const valor = event.target.value;
    this.debouncer.next(valor)//le agregamos valor al debouncer
  }

  buscar(): void {
    this.onSearch.emit(this.inputBuscarPais)
  }

}
