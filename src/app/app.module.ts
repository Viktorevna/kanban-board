import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { ColumnTitleComponent } from './column-title/column-title.component';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    ColumnTitleComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
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
