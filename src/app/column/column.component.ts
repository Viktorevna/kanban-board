import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IColumn, ICON_NAMES } from 'src/app/_models/app.models';
import locale from './column.i18n';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input()
  isColumnNew = false;
  @Input()
  column: IColumn;

  @Output()
  addingColumnCancel = new EventEmitter();

  locale = locale;
  iconNames = ICON_NAMES;
  isItemNew = false;

  addNewItem() {
    this.isItemNew = true;
  }

  addingItemCancel(): void {
    this.isItemNew = false;
  }
}

