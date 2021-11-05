import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

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

    css() {


      this.router.navigate(['home/css'])

    }

    rest() {

      this.router.navigate(['home/rest'])
  
  
  
    }
}
