import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapaComponent } from './capa/capa.component';
import { DialogoComponent } from './dialogo/dialogo.component';
import { MapaComponent } from './mapa/mapa.component';
import { SobreComponent } from './sobre/sobre.component';
import { TrilhaComponent } from './trilha/trilha.component';

@NgModule({
  declarations: [
    AppComponent,
    CapaComponent,
    DialogoComponent,
    MapaComponent,
    SobreComponent,
    TrilhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
