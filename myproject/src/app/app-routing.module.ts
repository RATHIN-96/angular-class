import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component'; 
import { HeaderComponent } from './header/header.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FormsComponent } from './forms/forms.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { CreateComponent } from './create/create.component';
import { MaterialComponent } from './material/material.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'header',component:HeaderComponent},
  {path:'second',component:SecondComponent},
  {path:'third',component:ThirdComponent},
  {path:'forms',component:FormsComponent},
  {path:'part1',component:Part1Component},
  {path:'part2',component:Part2Component},
  {path:'create',component:CreateComponent},
  {path:'material',component:MaterialComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
