import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapaComponent } from './capa/capa.component';
import { DialogoComponent } from './dialogo/dialogo.component';
import { HomeComponent } from './home/home.component';
import { MapaComponent } from './mapa/mapa.component';
import { SobreComponent } from './sobre/sobre.component';
import { TrilhaComponent } from './trilha/trilha.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'mapa', component:MapaComponent},
  {path: 'sobre', component:SobreComponent},
  {path: 'trilhas/:id', component:TrilhaComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
