import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

   email = ''
   senha = '' 
  
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    this.router.navigate(['login'])


  }
  cadastrar(){
 
  
    alert('Cadastro concluído com sucesso!');
    console.log("Novo cadastro solicitado")
    console.log('email:' , this.email);
    console.log('senha:' , this.senha)
  
  
  
  }

  

}
 


 
