import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

import { CardComponent } from './card/card.component';
import { CssComponent } from './css/css.component';
import { Card1Component } from './header/card1/card1.component';
import { HeaderComponent } from './header/header.component';
import { HtmlComponent } from './html/html.component';
import { NetComponent } from './net/net.component';
import { PhytonComponent } from './phyton/phyton.component';
import { RamosComponent } from './ramos/ramos.component';
import { RestComponent } from './rest/rest.component';



const routes: Routes = [

  {path: '' , redirectTo:'login' , pathMatch: 'full'} , 
  {path:  'login' , component: CardComponent} , 
  {path: 'cadastro' , component: CadastroComponent} , 
  {path: 'home' , component: HeaderComponent} ,
  {path: 'home/ramo' , component: RamosComponent} ,
  {path: 'home/net' , component: NetComponent} ,
  {path: 'home/phyton' , component: PhytonComponent} ,
  {path: 'home/css' , component: CssComponent} ,
  {path: 'home/html' , component: HtmlComponent} , 
  {path: 'home/rest' , component: RestComponent}
 
  
  
  

 



  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
