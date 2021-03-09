import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(public modal: NgbModal) { }

 

  public showModal(content: any, size = 'xl'): void {
    this.modal.open(content, {centered: true, size});
  }

  public closedAllModal(){
    this.modal.dismissAll('Closed all');
  }

}
