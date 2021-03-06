import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public rootService: RootService) { }

  ngOnInit() { }
  public getTitle() {
    let title: any = this.router.url.split('/').slice(1)[0];
    if (title.split('-') != undefined) {
      return title.split('-').join(' ');
    }
    return title;
  }
}
