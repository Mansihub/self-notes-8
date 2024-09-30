import { Component } from '@angular/core';
@Component({
  selector: 'app-test',
   templateUrl: './test.component.html',
  styleUrl: './test.component.css'
 })
export class TestComponent {

  public name="mansi";
// public siteURL=window.location.href;--->this also shows error for this we use ngoninit

}

