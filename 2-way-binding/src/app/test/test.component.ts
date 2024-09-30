import { Component ,Input,Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})

export class TestComponent {
public name:string="";
// @Input() public parentData: any;
//can use aliases
@Input('parentData') public pD: any;
//above line means input is parent data but within this component we refer to it as pD 

//creating an instance of event
@Output() public childEvent=new EventEmitter();

fireEvent(){
  this.childEvent.emit('hey message sent from child class');
  // fireevent is emitting a messsage using childevent eventemitter
}
//we are emitting the event on button click
//we also have to capture it in app.component.html

}
