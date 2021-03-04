import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private modal: NgbModal) { }

  ngOnInit() { }
  getTitle() {
    let title: any = this.router.url.split('/').slice(1)[0];
    if (title.split('-') != undefined) {
      return title.split('-').join(' ');
    }
    return title;
  }

  public showModal(content: any, size: string = 'xl'): void {
    this.modal.open(content, { centered: true, size });
  }
}
