import { Component, OnInit } from '@angular/core';
import { Artigo } from '../model/artigo';
import { TrilhasService } from '../model/trilhas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-trilha',
  templateUrl: './trilha.component.html',
  styleUrls: ['./trilha.component.css']
})
export class TrilhaComponent implements OnInit {
  div1: boolean;
  div2:boolean;
  artig: Artigo;
  id: any;
  
  constructor(private t: TrilhasService, private ad: ActivatedRoute) {
    this.div1 = true;
    this.div2 = false;
    this.artig = new Artigo();
   }


  ngOnInit(): void {
    this.id = (this.ad.snapshot.paramMap.get('id'));
    this.obterArtigo(this.id);
  }

  mostrarDiv2(){
    this.div1 = false;
    this.div2 = true;
  }

  mostrarDiv1(){
    this.div1 = true;
    this.div2 = false;
  }

  obterArtigo(id: number): void {
    this.t.obterArtigo(id).subscribe((res) => {
      this.artig = res;
      console.log(this.artig);
    });
  }

}
