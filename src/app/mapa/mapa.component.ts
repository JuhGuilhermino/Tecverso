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
  tag1: boolean;

  constructor(private ts: TrilhasService, private router: Router) { 
    this.menu = true;
    this.mapa1 = false;
    this.mapa2 = false;
    this.mapa3 = false;
    this.mapa4 = false;
    this.tag1 = true;
  }

  public todosArt = ["1", "2"];

  onSelect(id:number){
    let a = this.todosArt;
    this.router.navigate(['/trilhas', a[id]]);
  }

  ngOnInit(): void { 
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

  mostrarTag1(){this.tag1=true}
}
