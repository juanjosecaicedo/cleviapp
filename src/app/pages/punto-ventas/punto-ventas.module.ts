import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuntoVentasRoutingModule } from './punto-ventas-routing.module';
import { RapidoComponent } from './rapido/rapido.component';
import { ComedorComponent } from './comedor/comedor.component';
import { DomicilioComponent } from './domicilio/domicilio.component';

@NgModule({
  declarations: [RapidoComponent, ComedorComponent, DomicilioComponent],
  imports: [
    CommonModule,
    PuntoVentasRoutingModule,
    ComponentsModule,
  ]
})
export class PuntoVentasModule { }
