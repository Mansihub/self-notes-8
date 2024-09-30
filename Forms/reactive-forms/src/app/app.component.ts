import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { on } from 'events';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-forms';
  // regForm=new FormGroup({
  //   userName:new FormControl('mansi'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalcode:new FormControl('')
  //   })
  //   });
  constructor(private fb:FormBuilder){ }
  regForm=this.fb.group(
    {
      userName:['mansinew',Validators.required] ,
      password:['on'],
      confirmPassword:['on'],
      address:this.fb.group({
       city:[''],
       state:[''],
       postalcode:['67']
      })
     })
   
    // loadApiData(){
    //   this.regForm.setValue({
    //      userName:'mansinew' ,
    //      password:'on',
    //      confirmPassword:'on',
    //      address:{
    //       city:'jpr',
    //       state:'raj',
    //       postalcode:'67'
    //      }
    //     })
    // }

    loadApiData(){
      this.regForm.patchValue({
         userName:'mansi' ,
         password:'on',
         confirmPassword:'on'
        })
    }
    }
