import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public anoActual: number;
  constructor() { }

  ngOnInit(): void {
    this.getAnoActual();
  }

  public getAnoActual(){

    const ano = new Date();
    this.anoActual = ano.getFullYear();
  }

}
