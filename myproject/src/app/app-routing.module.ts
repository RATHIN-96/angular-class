import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component'; 
import { HeaderComponent } from './header/header.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'header',component:HeaderComponent},
  {path:'second',component:SecondComponent},
  {path:'third',component:ThirdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
