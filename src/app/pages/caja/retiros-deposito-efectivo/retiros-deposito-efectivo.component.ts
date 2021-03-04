import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-retiros-deposito-efectivo',
  templateUrl: './retiros-deposito-efectivo.component.html',
  styleUrls: ['./retiros-deposito-efectivo.component.scss']
})
export class RetirosDepositoEfectivoComponent implements OnInit {

  public nuevoRetiro: boolean = true;
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }
  public showModal(content: any): void {
    this.modal.open(content, { centered: true, size: 'lg' });
  }
}
