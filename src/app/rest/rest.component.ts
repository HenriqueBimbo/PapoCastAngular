import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

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

    css() {

      this.router.navigate(['home/css'])

    }

}
