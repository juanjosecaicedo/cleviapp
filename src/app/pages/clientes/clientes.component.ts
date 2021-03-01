import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  public isOpen: boolean = false;
  public nuevoCliente = false;

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  public showModal(content): void {
    this.modal.open(content, { centered: true, size: 'lg' });
  }
}
