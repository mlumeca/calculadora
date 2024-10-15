import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  resultado: number = 0;
  num1: number = 0;
  num2:  number = 0;
  pantalla: string = "0";
  oper: string = "";

  addNum(arg0: string) {
    if (this.pantalla == "0" || this.pantalla == this.resultado.toString()) {
      this.pantalla = arg0;
    } else {
      this.pantalla = this.pantalla + arg0;
    }
  }
  
  seleccionarOperador(oper: string) {
    this.num1 = +this.pantalla;
    this.pantalla = "";
    this.oper = oper;
  }

  equal() {
    this.num2 = +this.pantalla;
    if (this.oper == "+") {
      this.resultado = this.num1 + this.num2;
      this.pantalla = this.resultado.toString();
      this.num2 = 0;
    } if (this.oper == "-") {
      this.resultado = this.num1 - this.num2;
      this.pantalla = this.resultado.toString();
      this.num2 = 0;
    } if (this.oper == "") {
      this.pantalla = this.num1.toString();
    }
    this.num1 = 0;
  }

  delete() {
    this.resultado = 0;
    this.num1 = 0;
    this.num2 = 0;
    this.pantalla = "0";
    this.oper = "";
  }

  smdelete() {
    this.pantalla = this.pantalla.slice(0, -1);
  }
}