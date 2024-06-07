import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator-application';
  result : any = '0';
  clickedValue : string = 'noValue';


  onBtnClick(value : string){
    if(value == "="){
      this.result = eval(this.result);   
      this.clickedValue = this.result;
      if(this.isFloat(this.result)){
        this.result = this.result.toFixed(3);
      }
    }
    else if(value == "RESET"){
      this.result = 0;   
      this.clickedValue = 'noValue';
    }
    else if(value == "DEL"){
      this.clickedValue = this.clickedValue.slice(0, -1);
      console.log(this.clickedValue);
      this.result = this.clickedValue;
    }
    else{
      this.onNumberClick(value);
    }
  }

  onNumberClick(value : string){
    if(this.clickedValue == 'noValue'){
      this.clickedValue = value;
    }else{
      this.clickedValue += value;
    }
    this.result = this.clickedValue;
  }
  isFloat(num) {
    return typeof num === 'number' && num % 1 !== 0;
}
}
