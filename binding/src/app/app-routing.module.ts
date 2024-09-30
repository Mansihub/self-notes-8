import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'classBinding',component:ClassBindingComponent},
  {path:'styleBinding',component:StyleBindingComponent},
  {path:'propertyBinding',component:PropertyBindingComponent},
  {path:'eventBinding',component:EventBindingComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
