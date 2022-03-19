import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  juros = [];

  constructor() {}

  ngOnInit() {}

  getJurosCompostos() {
    for (let i = 1; i <= this.n; i++) {
      let simples = this.vp * (1 + (this.j / 100) * i);
      let composto = Math.pow(this.vp * (1 + this.j / 100), i);
      this.juros.push({ simples, composto, periodo: i });
    }
    return this.juros;
  }
}
