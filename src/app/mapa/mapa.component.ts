import { Component, OnInit } from '@angular/core';
import { Artigo } from '../model/artigo';
import { TrilhasService } from '../model/trilhas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  menu: boolean;
  mapa1: boolean;
  mapa2: boolean;
  mapa3: boolean;
  mapa4: boolean;

  constructor(private ts: TrilhasService, private router: Router) { 
    this.menu = true;
    this.mapa1 = false;
    this.mapa2 = false;
    this.mapa3 = false;
    this.mapa4 = false;
  }

  public links =[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

  public todosArt = ["1", "2", "3", "4", "5","6","7","8","9", "10", "11", "12", "13", "14", "15", "16","17","18","9", "20"];

  onSelect(id:number){
    let a = this.todosArt;
    this.router.navigate(['/trilhas', a[id]]);
  }

  ngOnInit(): void { 
  }

  exibirLink(i: number){
    if (this.links[i] == false){
      this.links[i] = true;
    } else {
      this.links[i] = false;
    }
  }

  mudarParaMapa1(){
    this.menu = false;
    this.mapa1 = true;
    this.mapa2 = false;
    this.mapa3 = false;
    this.mapa4 = false;
  }

  mudarParaMapa2(){
    this.menu = false;
    this.mapa1 = false;
    this.mapa2 = true;
    this.mapa3 = false;
    this.mapa4 = false;
  }

  mudarParaMapa3(){
    this.menu = false;
    this.mapa1 = false;
    this.mapa2 = false;
    this.mapa3 = true;
    this.mapa4 = false;
  }

  mudarParaMapa4(){
    this.menu = false;
    this.mapa1 = false;
    this.mapa2 = false;
    this.mapa3 = false;
    this.mapa4 = true;
  }

}
