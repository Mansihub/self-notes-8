import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
const routes: Routes = [
  {path:'departments',component:DepartmentListComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'**',component:PageNotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DepartmentListComponent,PageNotFoundComponent,DepartmentDetailsComponent]