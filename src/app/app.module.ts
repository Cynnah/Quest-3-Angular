import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayTerroristFilmsDirective } from './display-terrorist-films.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DisplayTerroristFilmsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
