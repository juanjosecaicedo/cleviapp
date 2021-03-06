import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-retiros-deposito-efectivo',
  templateUrl: './retiros-deposito-efectivo.component.html',
  styleUrls: ['./retiros-deposito-efectivo.component.scss']
})
export class RetirosDepositoEfectivoComponent implements OnInit {

  public nuevoRetiro = true;
  public indexSlide = 0;
  constructor(public rootService: RootService) { }

  ngOnInit(): void { }

}
