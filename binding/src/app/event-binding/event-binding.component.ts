import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  public name="mansi";
  public greeting="";
  public eventinfo="";
  public greet="";
  public Textbox="";

  onClick(){
    console.log('yes working button');
    // this.greeting=this.name;
    this.greeting='welcome mansi!how are you?'
  }
  
  onClick2(event: any){
    console.log(event);
    this.eventinfo=event.type;
  }
  
  onClick3(value: any){
  console.log(value);
  this.Textbox=value;
  }
  
}
