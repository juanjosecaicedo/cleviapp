import { Component, OnInit } from '@angular/core';
import { RootService } from './../../services/root.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public isOpen = false;
  public nuevoCliente = false;

  constructor(public rootService: RootService) { }

  ngOnInit(): void { }

}
