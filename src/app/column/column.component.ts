import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Column, ICON_NAMES, Item } from 'src/app/_models/columns.models';
import locale from './column.i18n';
import { ColumnsService } from '../_services/columns.service';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input()
  isColumnNew = false;
  @Input()
  column: Column;

  @Output()
  addingColumnCancel = new EventEmitter();
  @Output()
  editColumn = new EventEmitter<Column>();

  locale = locale;
  iconNames = ICON_NAMES;

  constructor(
    @Inject(ColumnsService) private columnsService
  ) {
  }

  addNewItem() {
    const item = new Item();
    this.column.items.push(item);
    this.columnsService.editColumn(this.column);
  }

  addingItemCancel(): void {
    this.column.items.pop();
    this.columnsService.editColumn(this.column);
  }

  editColumnItem(item: Item): void {
    const itemForEdit = this.column.items.find(i => {
      return i.id === item.id;
    });
    const itemForEditIndex = this.column.items.indexOf(itemForEdit);

    this.column.items[itemForEditIndex] = item;
    this.editColumn.emit(this.column);
  }
}

