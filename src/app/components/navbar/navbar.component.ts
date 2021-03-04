import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }
  getTitle() {
    let title: any = this.router.url.split('/').slice(1)[0];
    if (title.split('-') != undefined) {
      return title.split('-').join(' ');
    }
    return title;

  }
}
