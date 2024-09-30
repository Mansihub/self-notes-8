import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
   departmentId!:number
constructor(private route:ActivatedRoute){}

ngOnInit(){
  let id:any=this.route.snapshot.paramMap.get('id')
  this.departmentId=id;
}
}
