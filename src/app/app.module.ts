import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BasicHighlightDirective} from '../app/basic-highlight/basic-highlight.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
