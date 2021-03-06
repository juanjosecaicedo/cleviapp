import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-cuentas-por-cobras',
  templateUrl: './cuentas-por-cobras.component.html',
  styleUrls: ['./cuentas-por-cobras.component.scss']
})
export class CuentasPorCobrasComponent implements OnInit {

  constructor(public rootService: RootService) { }

  ngOnInit(): void {
  }

}
