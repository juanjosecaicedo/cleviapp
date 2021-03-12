import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClientesComponent, NgbdSortableHeader } from './clientes.component';


@NgModule({
  imports: [BrowserModule, CommonModule, NgbModule],
  declarations: [ClientesComponent, NgbdSortableHeader],
  exports: [ClientesComponent],
  bootstrap: [ClientesComponent]
})
export class ClientesModule { }
