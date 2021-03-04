import { Component } from '@angular/core';
import { ClientesComponent } from './../../pages/clientes/clientes.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
// componentes punto de ventas
import { RetirosDepositoEfectivoComponent } from './../../pages/caja/retiros-deposito-efectivo/retiros-deposito-efectivo.component';
import { RapidoComponent } from './../../pages/punto-ventas/rapido/rapido.component';
import { ComedorComponent } from './../../pages/punto-ventas/comedor/comedor.component';
// componentes de caja
import { DomicilioComponent } from 'src/app/pages/punto-ventas/domicilio/domicilio.component';
import { AperturaCajaComponent } from './../../pages/caja/apertura-caja/apertura-caja.component';
import { CorteCajaComponent } from 'src/app/pages/caja/corte-caja/corte-caja.component';
import { ParametroCajaComponent } from 'src/app/pages/caja/parametro-caja/parametro-caja.component';
import { CuentasPorCobrasComponent } from 'src/app/pages/caja/cuentas-por-cobras/cuentas-por-cobras.component';
import { MonitorVentasComponent } from 'src/app/pages/caja/monitor-ventas/monitor-ventas.component';
import { PromocionComponent } from 'src/app/pages/caja/promocion/promocion.component';
import { ConsultasCuentasComponent } from 'src/app/pages/caja/consultas-cuentas/consultas-cuentas.component';
import { CerrarCajaComponent } from 'src/app/pages/caja/cerrar-caja/cerrar-caja.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'apertura-de-caja', component: AperturaCajaComponent },
    { path: 'retiros-y-depositos-de-efectivos', component: RetirosDepositoEfectivoComponent },
    { path: 'corte-de-caja', component: CorteCajaComponent },
    { path: 'parametro-de-caja', component: ParametroCajaComponent },
    { path: 'cuentas-por-cobrar', component: CuentasPorCobrasComponent },
    { path: 'monitor-de-ventas', component: MonitorVentasComponent },
    { path: 'consultas-de-cuentas', component: ConsultasCuentasComponent },
    { path: 'promocion', component: PromocionComponent },
    { path: 'rapido', component: RapidoComponent },
    { path: 'comedor', component: ComedorComponent },
    { path: 'domicilio', component: DomicilioComponent },
    { path: 'cerrar-caja', component: CerrarCajaComponent }
];
