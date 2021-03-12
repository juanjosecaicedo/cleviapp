import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisponibilidadProductosComponent } from './disponibilidad-productos/disponibilidad-productos.component';
import { TurnosAbiertosComponent } from './turnos-abiertos/turnos-abiertos.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { CartProdutComponent } from './cart-produt/cart-produt.component';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DisponibilidadProductosComponent,
    TurnosAbiertosComponent,
    CarouselSliderComponent,
    CartProdutComponent,
    AlertConfirmComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CarouselSliderComponent,
    CartProdutComponent
  ]
})
export class ComponentsModule { }
