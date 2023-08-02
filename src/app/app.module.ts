import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfiloPersonaleComponent } from './profilo-personale/profilo-personale.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { TabellaContattiComponent } from './tabella-contatti/tabella-contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfiloPersonaleComponent,
    ContattiComponent,
    DahsboardComponent,
    TabellaContattiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
