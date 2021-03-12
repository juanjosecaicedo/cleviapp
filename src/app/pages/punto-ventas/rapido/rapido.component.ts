import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-rapido',
  templateUrl: './rapido.component.html',
  styleUrls: ['./rapido.component.scss']
})
export class RapidoComponent implements OnInit {

  constructor(public rootService: RootService) { }

  ngOnInit(): void {
  }
  public callback() {
    console.log('callback');
  }
}
