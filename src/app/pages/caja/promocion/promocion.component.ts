import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.component.html',
  styleUrls: ['./promocion.component.scss']
})
export class PromocionComponent implements OnInit {
  public horaInicio = '12:00';
  public horaFin = '12:00';
  public nuevaPromocion = true;
  constructor(private timePicker: AmazingTimePickerService, private modal: NgbModal) { }

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

  public showModal(content: any): void {
    this.modal.open(content, { centered: true, size: 'xl' });
  }

}
