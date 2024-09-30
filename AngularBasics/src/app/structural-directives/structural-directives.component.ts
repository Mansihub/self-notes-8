import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  displayName=true;
  displayId=true;
  public color='pink'
  // for using ngFor directive,create an array in class
  public houses=['red','pink','green','orange'];
}
