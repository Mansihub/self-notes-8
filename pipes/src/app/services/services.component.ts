import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
// public employees=[
//   {"id":1,"name":"a",age:20 },
//   {"id":2,"name":"b",age:21 },
//   {"id":3,"name":"c",age:18 },
//   {"id":4,"name":"d",age:22 },
// ]
public employees:any=[];
public errorMsg:string='';
constructor(private employeeService:EmployeeServiceService){
  // __employeeService-->local variable which gives us instance of EmployeeServiceService
  //make use of this instance and fetch employee data
}
// ngOnInit(){
//   this.employees=this.employeeService.getEmployees();
// }

ngOnInit(){
  // this.employees=this.employeeService.getEmployees();
  // WE HAVE TO SUBSCRIBE TO THE OBSERVABLE Returned by getemployee method
  // instance of employeeservice is calling getEmployees
  this.employeeService.getEmployees().subscribe(data=>this.employees=data,
    error=>this.errorMsg=error)

}
}
