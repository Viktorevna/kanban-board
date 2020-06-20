import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { ColumnTitleComponent } from './column-title/column-title.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    ColumnTitleComponent,
    ItemComponent
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
