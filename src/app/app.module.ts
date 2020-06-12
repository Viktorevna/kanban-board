import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KbColumnComponent } from './kb-column/kb-column.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    KbColumnComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
