import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    PuntoVentasModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CajaComponent,
    BlancoComponent,
    PuntoVentasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
