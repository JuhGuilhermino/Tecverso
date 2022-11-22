import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
  chat1: boolean;
  chat2: boolean;
  chat3: boolean;
  resp1: boolean;
  resp1A: boolean;
  resp1B: boolean;
  resp2: boolean;
  resp2A: boolean;
  resp2B: boolean;
  resp2C: boolean;
  resp2D: boolean;
  resp3: boolean;
  resp3A: boolean;
  resp3B: boolean;
  resp3C: boolean;
  resp3D: boolean;
  resp3E: boolean;
  resp3F: boolean;
  resp3G: boolean;
  resp4:boolean;
  bnt1: boolean;
  bnt2: boolean;

  constructor() {
      this.chat1 = true;
      this.chat2 = false;
      this.chat3 = false;
      this.resp1 = true;
      this.resp1A = false;
      this.resp1B = false;
      this.resp2 = false;
      this.resp2A = false;
      this.resp2B = false;
      this.resp2C = false;
      this.resp2D = false;
      this.resp3 = false;
      this.resp4 = false;
      this.resp3A = false;
      this.resp3B = false;
      this.resp3C = false;
      this.resp3D = false;
      this.resp3E = false;
      this.resp3F = false;
      this.resp3G = false;
      this.bnt1 = false;
      this.bnt2 = false;
  }

  ngOnInit(): void {
  }

  mudarParaChat2(){
    this.chat1 = false;
    this.chat2 = true;
    this.resp2 = true;
    this.bnt1 = false;
  }

  mudarParaChat3(){
    this.chat2 = false;
    this.chat3 = true;
    this.resp3 = true;
    this.bnt2 = false;
  }

  exibirResp1A(){ 
    this.resp1A =true;
    this.resp1 = false;
    this.bnt1 = true;
  }

  exibirResp1B(){ 
    this.resp1B = true;
    this.resp1 = false;
    this.bnt1 = true;
  }

  exibirResp2A(){ 
    this.resp2A = true;
    this.resp2B = false;
    this.resp2C = false;
    this.resp2D = false;
    this.resp2 = false;
    this.bnt2 = true;
  }

  exibirResp2B(){ 
    this.resp2A =  false;
    this.resp2B = true;
    this.resp2C = false;
    this.resp2D = false;
    this.resp2 = false;
    this.bnt2 = true;
  }

  exibirResp2C(){ 
    this.resp2A = false;
    this.resp2B = false;
    this.resp2C = true;
    this.resp2D = false;
    this.resp2 = false;
    this.bnt2 = true;
  }

  exibirResp2D(){ 
    this.resp2A = false;
    this.resp2B = false;
    this.resp2C = false;
    this.resp2D = true;
    this.resp2 = false;
    this.bnt2 = true;
  }

  exibirResp3A(){ 
    this.resp3A = true;
    this.resp3B = false;
    this.resp3C = false;
    this.resp3D = true;
    this.resp3 = false;
    this.resp4 = true;
  }

  exibirResp3B(){ 
    this.resp3A = false;
    this.resp3B = true;
    this.resp3C = false;
    this.resp3D = true;
    this.resp3 = false;
    this.resp4 = true;
  }

  exibirResp3C(){ 
    this.resp3A = false;
    this.resp3B = false;
    this.resp3C = true;
    this.resp3D = true;
    this.resp3 = false;
    this.resp4 = true;
  }

  exibirResp3E(){ 
    this.resp3E = true;
    this.resp3F = false;
    this.resp3G = true;
    this.resp4 = false;
  }

  exibirResp3F(){ 
    this.resp3E = false;
    this.resp3F = true;
    this.resp3G = true;
    this.resp4 = false;
  }
}
