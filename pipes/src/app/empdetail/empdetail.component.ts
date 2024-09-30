import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrl: './empdetail.component.css'
})
export class EmpdetailComponent {
  public employees:any=[];
  public errorMsg:string='';

  constructor(private employeeService:EmployeeServiceService){
    // __employeeService-->local variable which gives us instance of EmployeeServiceService
    //make use of this instance and fetch employee data
  }
  ngOnInit(){
    // this.employees=this.employeeService.getEmployees();
    // WE HAVE TO SUBSCRIBE TO THE OBSERVABLE Returned by getemployee method
    // instance of employeeservice is calling getEmployees
    this.employeeService.getEmployees().subscribe(data=>this.employees=data,
      error=>this.errorMsg=error)

  }
}
