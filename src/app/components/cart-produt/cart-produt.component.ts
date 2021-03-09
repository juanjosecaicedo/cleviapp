import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-cart-produt',
  templateUrl: './cart-produt.component.html',
  styleUrls: ['./cart-produt.component.scss']
})
export class CartProdutComponent implements OnInit {

  valueKeyboard = '';
  constructor(public rootService: RootService) { }

  ngOnInit(): void {
  }

  public setValueKeyboard(e: EventTarget) {
    this.valueKeyboard += (e as HTMLInputElement).value;
  }

  public deleteCaracter() {
    let dataArray = this.valueKeyboard.split('');
    if (dataArray.length > 0) {
      dataArray.pop();
      this.valueKeyboard = dataArray.join('');
    }
  }
}
