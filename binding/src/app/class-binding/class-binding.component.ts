import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
  public name="mansi";
  public myClass='classC';
  public hasError=false;
  public isSpecial=true;
  public messageClasses={
    "classA":!this.hasError,
    "classB":this.hasError,
    "classC":this.isSpecial
  }
  greetUser(){
    return "Hello " + this.name;
  }
}
