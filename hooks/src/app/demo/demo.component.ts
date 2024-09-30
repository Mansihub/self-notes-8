import { Component, Input ,OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
//writing implement after democomponent is not mandatory,it will still work the same way
export class DemoComponent {
 @Input() value:string='initialValue';
//when this class is instantiated ,firstly constructor will be called
constructor(){
  console.log('constructor called');
  //ABOVE LINE WILL BE PRINTED SAME NUMBER OF TIMES THAT WE CALL A COMPONENT
  // console.log(this.value);//output is not empty string it is initialVal
}
ngOnChanges(change:SimpleChanges){
  //only hook which takes an argument
  console.log('ngOnChanges called');
  //if text entered in textbox is changed then also ngOnChanges called
  ///if click on submit without chnaging value:ngOnChanges not  called
  //runs every time when value of 'value' property changes
  console.log(change);
}
//by the time constructor is called,input properties are not updated
ngOnInit(){
  //not the first lifecycle hook which gets called
  //can write initialization logic
  console.log('ngOnInit called');
  // console.log(this.value)//this time we get empty string-->value got updated with input property of textData
}

ngDoCheck(){
  console.log('ngDoCheck called');
  //runs when something changes
  //when text value changed then onchnage and docheck called
  ///if click on submit wihtout changing value:ngdocheck is called
}

ngAfterContentInit(){
  //called once during first change detection
  console.log('ngAfterContentInit called');
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called');
}

ngAfterViewInit(){
  //only once
  console.log('ngAfterViewInit called');
}

ngAfterViewChecked(){
  //only once
  console.log('ngAfterViewChecked called');
}

ngOnDestroy(){
  console.log('ngOnDestroy called');
}
}
