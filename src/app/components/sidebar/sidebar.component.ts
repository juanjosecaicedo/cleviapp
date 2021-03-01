import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/clientes', title: 'Clientes',  icon: 'ni-circle-08 text-pink', class: '' },
    { path: '/caja', title: 'Caja',  icon: 'ni-money-coins text-orange', class: '' },
    { path: '/punto-de-ventas', title: 'Punto de venta',  icon: 'ni-basket text-primary', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/icons', title: 'Iconos',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Mapas',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'Perfil de usuario',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tablas',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/register', title: 'Registrarse',  icon:'ni-circle-08 text-pink', class: '' }
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
