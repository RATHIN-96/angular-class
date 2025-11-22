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
import { CreateComponent } from './create/create.component';
import { MaterialComponent } from './material/material.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import {HttpClient,HttpClientModule} from'@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    CreateComponent,
    MaterialComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






