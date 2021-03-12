import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertConfirmComponent } from './alert-confirm.component';

declare interface OPTIONS_MODAL {
  title: string;
  message: string;
  icon?: string;
  btnOkText?: string;
  btnCancelText?: string;
  dialogSize?: string;
}

declare enum sizeTipes {
  SM = 'sm',
  LG = 'lg',
  MD = 'md',
  XL = 'xl'
}

@Injectable({
  providedIn: 'root'
})

export class AlertDialogConfirmService {

  constructor(private modalServie: NgbModal) { }

  public confirm(options: OPTIONS_MODAL): Promise<boolean> {

    type sizing = 'sm' | 'md' | 'lg' | 'xl';

    const {
      title,
      icon = 'fas fa-exclamation-triangle',
      message,
      btnOkText = 'OK',
      btnCancelText = 'Cancelar',
      dialogSize = 'md' } = options;

    const modalRef = this.modalServie.open(AlertConfirmComponent, { centered: true, size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    modalRef.componentInstance.icon = icon;
    return modalRef.result;
  }
}
