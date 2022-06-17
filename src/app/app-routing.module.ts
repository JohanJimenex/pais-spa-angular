import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


const routes: Routes = [
  {
    path: "pais",
    component: PorPaisComponent,
    pathMatch: "full" //esto es para que el url se muestre completo y evite conflicto con otras ruta
  },
  {
    path: "region",
    component: PorRegionComponent,
  },
  {
    path: "capital",
    component: PorCapitalComponent,
  },
  {
    path: "pais/:id",
    component: VerPaisComponent,
  },
  {
    path: "**",
    redirectTo: "pais"
    // redirectTo: 404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }