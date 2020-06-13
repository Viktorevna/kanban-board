import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KbColumnComponent } from './kb-column/kb-column.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { KbAddNewColumnComponent } from './kb-add-new-column/kb-add-new-column.component';


@NgModule({
  declarations: [
    AppComponent,
    KbColumnComponent,
    KbAddNewColumnComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    MatIcon
  ]
})
export class AppModule {
}
