import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltar(){

    this.router.navigate(['home'])
  
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

    html() {

      this.router.navigate(['home/html'])


    }

    rest() {

      this.router.navigate(['home/rest'])
  
  
  
    }


}
