import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cuentas-por-cobras',
  templateUrl: './cuentas-por-cobras.component.html',
  styleUrls: ['./cuentas-por-cobras.component.scss']
})
export class CuentasPorCobrasComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  public showModal(content: void): void {
    this.modal.open(content, { centered: true, size: 'lg' });
  }

}
