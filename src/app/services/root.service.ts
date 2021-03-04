import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private modal: NgbModal) { }

  public showModal(content: any, size = 'xl'): void {
    this.modal.open(content, {centered: true, size});
  }
}
