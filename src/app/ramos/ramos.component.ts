import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_INITIALIZER } from '@angular/router';

@Component({
  selector: 'app-ramos',
  templateUrl: './ramos.component.html',
  styleUrls: ['./ramos.component.css']
})
export class RamosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltar(){

    this.router.navigate(['home'])
  
 

   
}
  
  net() {

    this.router.navigate(['home/net'])

  }

  css() {

    this.router.navigate(['home/css'])

  }

  phyton() {


    this.router.navigate(['home/phyton'])

  }

  html() {

    this.router.navigate(['home/html'])



  }

  rest() {

    this.router.navigate(['home/rest'])



  }
}
