import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.css']
})
export class NetComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltar(){

    this.router.navigate(['home'])
  
  }
 
      
    ramo() {
      this.router.navigate(['home/ramo'])

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




