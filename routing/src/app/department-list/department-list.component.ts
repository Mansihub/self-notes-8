import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
constructor(private router:Router){}
 departments=[
  {"id":1,"name":"a" },
  {"id":2,"name":"b" },
  {"id":3,"name":"c" },
  {"id":4,"name":"d" }
]

OnSelect(department: { id: any; }){
this.router.navigate(['/departments',department.id])
}
}
