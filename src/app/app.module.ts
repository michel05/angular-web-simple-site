import { ContatoModule } from './contato/contato.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { NossaVisaoModule } from './nossa-visao/nossa-visao.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContatoModule,
    NossaVisaoModule,
    QuemSomosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
