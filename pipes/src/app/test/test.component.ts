import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
public topic="Pipes For STRING DATATYPE"
public obj1={
  'name':'mansi',
  'id':78
}
public date=new Date();
}
