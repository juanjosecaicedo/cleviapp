import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootService } from './../../services/root.service';


declare interface RouteInfo {
  path: string;
  title: string;
  icon?: string;
  class?: string;
}


export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/clientes', title: 'Clientes', icon: 'ni-circle-08 text-pink', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isMenuCollapsedCaja = true;
  public isMenuCollapsedPuntoVenta = true;


  public rutasCaja: RouteInfo[] = [
    { path: 'apertura-de-caja', title: 'Apertura de caja', class: '' },
    { path: 'retiros-y-depositos-de-efectivos', title: 'Retiros y depositos de efectivos', class: '' },
    { path: 'corte-de-caja', title: 'Corte de caja', class: '' },
    { path: 'parametro-de-caja', title: 'Parámetro de caja', class: '' },
    { path: 'cuentas-por-cobrar', title: 'Cuentas por cobrar', class: '' },
    { path: 'monitor-de-ventas', title: 'Monitor de ventas', class: '' },
    { path: 'consultas-de-cuentas', title: 'Consultas de cuentas', class: '' },
    { path: 'promocion', title: 'Promoción', class: '' },
  ];
  public rutasVentas: RouteInfo[] = [
    { path: 'rapido', title: 'Rapido', class: '' },
    { path: 'comedor', title: 'Comedor', class: '' },
    { path: 'domicilio', title: 'Domicilio', class: '' }
  ];

  constructor(private router: Router, public rootService: RootService) {

  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
