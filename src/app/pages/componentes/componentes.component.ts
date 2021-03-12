import { Component, OnInit } from '@angular/core';
import { AlertDialogConfirmService } from 'src/app/components/alert-confirm/alert-dialog-confirm.service';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss']
})
export class ComponentesComponent implements OnInit {

  constructor(private alertDialogConfirmService: AlertDialogConfirmService) { }

  ngOnInit(): void {
  }

  public async opendAlertConfirm() {
    const confirmacion = await Promise.resolve(this.alertDialogConfirmService.confirm(
      { title: 'Por favor confirmar...', message: 'Realmente quieres...?', icon: 'fas fa-exclamation-circle', dialogSize: 'sm' }
    ).then(confirmed => confirmed)
      .catch(() => {
        console.log('El usuario descartó el cuadro de diálogo (por ejemplo, usando ESC, haciendo clic en el icono de la cruz o haciendo clic fuera del cuadro de diálogo)')
        return;
      }));

    console.log(confirmacion);
  }

}
