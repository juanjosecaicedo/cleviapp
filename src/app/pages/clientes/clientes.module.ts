import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';


@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    NgbModule
  ]
})
export class ClientesModule { }
