import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './paginas/barras/barras.component';
import { BarrasDobleComponent } from './paginas/barras-doble/barras-doble.component';
import { DonaComponent } from './paginas/dona/dona.component';
import { DonaHttpComponent } from './paginas/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { GraficasComponent } from './servicios/graficas/graficas.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
    GraficasComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
