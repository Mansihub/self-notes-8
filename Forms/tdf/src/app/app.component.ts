import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tdf';
  topics=['angular','express','nodejs']
  userModel=new User('hey','hey@mail.com',6,'default','morning',true);
  submitted=false;
  topicHasError=true;
  errorMsg="";
  
validateTopic(value: string){
    if(value==='default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }
  constructor(private enrollservice:EnrollmentService){
    
  }
 
OnSubmit(){
console.log(this.userModel)
// console.log(userForm);

    this.enrollservice.enroll(this.userModel).subscribe(data=>console.log('success',data),
    // error=>console.log('error',error))
    error=>this.errorMsg=error.statusText)
    this.submitted=true;
    
  }

 
}
