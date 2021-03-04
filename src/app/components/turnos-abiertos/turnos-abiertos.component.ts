import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnos-abiertos',
  templateUrl: './turnos-abiertos.component.html',
  styleUrls: ['./turnos-abiertos.component.scss']
})
export class TurnosAbiertosComponent implements OnInit {

  @Input() modal: any;

  constructor() { }

  ngOnInit(): void {
  }

}
