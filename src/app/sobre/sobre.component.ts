import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  div: boolean
  constructor() {
    this.div = false;
  }
  
  ngOnInit(): void {
  }

  mostrar(){
    this.div = true;
  }

}
