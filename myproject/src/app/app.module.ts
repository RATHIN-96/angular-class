import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { HighliteDirective } from './highlite.directive';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstComponent,
    SecondComponent,
    HighliteDirective,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
