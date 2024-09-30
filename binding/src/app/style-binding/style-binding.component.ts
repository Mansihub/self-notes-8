import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  public color="red";
  public hasError=false;
  public styles={
    color:'blue',
    fontStyle:'italic'
  }
}
