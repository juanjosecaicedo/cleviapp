import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CajaComponent } from './pages/caja/caja.component';
import { BlancoComponent } from './pages/blanco/blanco.component';
import { ClientesModule } from './pages/clientes/clientes.module';
import { PuntoVentasComponent } from './pages/punto-ventas/punto-ventas.component';
import { PuntoVentasModule } from './pages/punto-ventas/punto-ventas.module';
import { AperturaCajaComponent } from './pages/caja/apertura-caja/apertura-caja.component';
import { RetirosDepositoEfectivoComponent } from './pages/caja/retiros-deposito-efectivo/retiros-deposito-efectivo.component';
import { CorteCajaComponent } from './pages/caja/corte-caja/corte-caja.component';
import { ParametroCajaComponent } from './pages/caja/parametro-caja/parametro-caja.component';
import { CuentasPorCobrasComponent } from './pages/caja/cuentas-por-cobras/cuentas-por-cobras.component';
import { MonitorVentasComponent } from './pages/caja/monitor-ventas/monitor-ventas.component';
import { ConsultasCuentasComponent } from './pages/caja/consultas-cuentas/consultas-cuentas.component';
import { PromocionComponent } from './pages/caja/promocion/promocion.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { CerrarCajaComponent } from './pages/caja/cerrar-caja/cerrar-caja.component';
import { ComponentesComponent } from './pages/componentes/componentes.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ClientesModule,
    PuntoVentasModule,
    AmazingTimePickerModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CajaComponent,
    BlancoComponent,
    PuntoVentasComponent,
    AperturaCajaComponent,
    RetirosDepositoEfectivoComponent,
    CorteCajaComponent,
    ParametroCajaComponent,
    CuentasPorCobrasComponent,
    MonitorVentasComponent,
    ConsultasCuentasComponent,
    PromocionComponent,
    CerrarCajaComponent,
    ComponentesComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
