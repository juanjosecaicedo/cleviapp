import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';


@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.scss']
})
export class PromocionComponent implements OnInit {
  public horaInicio = '12:00';
  public horaFin = '12:00';
  constructor(private timePicker: AmazingTimePickerService) { }

  ngOnInit(): void {
  }
  public openPiker() {
    const amazingTimePicker = this.timePicker.open({
      theme: 'material-green'
    });
    return amazingTimePicker.afterClose();
  }
  public selectPikerStar(): void {
    this.openPiker().subscribe(time => this.horaInicio = time);
  }
  public selectPikerEnd(): void {
    this.openPiker().subscribe(time => this.horaFin = time);
  }

}
