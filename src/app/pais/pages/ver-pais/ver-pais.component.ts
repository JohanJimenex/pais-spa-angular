import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    this.activatedRouter.params.subscribe((idParam: any) => {

      this.paisServices.buscarPorCodigo(idParam.id);

    });

  }

}
