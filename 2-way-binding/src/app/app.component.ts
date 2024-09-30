import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2-way-binding';
  public name:string='mansi vashistha';
  //above name to be sent to test component
  public message=" ";
}
