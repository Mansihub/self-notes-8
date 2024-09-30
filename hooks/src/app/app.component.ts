import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hooks';
  textData:string =' ';
   destroy:boolean=false;

  OnSubmit(inputEl:HTMLInputElement){
   this.textData=inputEl.value;
  }

  DestroyComponent(){
    this.destroy=false;
  }
}
