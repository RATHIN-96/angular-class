import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { HighliteDirective } from './highlite.directive';
import { ThirdComponent } from './third/third.component';
import { SamplepipePipe } from './samplepipe.pipe';
import { FormsComponent } from './forms/forms.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstComponent,
    SecondComponent,
    HighliteDirective,
    ThirdComponent,
    SamplepipePipe,
    FormsComponent,
    Part1Component,
    Part2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
