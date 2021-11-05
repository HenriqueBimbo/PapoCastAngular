import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phyton',
  templateUrl: './phyton.component.html',
  styleUrls: ['./phyton.component.css']
})
export class PhytonComponent implements OnInit {

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
