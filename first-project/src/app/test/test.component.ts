import { Component } from '@angular/core';

@Component({
  // 3 ways to specify selector for our component
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template:'<div>Inline template</div>',
  //the above line will print inline template on webpage itself
  //if our template is of more than one line then we can use backtick
  // styleUrl: './test.component.css'
  styles:[`div{
color:red;
  }`
    
  ]
})
export class TestComponent {

}
//any new component has to be added and imported in module in declaration array in app.module.ts
//include selector in html as custom tag,class or attribute
//html and css can be in separate file or they can be inline in typescript file