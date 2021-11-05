import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ramo() {
    this.router.navigate(['home/ramo'])

  }
  net() {

    this.router.navigate(['home/net'])

  }

  phyton() {

    this.router.navigate(['home/phyton'])

  }
  css() {

    this.router.navigate(['home/css'])


  }

  html() {

    this.router.navigate(['home/html'])

  }

  rest() {

    this.router.navigate(['home/rest'])

  }

}
