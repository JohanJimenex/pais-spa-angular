import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { IPais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      .btn-selected{
        background: black !important;
        color: white !important;
      }
    `
  ]
})
export class PorRegionComponent {

  public arrRegiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC'
  ];


  public regionSeleccionada: string = "";

  constructor(private paisServices: PaisService) { }

  get arrPaises(): IPais[] {
    return this.paisServices.arrPaises;
  }

  obtenerClaseCSS(region: string): string {
    return (region == this.regionSeleccionada) ? 'btn me-1 mb-1 btn-dark' : 'btn me-1 mb-1 btn-outline-dark';
  }

  buscarPaisPorRegion(region: string): void {

    if (region == this.regionSeleccionada) { return }
    
    this.regionSeleccionada = region;

    this.paisServices.buscarPorRegion(this.regionSeleccionada);
  }

}
