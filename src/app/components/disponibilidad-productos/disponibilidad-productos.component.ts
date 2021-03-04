import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disponibilidad-productos',
  templateUrl: './disponibilidad-productos.component.html',
  styleUrls: ['./disponibilidad-productos.component.scss']
})
export class DisponibilidadProductosComponent implements OnInit {

  @Input() modal: any;

  constructor() { }

  ngOnInit(): void { }

}
