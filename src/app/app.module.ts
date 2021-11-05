import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FundoComponent } from './fundo/fundo.component';
import { Card1Component } from './header/card1/card1.component';
import { RamosComponent } from './ramos/ramos.component';
import { NetComponent } from './net/net.component';
import { PhytonComponent } from './phyton/phyton.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { RestComponent } from './rest/rest.component';



@NgModule({
  declarations: [
    AppComponent,
    
    CardComponent,
    CadastroComponent,
  
    HeaderComponent,
       FooterComponent,
       FundoComponent,
       Card1Component,
       RamosComponent,
       NetComponent,
       PhytonComponent,
       CssComponent,
       HtmlComponent,
       RestComponent,
      
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule ,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
